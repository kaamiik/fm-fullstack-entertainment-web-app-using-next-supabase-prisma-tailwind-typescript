import { PrismaClient } from "@prisma/client";

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
    console.error("Error fetching all media:", error);
    return [];
  }
}
