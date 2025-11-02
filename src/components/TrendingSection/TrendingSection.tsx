import * as React from "react";
import TrendingItem from "../TrendingItem";
import { TrendingMedia } from "@/types/types";

function TrendingSection({
  trendingMedia,
}: {
  trendingMedia: TrendingMedia[];
}) {
  return (
    <section aria-labelledby="trending" className="">
      <h2 id="trending" className="text-20 md:text-32 pl-4 md:pl-6 lg:pl-10">
        Trending
      </h2>
      <ul className="md:mt-2 py-4 px-4 md:px-6 lg:px-10 flex gap-4 sm:gap-10 relative scrollbar-thumb-red-500 scrollbar-hover:scrollbar-thumb-red-400 scrollbar-active:scrollbar-thumb-red-600 scrollbar-track-blue-500 scrollbar-thin overflow-x-auto outline-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
        {trendingMedia.map((media) => (
          <TrendingItem key={media.id} media={media} />
        ))}
      </ul>
    </section>
  );
}

export default TrendingSection;
