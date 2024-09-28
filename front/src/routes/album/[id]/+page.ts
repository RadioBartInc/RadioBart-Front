import { error } from '@sveltejs/kit';
import { getAlbumById, fetchReviewsByIds } from '@src/api/APIAdapter';
import type { Album } from '@src/models/AlbumClass';
import type { Review } from '@src/models/ReviewClass';

export async function load({ params }: { params: { id: string } }) {
  const albumId = params.id;
  
  // Fetch the album by ID from the backend
  const album: Album | null = await getAlbumById(albumId);

  if (!album) {
    throw error(404, 'Album not found');
  }

  // Fetch the reviews for the album based on review IDs
  const reviews: Review[] = await fetchReviewsByIds(album.reviews);

  return {
    album,
    reviews
  };
}
