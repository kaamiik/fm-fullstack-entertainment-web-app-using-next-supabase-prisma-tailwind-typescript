import SignUpForm from "@/components/SignUpForm";
import AuthHeader from "@/components/AuthHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Entertainment Web App",
  description: "Create your account",
};

export default async function SignUpPage() {
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <AuthHeader />
      <main className="">
        <SignUpForm />
      </main>
    </div>
  );
}
