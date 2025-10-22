import "server-only";
import * as React from "react";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";
import { redirect } from "next/navigation";

export const getSession = React.cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session) {
    return null;
  }

  return session;
});

export const verifySession = React.cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = React.cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const user = prisma.user.findUnique({
      where: { id: session.userId as string },
      select: {
        id: true,
        email: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to fetch user", error);
    return null;
  }
});
