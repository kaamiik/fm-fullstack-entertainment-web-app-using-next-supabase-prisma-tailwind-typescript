import LoginForm from "@/components/LoginForm";
import AuthHeader from "@/components/AuthHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Entertainment Web App",
  description: "Sign in to your account",
};

export default async function LoginPage() {
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <AuthHeader />
      <main className="">
        <LoginForm />
      </main>
    </div>
  );
}
