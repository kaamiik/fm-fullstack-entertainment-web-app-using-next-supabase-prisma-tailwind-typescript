import { getUser } from "@/app/lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import { getTVSeries } from "@/lib/media";
import SearchInput from "@/components/SearchInput";
import CardSection from "@/components/CardSection";
export default async function Home() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  const tvSeries = await getTVSeries(user.id);
  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pr-0">
        <MainHeader currentPath="/tv-series" />
      </div>
      <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <SearchInput
          className="px-4 md:px-6 lg:px-10"
          placeholder="Search for TV series"
        />

        <CardSection
          media={tvSeries}
          title="TV Series"
          headingLevel={1}
          level={2}
        />
      </main>
    </div>
  );
}
