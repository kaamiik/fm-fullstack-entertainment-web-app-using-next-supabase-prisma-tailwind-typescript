"use server";

import { signUpSchema, type SignUpSchema } from "@/app/lib/definitions";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function signUp(data: SignUpSchema) {
  const validatedFields = signUpSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        errors: {
          form: ["A user with this email already exists."],
        },
      };
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("Created user:", user.id);

    await createSession(user.id);
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Database error:", error);
    return {
      errors: {
        form: [
          "An error occurred while creating your account. Please try again later.",
        ],
      },
    };
  }

  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
