import { getImageProps } from "next/image";
import * as React from "react";

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
      <div className="grid gap-2 px-4 py-4 sm:px-6 row-start-1 col-start-1 self-end">
        <h3 className="font-medium md:text-24 order-1">Beyond Earth</h3>
        <dl className="flex items-center gap-2">
          <div>
            <dt className="sr-only">YEAR</dt>
            <dd className="opacity-75 text-12 sm:text-15">2019</dd>
          </div>
          <div className="flex items-center gap-1.5 before:content-['•'] before:opacity-50">
            <dt className="sr-only">CATEGORY</dt>
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
            <dd className="opacity-75 text-12 sm:text-15">Movie</dd>
          </div>
          <div className="flex items-center gap-1.5 before:content-['•'] before:opacity-50">
            <dt className="sr-only">RATING</dt>
            <dd className="opacity-75 text-12 sm:text-15">PG</dd>
          </div>
        </dl>
      </div>
    </li>
  );
}

export default TrendingItem;
