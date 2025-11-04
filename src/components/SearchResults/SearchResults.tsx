import { AllMedia } from "@/types/types";
import * as React from "react";
import CardItem from "../CardItem";

function SearchResults({
  media,
  headingLevel,
  query,
  className = "",
}: {
  media: AllMedia[];
  query?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const capitalizedQuery = query
    ?.split(/\s+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  return (
    <div
      className={`px-4 md:px-6 lg:px-10 relative max-w-[82.5rem] ${className}`}
    >
      {media.length === 0 ? (
        <p className="text-20 sm:text-32 py-20 text-center text-balance">
          {`No results found for ‘${capitalizedQuery}’`}
        </p>
      ) : (
        <p className="text-20 md:text-32">
          {`Found ${media.length} ${
            media.length > 1 ? "results" : "result"
          } for ‘${capitalizedQuery}’`}
        </p>
      )}

      <ul className="mt-6 lg:mt-8 grid gap-4 md:gap-x-8 md:gap-y-6 lg:gap-x-10 grid-cols-(--my-grid-cols-card-mobile) sm:grid-cols-(--my-grid-cols-card-tablet)">
        {media.map((item) => (
          <CardItem key={item.id} media={item} headingLevel={headingLevel} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
