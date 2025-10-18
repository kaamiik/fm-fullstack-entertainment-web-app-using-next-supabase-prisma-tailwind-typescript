import { signUpSchema, FormState } from "@/app/lib/definitions";

export async function signUp(state: FormState, formData: FormData) {
  const validateFields = signUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
}
