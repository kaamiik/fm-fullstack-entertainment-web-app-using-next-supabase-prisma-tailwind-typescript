import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllMedia(userId: string) {
  try {
    const allMedia = await prisma.media.findMany({
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return allMedia.map((media) => ({
      id: media.id,
      title: media.title,
      slug: media.slug,
      year: media.year,
      category: media.category,
      rating: media.rating,
      isTrending: media.isTrending,
      isBookmarked: media.bookmarks.length > 0,
      thumbnail: media.thumbnail as {
        trending?: {
          small: string;
          large: string;
        };
        regular?: {
          small: string;
          medium: string;
          large: string;
        };
      },
    }));
  } catch (error) {
    console.error('Error fetching all media:', error);
    return [];
  }
}

export async function getMediaBySlug(slug: string, userId: string) {
  try {
    const media = await prisma.media.findFirst({
      where: {
        slug: slug,
      },
      include: {
        bookmarks: {
          where: {
            userId: userId,
          },
        },
      },
    });

    if (!media) {
      return null;
    }

    return {
      id: media.id,
      title: media.title,
      slug: media.slug,
      category: media.category,
      year: media.year,
      rating: media.rating,
      isTrending: media.isTrending,
      thumbnail: media.thumbnail as {
        trending?: {
          small: string;
          large: string;
        };
        regular?: {
          small: string;
          medium: string;
          large: string;
        };
      },
      isBookmarked: media.bookmarks.length > 0,
    };
  } catch (error) {
    console.error('Error fetching media by slug:', error);
    return null;
  }
}
