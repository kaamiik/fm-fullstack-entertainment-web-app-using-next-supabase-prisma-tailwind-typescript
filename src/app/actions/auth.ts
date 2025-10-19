"use server";

import { signUpSchema, type SignUpSchema } from "@/app/lib/definitions";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function signUp(data: SignUpSchema) {
  if (!process.env.DATABASE_URL) {
    console.error("Missing DATABASE_URL environment variable");
    return {
      errors: {
        form: [
          "Server is not configured to access the database. Please set DATABASE_URL.",
        ],
      },
    };
  }
  const validateFields = signUpSchema.safeParse(data);

  // If server-side validation fails, return errors
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateFields.data;

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

    return {
      message: "User created successfully!",
      userId: user.id,
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      errors: {
        form: [
          "An error occurred while creating your account. Please try again.",
        ],
      },
    };
  }
}
