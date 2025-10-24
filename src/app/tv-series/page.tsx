import { getUser } from "@/app/lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
export default async function Home() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pe-0">
        <MainHeader currentPath="/tv-series" />
      </div>
      <main className="">
        <h1>Welcome {user.email}</h1>
      </main>
    </div>
  );
}
