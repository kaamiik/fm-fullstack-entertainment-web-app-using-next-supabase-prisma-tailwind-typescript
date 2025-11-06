import * as React from 'react';
import { UrlObject } from 'url';
import PlayLink from '../PlayLink';
import BookmarkToggle from '../‌BookmarkToggle';
import ResponsivePicture from '../ResponsivePicture';

function MediaThumbnail({
  href,
  isBookmarked = false,
  mediaId,
  image,
  children,
  className = '',
}: {
  href: string | UrlObject;
  isBookmarked?: boolean;
  mediaId: number;
  image: {
    desktop?: string;
    tablet: string;
    mobile: string;
    desktopSize?: [number, number];
    tabletSize: [number, number];
    mobileSize: [number, number];
  };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative grid grid-cols-1 grid-rows-1 has-[a:focus-visible]:[&>picture::before]:bg-black/50 has-[a:hover]:[&>picture::before]:bg-black/50 ${className}`}
    >
      <PlayLink href={href} className="col-start-1 row-start-1">
        {children}
      </PlayLink>

      <BookmarkToggle
        className="z-30 col-start-1 row-start-1 mt-2 mr-2 grid self-start justify-self-end md:mt-4 md:mr-6"
        mediaId={mediaId}
        isBookmarked={isBookmarked}
      />

      <ResponsivePicture
        desktopWidth={image.desktopSize?.[0]}
        desktopHeight={image.desktopSize?.[1]}
        tabletWidth={image.tabletSize?.[0]}
        tabletHeight={image.tabletSize?.[1]}
        mobileWidth={image.mobileSize[0]}
        mobileHeight={image.mobileSize[1]}
        pathDesktop={image.desktop}
        pathTablet={image.tablet}
        pathMobile={image.mobile}
        className="col-start-1 row-start-1"
      />
    </div>
  );
}

export default MediaThumbnail;
