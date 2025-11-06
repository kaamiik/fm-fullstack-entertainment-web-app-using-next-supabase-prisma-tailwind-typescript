'use client';

import { toggleBookmark } from '@/lib/actions';
import * as React from 'react';

function BookmarkToggle({
  isBookmarked = false,
  mediaId,
  className = '',
}: {
  isBookmarked?: boolean;
  mediaId: number;
  className?: string;
}) {
  const [optimisticBookmarked, addOptimisitic] = React.useOptimistic(
    isBookmarked,
    (currentState, optimisticValue: boolean) => {
      return optimisticValue;
    }
  );

  async function handleAction(formData: FormData) {
    addOptimisitic(!optimisticBookmarked);
    await toggleBookmark(formData);
  }

  return (
    <form action={handleAction} className={className}>
      <input type="hidden" name="mediaId" value={mediaId} />
      <button
        className="group z-30 aspect-square cursor-pointer rounded-full bg-black/50 px-2.5 outline-0 transition-colors duration-75 hover:bg-white focus-visible:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        aria-labelledby="bookmark"
      >
        <span id="bookmark" hidden>
          {optimisticBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
        </span>
        {optimisticBookmarked ? (
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              fill="#FFF"
              className="transition-colors duration-75 group-hover:fill-black group-focus-visible:fill-black"
            />
          </svg>
        ) : (
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
              className="transition-colors duration-75 group-hover:stroke-black group-focus-visible:stroke-black"
            />
          </svg>
        )}
      </button>
    </form>
  );
}

export default BookmarkToggle;
