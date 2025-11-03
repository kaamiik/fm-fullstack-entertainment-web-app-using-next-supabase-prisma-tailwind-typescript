import { getUser } from "@/app/lib/dal";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/components/SearchInput";
import CardSection from "@/components/CardSection";
import SearchResults from "@/components/SearchResults";
import { getAllMedia } from "@/lib/media";

export default async function MoviesPage({
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
  const movies = allMedia.filter((media) => media.category === "Movie");

  const searchResults = q
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:pt-6 md:px-6 lg:pt-8 lg:ps-8 lg:pr-0">
        <MainHeader currentPath="/movies" />
      </div>

      {q ? (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <h1 className="sr-only">Movies</h1>
          <SearchInput
            className="px-4 md:px-6 lg:px-10"
            placeholder="Search for movies"
          />
          <SearchResults media={searchResults} query={q} headingLevel={1} />
        </main>
      ) : (
        <main className="lg:pl-0 lg:pt-16 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <SearchInput
            className="px-4 md:px-6 lg:px-10"
            placeholder="Search for movies"
          />
          <CardSection media={movies} title="Movies" headingLevel={1} />
        </main>
      )}
    </div>
  );
}
