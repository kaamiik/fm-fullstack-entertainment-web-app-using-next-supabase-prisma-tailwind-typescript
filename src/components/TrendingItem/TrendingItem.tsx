import * as React from 'react';
import ItemInfo from '../ItemInfo';
import MediaThumbnail from '../MediaThumbnail';
import { AllMedia } from '@/types/types';

function TrendingItem({ media }: { media: AllMedia }) {
  const trendingThumbnail = media.thumbnail.trending;

  return (
    <li className="relative grid shrink-0 grid-cols-1 grid-rows-1">
      <MediaThumbnail
        href={`/media/${media.slug}`}
        isBookmarked={media.isBookmarked}
        mediaId={media.id}
        image={{
          tablet: trendingThumbnail?.large || '/assets/fallback-large.jpg',
          mobile: trendingThumbnail?.small || '/assets/fallback-small.jpg',
          tabletSize: [470, 230],
          mobileSize: [240, 140],
        }}
        className="col-start-1 row-start-1 max-w-[21rem] sm:max-w-[29.5rem]"
      >
        <span aria-hidden="true">Play</span>
        <span className="sr-only">{`PLAY ${media.title}`}</span>
      </MediaThumbnail>

      <ItemInfo
        year={media.year.toString()}
        category={media.category}
        rating={media.rating}
        className="z-10 col-start-1 row-start-1 self-end px-2 py-2 sm:px-4 sm:py-4"
        headingClassName="md:text-24"
      >
        {media.title}
      </ItemInfo>
    </li>
  );
}

export default TrendingItem;
