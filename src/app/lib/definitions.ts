import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "Can't be empty")
      .email("Invalid email address")
      .trim(),
    password: z
      .string()
      .min(1, "Can't be empty")
      .min(8, "Be at least 8 characters long")
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must mach",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;
