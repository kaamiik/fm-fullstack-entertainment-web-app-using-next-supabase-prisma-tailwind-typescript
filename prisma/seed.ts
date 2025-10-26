import { PrismaClient } from "@/generated/prisma";
import data from "../src/data/data.json";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting media seeding...");

  const mediaToCreate = data.map((media) => ({
    title: media.title,
    slug: slugify(media.title, { lower: true }),
    thumbnail: media.thumbnail,
    year: media.year,
    category: media.category,
    rating: media.rating,
    isTrending: media.isTrending,
  }));

  await prisma.media.createMany({
    data: mediaToCreate,
    skipDuplicates: true,
  });

  console.log("✅ Media seeding finished!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
