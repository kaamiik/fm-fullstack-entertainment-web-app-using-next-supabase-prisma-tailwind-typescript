import { signUpSchema, FormState, SignUpSchema } from "@/app/lib/definitions";

export async function signUp(state: FormState, data: SignUpSchema) {
  // Server-side validation for security
  const validatedFields = signUpSchema.safeParse(data);

  // If server-side validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // TODO: Call the provider or db to create a user...
  console.log("Creating user:", { email, password });

  return { message: "User created successfully!" };
}
