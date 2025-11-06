import { getUser } from '@/app/lib/dal';
import ItemInfo from '@/components/ItemInfo';
import MainHeader from '@/components/MainHeader';
import { getMediaBySlug } from '@/lib/media';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function MediaItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }

  const { slug } = await params;

  const mediaItem = await getMediaBySlug(slug, user.id);

  if (!mediaItem) {
    return (
      <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
        <div className="md:px-6 md:pt-6 lg:ps-8 lg:pt-8 lg:pr-0">
          <MainHeader currentPath={`/media/${slug}`} />
        </div>
        <main className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pt-16 lg:pl-0">
          <div className="px-4 md:px-6 lg:px-10">
            <h1 className="text-20 md:text-32">Media not found</h1>
            <p>{"The media item you're looking for doesn't exist."}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-0">
      <div className="md:px-6 md:pt-6 lg:ps-8 lg:pt-8 lg:pr-0">
        <MainHeader currentPath={`/media/${slug}`} />
      </div>
      <main className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:pt-16 lg:pl-0">
        <div className="px-4 md:px-6 lg:px-10">
          <div className="mx-auto mb-6 max-w-md md:mb-8">
            <Image
              src={
                mediaItem.thumbnail.regular?.large ||
                '/assets/fallback-large.jpg'
              }
              width={280}
              height={174}
              alt={mediaItem.title}
              className="h-auto w-full rounded-lg"
            />
          </div>

          <div className="mx-auto max-w-md">
            <ItemInfo
              year={mediaItem.year.toString()}
              category={mediaItem.category}
              rating={mediaItem.rating}
              headingLevel={1}
              headingClassName="text-2xl md:text-3xl font-medium"
              className=""
            >
              {mediaItem.title}
            </ItemInfo>
          </div>
        </div>
      </main>
    </div>
  );
}
