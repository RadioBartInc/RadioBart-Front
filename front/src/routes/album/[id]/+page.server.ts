import Navbar from '@src/components/navbar/Navbar.svelte';
import AlbumPage from '@src/components/albumpage/AlbumPage.svelte';
import UserAlbumReviews from '@src/components/useralbumreviews/UserAlbumReviews.svelte';
import type { Review } from '@src/models/ReviewClass';
import type { Album } from '@src/models/AlbumClass';
import { fetchReviewsByIds, getAlbumById } from '@src/api/APIAdapter';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params;

    const album = await getAlbumById(id);
    if (!album) {
      throw new Error(`Album with id ${id} not found`);
    }

    const plainAlbum = {
      id: album.id,
      title: album.title,
      artist: album.artist,
      year: album.fecha,
      genre: album.genre,
      reviews: album.reviews,
      cover: album.cover,
    };

    const reviews = await fetchReviewsByIds(album.reviews);
    console.log(album)
    console.log(reviews)
    return {
      props: {
        album: plainAlbum,
        reviews
      }
    };
}