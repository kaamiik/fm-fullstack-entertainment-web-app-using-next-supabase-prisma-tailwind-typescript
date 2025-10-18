import LoginForm from "@/components/LoginForm";
import PageHeader from "@/components/PageHeader";
import SignUpForm from "@/components/SignUpForm";
import { prisma } from "@/lib/prisma";
export default async function Home() {
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <PageHeader />
      <main className="">
        <SignUpForm />
      </main>
    </div>
  );
}
