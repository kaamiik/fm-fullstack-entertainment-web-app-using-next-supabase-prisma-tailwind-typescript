"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { signUp } from "@/app/actions/auth";
import Button from "../Button";
import FormInput from "../FormInput";
import { signUpSchema, SignUpSchema } from "@/app/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import AccountRedirect from "../AccountRedirect";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchema) => {
    try {
      const result = await signUp(data);

      if (result?.errors) {
        if ("form" in result.errors) {
          setError("root", { message: result.errors.form[0] });
        } else {
          if (result.errors.email) {
            setError("email", { message: result.errors.email[0] });
          }
          if (result.errors.password) {
            setError("password", { message: result.errors.password[0] });
          }
          if (result.errors.confirmPassword) {
            setError("confirmPassword", {
              message: result.errors.confirmPassword[0],
            });
          }
        }
      } else {
        reset();
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div className="mx-auto max-w-[25rem] rounded-[10px] bg-blue-900 px-6 py-8">
      <h1 className="text-32 font-light text-white">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {errors.root?.message && (
          <p className="mb-4 text-13 text-red-500 text-center">
            {errors.root.message}
          </p>
        )}
        <div className="grid gap-6">
          <FormInput
            {...register("email")}
            label="Email"
            type="email"
            name="email"
            placeholder="Email address"
            error={errors.email?.message as string}
          />
          <FormInput
            {...register("password")}
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            error={errors.password?.message as string}
          />
          <FormInput
            {...register("confirmPassword")}
            label="Repeat Password"
            type="password"
            name="confirmPassword"
            placeholder="Repeat Password"
            error={errors.confirmPassword?.message as string}
          />
        </div>
        <Button className="mt-10" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create an account"}
        </Button>
      </form>
      <AccountRedirect
        prompt="Already have an account?"
        linkText="Login"
        href="/login"
      />
    </div>
  );
}

export default SignUpForm;
