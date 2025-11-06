import * as React from 'react';
import { getImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function ResponsivePicture({
  desktopWidth,
  desktopHeight,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
  pathDesktop,
  pathTablet,
  pathMobile,
  className = '',
}: {
  desktopWidth?: number | `${number}` | undefined;
  desktopHeight?: number | `${number}` | undefined;
  tabletWidth: number | `${number}` | undefined;
  tabletHeight: number | `${number}` | undefined;
  mobileWidth: number | `${number}` | undefined;
  mobileHeight: number | `${number}` | undefined;
  pathDesktop?: string | StaticImport;
  pathTablet: string | StaticImport;
  pathMobile: string | StaticImport;
  className?: string;
}) {
  const common = {
    alt: '',
  };

  const desktop =
    pathDesktop && desktopWidth && desktopHeight
      ? getImageProps({
          ...common,
          width: desktopWidth,
          height: desktopHeight,
          src: pathDesktop,
        }).props.srcSet
      : null;

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: tabletWidth,
    height: tabletHeight,
    src: pathTablet,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: mobileWidth,
    height: mobileHeight,
    src: pathMobile,
  });
  return (
    <picture className="col-start-1 row-start-1 before:absolute before:inset-0 before:bg-transparent before:transition-colors before:duration-150 before:content-['']">
      {desktop && <source media="(min-width: 64rem)" srcSet={desktop} />}
      <source media="(min-width: 40rem)" srcSet={tablet} />
      <source media="(min-width: 0)" srcSet={mobile} />
      <img
        {...rest}
        style={{ width: '100%', height: 'auto' }}
        className={`rounded-lg ${className}`}
        alt=""
      />
    </picture>
  );
}

export default ResponsivePicture;
