import LoginForm from "@/components/LoginForm";
import PageHeader from "@/components/PageHeader";
import { getSession } from "@/app/lib/dal";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();

  if (session?.userId) {
    redirect("/");
  }

  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <PageHeader />
      <main className="">
        <LoginForm />
      </main>
    </div>
  );
}
