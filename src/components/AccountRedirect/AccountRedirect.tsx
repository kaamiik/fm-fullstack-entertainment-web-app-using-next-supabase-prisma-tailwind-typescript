import * as React from "react";
import Link from "next/link";

function AccountRedirect({
  prompt,
  linkText,
  href,
  className = "",
}: {
  prompt: string;
  linkText: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={`mt-6 flex items-center justify-center gap-2 ${className}`}>
      <span>{prompt}</span>
      <Link
        href={href}
        className="text-red-500 hover:underline focus-visible:outline-white focus-visible:outline focus-visible:outline-offset-2"
      >
        {linkText}
      </Link>
    </div>
  );
}

export default AccountRedirect;
