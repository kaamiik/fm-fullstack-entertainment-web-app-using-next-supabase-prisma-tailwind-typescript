import PageHeader from "@/components/PageHeader";
import { prisma } from "@/lib/prisma";
import { getUser } from "./lib/dal";
import { redirect } from "next/navigation";
export default async function Home() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="grid gap-14 p-6 pt-12 md:gap-20 md:p-8 md:pt-18">
      <PageHeader />
      <main className="">
        <h1>Welcome {user.email}</h1>
      </main>
    </div>
  );
}
