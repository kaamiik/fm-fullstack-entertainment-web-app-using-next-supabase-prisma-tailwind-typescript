import { getImageProps } from "next/image";
import * as React from "react";
import ItemInfo from "../ItemInfo";
import Link from "next/link";

function TrendingItem({ className = "" }: { className?: string }) {
  const common = {
    alt: "",
  };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 470,
    height: 230,
    src: "/assets/thumbnails/beyond-earth/trending/large.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 240,
    height: 140,
    src: "/assets/thumbnails/beyond-earth/trending/small.jpg",
  });
  return (
    <li className={`grid grid-cols-1 grid-rows-1 shrink-0 ${className}`}>
      <Link
        href={"/"}
        className="bg-white/25 flex items-center gap-4 p-1 sm:p-2 pe-6 w-fit rounded-full row-start-1 col-start-1 self-center justify-self-center z-10"
      >
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
            fill="#FFF"
          />
        </svg>
        Play
      </Link>
      <form
        action=""
        className="grid row-start-1 col-start-1 z-10 mt-2 mr-2 md:mt-4 md:mr-6 justify-self-end self-start"
      >
        <button className="px-2.5 bg-black/50 rounded-full aspect-square cursor-pointer outline-0 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>
      </form>
      <picture className="row-start-1 col-start-1">
        <source media="(min-width: 40rem)" srcSet={desktop} />
        <source media="(min-width: 0)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: "100%", height: "auto" }}
          className="max-w-[21rem] sm:max-w-[29.5rem] rounded-lg"
          alt=""
        />
      </picture>
      <ItemInfo
        year="2019"
        category="Movie"
        rating="PG"
        className="px-2 py-2 sm:px-4 sm:py-4 row-start-1 col-start-1 self-end"
        headingClassName="md:text-24"
      >
        Beyond Earth
      </ItemInfo>
    </li>
  );
}

export default TrendingItem;
