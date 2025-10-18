"use client";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import FormInput from "../FormInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AccountRedirect from "../AccountRedirect";

const loginSchema = z.object({
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
});

type LoginSchema = z.infer<typeof loginSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <div className="mx-auto max-w-[25rem] rounded-[10px] bg-blue-900 px-6 py-8">
      <h1 className="text-32 font-light text-white">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
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
          Login to your account
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
