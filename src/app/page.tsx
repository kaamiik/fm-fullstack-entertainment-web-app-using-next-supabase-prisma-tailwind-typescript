import { getUser } from "./lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/components/SearchInput";
import TrendingSection from "@/components/TrendingSection";
import CardSection from "@/components/CardSection";
import SearchResults from "@/components/SearchResults";
import { getAllMedia } from "@/lib/media";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;

  if (q) {
    return {
      title: `Search for "${q}" - Entertainment Web App`,
    };
  }

  return {
    title: "Home - Entertainment Web App",
    description: "Browse trending and recommended media",
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  const { q } = await searchParams;
  const allMedia = await getAllMedia(user.id);

  const trendingMedia = allMedia.filter((media) => media.isTrending);
  const recommendedMedia = allMedia.filter((media) => !media.isTrending);

  const searchResults = q
    ? allMedia.filter((media) =>
        media.title.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pr-0">
        <MainHeader />
      </div>
      {q ? (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="sr-only">HOME</h1>
          <SearchInput className="px-4 md:px-6 lg:px-10" />
          <SearchResults media={searchResults} query={q} headingLevel={2} />
        </main>
      ) : (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="sr-only">HOME</h1>
          <SearchInput className="px-4 md:px-6 lg:px-10" />

          <TrendingSection trendingMedia={trendingMedia} />

          <CardSection media={recommendedMedia} />
        </main>
      )}
    </div>
  );
}
