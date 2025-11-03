import * as React from "react";
import CardItem from "../CardItem";
import { AllMedia } from "@/types/types";

function CardSection({
  media,
  title = "Recommended for you",
  headingLevel = 2,
  itemHeadingLevel = 3,
  className = "",
}: {
  media: AllMedia[];
  title?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  itemHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const HeadingTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;
  return (
    <section
      aria-labelledby="card"
      className={`px-4 md:px-6 lg:px-10 relative max-w-[82.5rem] ${className}`}
    >
      <HeadingTag id="card" className="text-20 md:text-32">
        {title}
      </HeadingTag>

      <ul className="mt-6 lg:mt-8 grid gap-4 md:gap-x-8 md:gap-y-6 lg:gap-x-10 grid-cols-(--my-grid-cols-card-mobile) sm:grid-cols-(--my-grid-cols-card-tablet)">
        {media.map((item) => (
          <CardItem
            key={item.id}
            media={item}
            headingLevel={itemHeadingLevel}
          />
        ))}
      </ul>
    </section>
  );
}

export default CardSection;
