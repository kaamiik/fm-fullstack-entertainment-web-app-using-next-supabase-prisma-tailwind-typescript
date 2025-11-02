import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTrendingMedia(userId: string) {
  try {
    const trendingMedia = await prisma.media.findMany({
      where: {
        isTrending: true,
      },
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return trendingMedia.map((media) => ({
      id: media.id,
      title: media.title,
      slug: media.slug,
      year: media.year,
      category: media.category,
      rating: media.rating,
      isBookmarked: media.bookmarks.length > 0,
      thumbnail: media.thumbnail as {
        trending?: {
          small: string;
          large: string;
        };
      },
    }));
  } catch (error) {
    console.error("Error fetching trending media:", error);
    return [];
  }
}

export async function getRecommendedMedia(userId: string) {
  try {
    const recommendedMedia = await prisma.media.findMany({
      where: {
        isTrending: false,
      },
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return recommendedMedia.map((media) => ({
      id: media.id,
      title: media.title,
      slug: media.slug,
      year: media.year,
      category: media.category,
      rating: media.rating,
      isBookmarked: media.bookmarks.length > 0,
      thumbnail: media.thumbnail as {
        regular?: {
          small: string;
          medium: string;
          large: string;
        };
      },
    }));
  } catch (error) {
    console.error("Error fetching recommended media:", error);
    return [];
  }
}

export async function getMovies(userId: string) {
  try {
    const movies = await prisma.media.findMany({
      where: {
        category: "Movie",
      },
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return movies.map((media) => ({
      id: media.id,
      title: media.title,
      slug: media.slug,
      year: media.year,
      category: media.category,
      rating: media.rating,
      isBookmarked: media.bookmarks.length > 0,
      thumbnail: media.thumbnail as {
        regular?: {
          small: string;
          medium: string;
          large: string;
        };
      },
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function getTVSeries(userId: string) {
  try {
    const tvSeries = await prisma.media.findMany({
      where: {
        category: "TV Series",
      },
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return tvSeries.map((media) => ({
      id: media.id,
      title: media.title,
      slug: media.slug,
      year: media.year,
      category: media.category,
      rating: media.rating,
      isBookmarked: media.bookmarks.length > 0,
      thumbnail: media.thumbnail as {
        regular?: {
          small: string;
          medium: string;
          large: string;
        };
      },
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
