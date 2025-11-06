import * as React from 'react';
import { clsx } from 'clsx';

function ItemInfo({
  children,
  year,
  category,
  rating,
  headingLevel = 3,
  headingClassName,
  className,
}: {
  children: React.ReactNode;
  year: string;
  category: string;
  rating: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  headingClassName?: string;
  className?: string;
}) {
  const HeadingTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div className={clsx('grid gap-1 sm:gap-2', className)}>
      <HeadingTag className={clsx('order-1 font-medium', headingClassName)}>
        {children}
      </HeadingTag>

      <dl className="flex items-center gap-2">
        <div>
          <dt className="sr-only">YEAR</dt>
          <dd className="text-12 sm:text-15 opacity-75">{year}</dd>
        </div>

        <div className="flex items-center gap-1.5 before:opacity-50 before:content-['•']">
          <dt className="sr-only">CATEGORY</dt>
          {category === 'Movie' ? (
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="currentColor"
                opacity=".75"
              />
            </svg>
          ) : (
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
          )}
          <dd className="text-12 sm:text-15 opacity-75">{category}</dd>
        </div>

        <div className="flex items-center gap-1.5 before:opacity-50 before:content-['•']">
          <dt className="sr-only">RATING</dt>
          <dd className="text-12 sm:text-15 opacity-75">{rating}</dd>
        </div>
      </dl>
    </div>
  );
}

export default ItemInfo;
