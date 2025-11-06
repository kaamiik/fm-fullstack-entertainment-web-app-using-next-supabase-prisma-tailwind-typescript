'use server';

import { PrismaClient } from '@prisma/client';
import { getUser } from '@/app/lib/dal';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function toggleBookmark(formData: FormData) {
  try {
    const user = await getUser();
    if (!user) {
      redirect('/login');
    }

    const mediaId = Number(formData.get('mediaId'));

    if (!mediaId) {
      return { success: false, error: 'Media ID is required' };
    }

    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_mediaId: {
          userId: user.id,
          mediaId: mediaId,
        },
      },
    });

    if (existingBookmark) {
      await prisma.bookmark.delete({
        where: {
          userId_mediaId: {
            userId: user.id,
            mediaId: mediaId,
          },
        },
      });
    } else {
      await prisma.bookmark.create({
        data: {
          userId: user.id,
          mediaId: mediaId,
        },
      });
    }

    revalidatePath('/');
    revalidatePath('/movies');
    revalidatePath('/tv-series');
    revalidatePath('/bookmarks');
  } catch (error) {
    console.error('Error toggling bookmark:', error);
    return { success: false, error: 'Failed to toggle bookmark' };
  }
}
