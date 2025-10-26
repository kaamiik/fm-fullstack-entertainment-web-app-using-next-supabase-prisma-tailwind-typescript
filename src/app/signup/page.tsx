import SignUpForm from "@/components/SignUpForm";
import AuthHeader from "@/components/AuthHeader";

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
