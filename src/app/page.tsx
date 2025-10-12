import { prisma } from "@/lib/prisma";

export default async function Home() {
  const media = await prisma.media.findMany();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-">
      <h1>Media Items: {media.length}</h1>
    </main>
  );
}
