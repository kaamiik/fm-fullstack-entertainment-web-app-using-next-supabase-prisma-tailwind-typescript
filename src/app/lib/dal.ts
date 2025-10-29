import "server-only";
import * as React from "react";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { decrypt, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export const getSession = React.cache(async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const payload = await decrypt(cookie);

  if (!payload?.sessionId) {
    return null;
  }

  try {
    const session = await prisma.session.findUnique({
      where: { id: payload.sessionId as string },
      include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) {
      await deleteSession();
      return null;
    }

    return {
      sessionId: session.id,
      userId: session.userId,
      user: session.user,
      expiresAt: session.expiresAt,
    };
  } catch (error) {
    console.error("Error verifying user existence:", error);

    return null;
  }
});

export const verifySession = React.cache(async () => {
  const session = await getSession();

  if (!session?.userId) {
    await deleteSession();
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = React.cache(async () => {
  const session = await getSession();
  if (!session) return null;

  return session.user;
});
