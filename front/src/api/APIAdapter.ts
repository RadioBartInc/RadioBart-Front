// AlbumAdapter.ts
import { fetchAllArtists, fetchAllReviews, fetchAllAlbums, fetchArtistById, fetchAlbumById, fetchReviewById, fetchAlbumAvgRating, fetchAllUsers, fetchUserById, fetchArtistaAvgRating } from "./APIClient";
import { Album } from "@src/models/AlbumClass";
import { Artista } from "@src/models/ArtistaClass";
import { Review } from "@src/models/ReviewClass";
import { User } from "@src/models/UserClass";

export async function getAllArtists(): Promise<Artista[]> {
  const rawArtists = await fetchAllArtists();
  return rawArtists.map(
    (artist: any) => new Artista(artist._id, artist.name, artist.albums, artist.picture)
  );
}

export async function getAllAlbums(): Promise<Album[]> {
  const rawAlbums = await fetchAllAlbums();
  return rawAlbums.map(
    (album: any) => new Album(album._id, album.title, album.artist, new Date(album.fecha), album.genre, album.reviews, album.cover)
  );
}

export async function getAllReviews(): Promise<Review[]> {
  const rawReviews = await fetchAllReviews();
  return rawReviews.map(
    (review: any) => new Review(review._id, review.userId, review.ratingScore, review.content, new Date(review.fecha), review.likes, review.albumId, review.comentarios)
  );
}

export async function getAllUsers(): Promise<User[]> {
  const rawArtists = await fetchAllUsers();
  return rawArtists.map(
    (user: any) => new User(user._id, user.name, user.profile_picture)
  );
}

export async function getArtistById(id: string): Promise<Artista | null> {
  const rawArtist = await fetchArtistById(id);
  return rawArtist ? new Artista(rawArtist._id, rawArtist.name, rawArtist.albums, rawArtist.picture) : null;
}

export async function getAlbumById(id: string): Promise<Album | null> {
  const rawAlbum = await fetchAlbumById(id);
  return rawAlbum ? new Album(rawAlbum._id, rawAlbum.title, rawAlbum.artist, new Date(rawAlbum.fecha), rawAlbum.genre, rawAlbum.reviews, rawAlbum.cover) : null;
}

export async function getReviewById(id: string): Promise<Review | null> {
  const rawReview = await fetchReviewById(id);
  return rawReview ? new Review(rawReview._id, rawReview.userId, rawReview.ratingScore, rawReview.content, new Date(rawReview.fecha), rawReview.likes, rawReview.albumId, rawReview.comentarios) : null;
}

export async function getUserById(id: string): Promise<User | null> {
  const rawUser = await fetchUserById(id);
  return rawUser ? new User(rawUser._id, rawUser.name, rawUser.profile_picture) : null;
}

export async function fetchAlbumsById(albumIds: string[]): Promise<Album[]> {
  try {
    const albums: Album[] = await Promise.all(
      albumIds.map(async (id) => {
        const albumData = await getAlbumById(id);
        if (albumData) {
          return albumData;
        }
        throw new Error(`Failed to fetch album with ID: ${id}`);
      })
    );

    return albums;
  } catch (error) {
    console.error('Error fetching reviews by IDs:', error);
    throw error;
  }
}

export async function fetchReviewsByIds(reviewIds: string[]): Promise<Review[]> {
    try {
      const reviews: Review[] = await Promise.all(
        reviewIds.map(async (id) => {
          const review = await getReviewById(id);
          if (review) {
            return review;
          }
          throw new Error(`Failed to fetch review with ID: ${id}`);
        })
      );
  
      return reviews;
    } catch (error) {
      console.error('Error fetching reviews by IDs:', error);
      throw error;
    }
}

export async function getAlbumAvgRating(id: string): Promise<number | null> {
  const data = await fetchAlbumAvgRating(id);
  return data.averageRating;
}

export async function getArtistaAvgRating(id: string): Promise<number | null> {
  const data = await fetchArtistaAvgRating(id);
  return data.averageRating;
}
