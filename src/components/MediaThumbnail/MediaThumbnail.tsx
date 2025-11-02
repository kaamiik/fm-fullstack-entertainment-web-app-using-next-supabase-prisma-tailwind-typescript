import * as React from "react";
import { UrlObject } from "url";
import PlayLink from "../PlayLink";
import BookmartToggle from "../‌BookmarkToggle";
import ResponsivePicture from "../ResponsivePicture";

function MediaThumbnail({
  href,
  isBookmarked = false,
  image,
  className = "",
}: {
  href: string | UrlObject;
  isBookmarked?: boolean;
  image: {
    desktop?: string;
    tablet: string;
    mobile: string;
    desktopSize?: [number, number];
    tabletSize: [number, number];
    mobileSize: [number, number];
  };
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 grid-rows-1 relative has-[a:hover]:[&>picture::before]:bg-black/50 has-[a:focus-visible]:[&>picture::before]:bg-black/50 ${className}`}
    >
      <PlayLink href={href} className="row-start-1 col-start-1">
        Play
      </PlayLink>

      <BookmartToggle
        className="grid row-start-1 col-start-1 mt-2 mr-2 md:mt-4 md:mr-6 justify-self-end self-start z-30"
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
        className="row-start-1 col-start-1"
      />
    </div>
  );
}

export default MediaThumbnail;
