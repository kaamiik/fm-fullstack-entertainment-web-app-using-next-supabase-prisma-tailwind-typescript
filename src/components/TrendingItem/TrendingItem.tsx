import * as React from "react";
import ItemInfo from "../ItemInfo";
import MediaThumbnail from "../MediaThumbnail";
import { TrendingMedia } from "@/types/types";

function TrendingItem({ media }: { media: TrendingMedia }) {
  const trendingThumbnail = media.thumbnail.trending;

  return (
    <li className="grid grid-cols-1 grid-rows-1 shrink-0 relative">
      <MediaThumbnail
        href="/"
        isBookmarked={media.isBookmarked}
        image={{
          tablet: trendingThumbnail?.large || "/assets/fallback-large.jpg",
          mobile: trendingThumbnail?.small || "/assets/fallback-small.jpg",
          tabletSize: [470, 230],
          mobileSize: [240, 140],
        }}
        className="max-w-[21rem] sm:max-w-[29.5rem] row-start-1 col-start-1"
      />

      <ItemInfo
        year={media.year.toString()}
        category={media.category}
        rating={media.rating}
        className="px-2 py-2 sm:px-4 sm:py-4 row-start-1 col-start-1 self-end z-10"
        headingClassName="md:text-24"
      >
        {media.title}
      </ItemInfo>
    </li>
  );
}

export default TrendingItem;
