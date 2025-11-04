import { getUser } from "@/app/lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import { getAllMedia } from "@/lib/media";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import CardSection from "@/components/CardSection";
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

  const bookmarkedMedia = allMedia.filter((media) => media.isBookmarked);

  const bookmarkedMovies = bookmarkedMedia.filter(
    (media) => media.category === "Movie"
  );
  const bookmarkedTvSeries = bookmarkedMedia.filter(
    (media) => media.category === "TV Series"
  );

  const searchResults = q
    ? bookmarkedMedia.filter((media) =>
        media.title.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pr-0">
        <MainHeader currentPath="/bookmark" />
      </div>
      {q ? (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="sr-only">BOOKMARKED</h1>
          <SearchInput className="px-4 md:px-6 lg:px-10" />
          <SearchResults media={searchResults} query={q} headingLevel={2} />
        </main>
      ) : (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="sr-only">BOOKMARKED</h1>
          <SearchInput className="px-4 md:px-6 lg:px-10" />

          {bookmarkedMovies.length > 0 && (
            <CardSection title="Bookmarked Movies" media={bookmarkedMovies} />
          )}
          {bookmarkedTvSeries.length > 0 && (
            <CardSection
              title="Bookmarked TV Series"
              media={bookmarkedTvSeries}
            />
          )}

          {bookmarkedMedia.length === 0 && (
            <div className="px-4 md:px-6 lg:px-10">
              <p className="text-20 md:text-32 text-center text-balance py-20">
                No bookmarked shows yet
              </p>
            </div>
          )}
        </main>
      )}
    </div>
  );
}
