export type CurrentPath =
  | "/"
  | "/movies"
  | "/tv-series"
  | "/bookmark"
  | `/media/${string}`;

export type AllMedia = {
  id: number;
  title: string;
  slug: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
};
