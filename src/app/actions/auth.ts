"use server";

import {
  signUpSchema,
  loginSchema,
  type SignUpSchema,
  type LoginSchema,
} from "@/app/lib/definitions";
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

export async function login(data: LoginSchema) {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        errors: {
          form: ["Invalid email or password."],
        },
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return {
        errors: {
          form: ["Invalid email or password."],
        },
      };
    }

    await createSession(user.id);
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Database error:", error);

    return {
      errors: {
        form: ["An error occurred while logging in. Please try again later."],
      },
    };
  }
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
