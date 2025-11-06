import "server-only";
import { SignJWT, jwtVerify } from "jose";
import type { SessionPayload } from "./definitions";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    if (!session || typeof session !== "string" || session.trim() === "") {
      return null;
    }

    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify session", error);
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await prisma.session.create({
    data: {
      userId,
      expiresAt,
    },
  });

  const encryptedSession = await encrypt({
    sessionId: session.id,
    expiresAt,
  });

  const cookieStore = await cookies();

  cookieStore.set("session", encryptedSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const sessionCookie = (await cookies()).get("session")?.value;
  const payload = await decrypt(sessionCookie);

  if (!sessionCookie || !payload) {
    return null;
  }

  // Verify session exists in database
  const dbSession = await prisma.session.findUnique({
    where: { id: payload.sessionId as string },
  });

  if (!dbSession) {
    await deleteSession();
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await prisma.session.update({
    where: { id: payload.sessionId as string },
    data: { expiresAt: expires },
  });

  const encryptedSession = await encrypt({
    sessionId: payload.sessionId as string,
    expiresAt: expires,
  });

  const cookieStore = await cookies();
  cookieStore.set("session", encryptedSession, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  const payload = await decrypt(sessionCookie);

  if (payload?.sessionId) {
    await prisma.session.deleteMany({
      where: { id: payload.sessionId },
    });
  }

  cookieStore.delete("session");
}
