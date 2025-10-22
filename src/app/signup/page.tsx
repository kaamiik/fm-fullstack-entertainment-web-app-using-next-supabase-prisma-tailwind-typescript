import SignUpForm from "@/components/SignUpForm";
import PageHeader from "@/components/PageHeader";

export default function SignUpPage() {
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <PageHeader />
      <main className="">
        <SignUpForm />
      </main>
    </div>
  );
}
