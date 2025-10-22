import LoginForm from "@/components/LoginForm";
import PageHeader from "@/components/PageHeader";

export default function LoginPage() {
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <PageHeader />
      <main className="">
        <LoginForm />
      </main>
    </div>
  );
}
