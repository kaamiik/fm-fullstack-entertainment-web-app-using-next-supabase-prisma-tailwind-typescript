import { PrismaClient } from "@prisma/client";
import data from "../src/data/data.json";

const prisma = new PrismaClient();

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function main() {
  console.log("Start seeding...");

  for (const media of data) {
    const slug = createSlug(media.title);

    const createdMedia = await prisma.media.upsert({
      where: { slug },

      update: {
        title: media.title,
        thumbnail: media.thumbnail,
        year: media.year,
        category: media.category,
        rating: media.rating,
        isBookmarked: media.isBookmarked,
        isTrending: media.isTrending,
      },

      create: {
        title: media.title,
        slug: slug,
        thumbnail: media.thumbnail,
        year: media.year,
        category: media.category,
        rating: media.rating,
        isBookmarked: media.isBookmarked,
        isTrending: media.isTrending,
      },
    });

    console.log(
      `Created/Updated media with id: ${createdMedia.id} - ${createdMedia.title}`
    );
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
