import * as React from "react";
import ItemInfo from "../ItemInfo";
import MediaThumbnail from "../MediaThumbnail";
import { RecommendedMedia } from "@/types/types";

function CardItem({
  media,
  level = 2,
}: {
  media: RecommendedMedia;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const regularThumbnail = media.thumbnail.regular;

  return (
    <li className="grid gap-2">
      <MediaThumbnail
        href="/"
        isBookmarked={media.isBookmarked}
        image={{
          desktop: regularThumbnail?.large || "/assets/fallback-large.jpg",
          tablet: regularThumbnail?.medium || "/assets/fallback-medium.jpg",
          mobile: regularThumbnail?.small || "/assets/fallback-small.jpg",
          desktopSize: [280, 174],
          tabletSize: [220, 140],
          mobileSize: [164, 110],
        }}
        className="max-w-[17.5rem] row-start-1 col-start-1"
      />
      <ItemInfo
        year={media.year.toString()}
        category={media.category}
        rating={media.rating}
        className=""
        headingClassName="text-14 md:text-18"
        level={level}
      >
        {media.title}
      </ItemInfo>
    </li>
  );
}

export default CardItem;
