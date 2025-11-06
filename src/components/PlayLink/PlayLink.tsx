import * as React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

function PlayLink({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode;
  href: string | UrlObject;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`z-20 col-start-1 row-start-1 flex w-fit items-center gap-4 self-center justify-self-center rounded-full bg-white/25 p-1 pe-6 opacity-0 outline-0 transition-opacity duration-150 after:absolute after:inset-0 after:z-20 after:content-[''] hover:opacity-100 focus-visible:opacity-100 focus-visible:after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-red-500 sm:p-2 ${className}`}
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
