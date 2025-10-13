import { prisma } from "@/lib/prisma";
import Image from "next/image";

type Thumbnail = {
  trending: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
};

export default async function MediaPage({
  params,
}: {
  params: { slug: string };
}) {
  const media = await prisma.media.findUnique({
    where: {
      slug: params.slug,
    },
  });

  const thumbnail = media?.thumbnail as Thumbnail;
  return (
    <main className="flex flex-col gap-[32px]s items-center gap-5 pt-24">
      <h1 className="text-32 font-medium">{media?.title}</h1>

      <Image
        src={thumbnail.regular.large?.replace("./assets/", "/assets/")}
        alt=""
        width={400}
        height={400}
      />
      <p>{}</p>
    </main>
  );
}
