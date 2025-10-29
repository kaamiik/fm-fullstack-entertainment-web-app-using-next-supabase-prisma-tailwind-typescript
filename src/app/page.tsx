import { getUser } from "./lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/components/SearchInput";
import TrendingSection from "@/components/TrendingSection";
export default async function Home() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-9">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pr-0">
        <MainHeader />
      </div>
      <main className="pl-4 md:pl-8 lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <h1 className="sr-only">HOME</h1>
        <SearchInput />
        <div className="grid gap-6 md:gap-10">
          <TrendingSection />
        </div>
      </main>
    </div>
  );
}
