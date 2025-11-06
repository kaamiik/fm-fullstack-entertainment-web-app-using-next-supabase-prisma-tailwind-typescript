import { getUser } from '@/app/lib/dal';
import { redirect } from 'next/navigation';
import MainHeader from '@/components/MainHeader';
import SearchInput from '@/components/SearchInput';
import CardSection from '@/components/CardSection';
import SearchResults from '@/components/SearchResults';
import { getAllMedia } from '@/lib/media';
import type { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;

  if (q) {
    return {
      title: `Search "${q}" in TV Series - Entertainment Web App`,
    };
  }

  return {
    title: 'TV Series - Entertainment Web App',
    description: 'Browse all TV series',
  };
}

export default async function TvSeriesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }

  const { q } = await searchParams;
  const allMedia = await getAllMedia(user.id);
  const tvSeries = allMedia.filter((media) => media.category === 'TV Series');

  const searchResults = q
    ? tvSeries.filter((series) =>
        series.title.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:px-6 md:pt-6 lg:ps-8 lg:pt-8 lg:pr-0">
        <MainHeader currentPath="/tv-series" />
      </div>

      {q ? (
        <main className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pt-16 lg:pl-0">
          <h1 className="sr-only">TV Series</h1>
          <SearchInput
            className="px-4 md:px-6 lg:px-10"
            placeholder="Search for TV series"
          />
          <SearchResults media={searchResults} query={q} headingLevel={1} />
        </main>
      ) : (
        <main className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pt-16 lg:pl-0">
          <SearchInput
            className="px-4 md:px-6 lg:px-10"
            placeholder="Search for TV series"
          />
          <CardSection media={tvSeries} title="TV Series" headingLevel={1} />
        </main>
      )}
    </div>
  );
}
