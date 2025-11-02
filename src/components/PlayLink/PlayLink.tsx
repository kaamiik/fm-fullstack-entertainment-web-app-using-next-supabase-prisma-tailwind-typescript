import * as React from "react";
import Link from "next/link";
import { UrlObject } from "url";

function PlayLink({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string | UrlObject;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`bg-white/25 flex items-center gap-4 p-1 sm:p-2 pe-6 w-fit rounded-full row-start-1 col-start-1 self-center justify-self-center z-20 opacity-0 hover:opacity-100 focus-visible:opacity-100 after:z-20 after:absolute after:content-[''] after:inset-0 outline-0 focus-visible:after:outline-2 focus-visible:after:outline-red-500 focus-visible:after:outline-offset-2 focus-visible:after:rounded-lg transition-opacity duration-150 ${className}`}
    >
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
          fill="#FFF"
        />
      </svg>
      {children}
    </Link>
  );
}

export default PlayLink;
