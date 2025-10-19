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
  const [state, action] = React.useActionState(signUp, undefined);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchema) => {
    React.startTransition(() => {
      action(data);
    });
    reset();
  };

  return (
    <div className="mx-auto max-w-[25rem] rounded-[10px] bg-blue-900 px-6 py-8">
      <h1 className="text-32 font-light text-white">Sign Up</h1>
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
      {state?.message && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm">
          {state.message}
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
