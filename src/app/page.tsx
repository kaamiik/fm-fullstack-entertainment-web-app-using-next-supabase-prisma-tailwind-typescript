import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const medias = await prisma.media.findMany({
    take: 10,
  });

  const mediasCount = await prisma.media.count();
  return (
    <main className="flex flex-col gap-[32px]s items-center gap-5 pt-24">
      <h1 className="text-32 font-medium">Media Items: {mediasCount}</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {medias.map((media) => (
          <li key={media.id} className="flex items-center justify-between px-5">
            <Link href={`/${media.slug}`}>{media.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
