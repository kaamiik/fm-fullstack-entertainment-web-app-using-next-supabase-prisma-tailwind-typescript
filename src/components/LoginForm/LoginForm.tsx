"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import FormInput from "../FormInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AccountRedirect from "../AccountRedirect";
import { loginSchema, type LoginSchema } from "@/app/lib/definitions";
import { login } from "@/app/actions/auth";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const result = await login(data);

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
        }
      } else {
        reset();
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
        return;
      }
      console.error("Login error:", error);
      setError("root", {
        type: "server",
        message: "An unexpected error occurred.",
      });
    }
  };
  return (
    <div className="mx-auto max-w-[25rem] rounded-[10px] bg-blue-900 px-6 py-8">
      <h1 className="text-32 font-light text-white">Login</h1>
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
        </div>
        <Button className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login to your account"}
        </Button>
      </form>
      <AccountRedirect
        prompt="Don't have an account?"
        linkText="Sign Up"
        href="/signup"
      />
    </div>
  );
}

export default LoginForm;
