import SignUpForm from "@/components/SignUpForm";
import AuthHeader from "@/components/AuthHeader";
import { getSession } from "../lib/dal";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getSession();

  if (session?.userId) {
    redirect("/");
  }
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <AuthHeader />
      <main className="">
        <SignUpForm />
      </main>
    </div>
  );
}
