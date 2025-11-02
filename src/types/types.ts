export type CurrentPath = "/" | "/movies" | "/tv-series" | "/bookmark";

export type TrendingMedia = {
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
  };
};

export type RecommendedMedia = {
  id: number;
  title: string;
  slug: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  thumbnail: {
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
};
