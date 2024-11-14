// AlbumAdapter.ts
import { fetchAllArtists, fetchAllReviews, fetchAllAlbums, fetchArtistById, fetchAlbumById, 
  fetchReviewById, fetchAlbumAvgRating, fetchAllUsers, fetchUserById, 
  fetchArtistaAvgRating, updateReview, addReview, fetchComentarioById, 
  fetchAllComentarios, addComentario, addUser, authUser, fetchUserStats, 
  putReviewLikes, addAlbum, addArtista, deleteClientReview, deleteClientComment, 
  deleteClientAlbum, deleteClientArtist} from "./APIClient";
import { Album } from "@src/models/AlbumClass";
import { Artista } from "@src/models/ArtistaClass";
import { Comentario } from "@src/models/ComentarioClass";
import { Review } from "@src/models/ReviewClass";
import { User } from "@src/models/UserClass";

import { UserStats } from "@src/models/UserStats";

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
    (review: any) => new Review(review._id, review.user, review.rating, review.review, new Date(review.date), review.likes, review.album, review.comments, review.usuarioLike)
  );
}

export async function getAllUsers(): Promise<User[]> {
  const rawArtists = await fetchAllUsers();
  return rawArtists.map(
    (user: any) => new User(user._id, user.username, user.password, user.picture, user.role)
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
  return rawReview ? new Review(rawReview._id, rawReview.user, rawReview.rating, rawReview.review, new Date(rawReview.date), rawReview.likes, rawReview.album, rawReview.comments, rawReview.usuarioLike) : null;
}

export async function getUserById(id: string): Promise<User | null> {
  const rawUser = await fetchUserById(id);
  return rawUser ? new User(rawUser._id, rawUser.username, rawUser.password, rawUser.picture, rawUser.role) : null;
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

export async function postAlbum(album: Album, token: string, admin_secret: string, user_id: string): Promise<boolean | null> {
  const parsedAlbum = album.toAPIFormat(); // Convert Review instance to API format object
  return await addAlbum(parsedAlbum, token, admin_secret, user_id);
}

export async function postArtist(artista: Artista, token: string, admin_secret: string, user_id: string): Promise<boolean | null> {
  const parsedArtista = artista.toAPIFormat(); // Convert Review instance to API format object
  return await addArtista(parsedArtista, token, admin_secret, user_id);
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
  return Math.floor(data.averageRating);
}

export async function getArtistaAvgRating(id: string): Promise<number | null> {
  const data = await fetchArtistaAvgRating(id);
  return Math.floor(data.averageRating);
}

export async function postReview(review: Review, token: string): Promise<boolean | null> {
  const parsedReview = review.toAPIFormat(); // Convert Review instance to API format object
  return await addReview(parsedReview, token);
}

// Function to handle updating an existing review
export async function putReview(review: Review, token: string): Promise<boolean | null> {
  const parsedReview = review.toAPIFormat(); // Convert Review instance to API format object
  return await updateReview(review.id, parsedReview, token);
}

export async function fetchComentariosById(comentarioIds: string[]): Promise<Comentario[]> {
  try {
    const comentarios: Comentario[] = await Promise.all(
      comentarioIds.map(async (id) => {
        const comentario = await getComentario(id);
        if (comentario) {
          return comentario;
        }
        throw new Error(`Failed to fetch Comentario with ID: ${id}`);
      })
    );

    return comentarios;
  } catch (error) {
    console.error('Error fetching Comentarios by IDs:', error);
    throw error;
  }
}

export async function getComentario(id: string): Promise<Comentario | null> {
  const rawComentario = await fetchComentarioById(id);
  return rawComentario ? new Comentario(rawComentario._id, rawComentario.comment, rawComentario.user, new Date(rawComentario.date), rawComentario.review) : null;
}

export async function getComentarios(): Promise<Comentario[]> {
  const rawComentarios = await fetchAllComentarios();
  return rawComentarios.map(
    (comentario: any) => new Comentario(comentario._id, comentario.comment, comentario.user, new Date(comentario.date), comentario.review)
  );
}

export async function postComentario(comment: Comentario, token: string): Promise<boolean | null> {
  const parsedComment = comment.toAPIFormat(); 
  return await addComentario(parsedComment, token);
}

export async function registerUser(user: User): Promise<boolean | null> {
  
  const parsedUser = user.toAPIFormat(); // Convert User instance to API format object
  return await addUser(parsedUser);
}

export async function loginUser(user: User): Promise<string | null> {
  console.log(user);
  const parsedUser = user.toAPIFormat(); // Convert User instance to API format object
  return await authUser(parsedUser);
}

export async function checkUserExists(user: User): Promise<boolean> {
  const users = await getAllUsers();
  return users.some(iterUser => iterUser.name === user.name);
}

export async function getUserByName(name: string): Promise<User | null> { 
  const users = await getAllUsers(); 
  const user = users.find(iterUser => iterUser.name === name); 
 
  if (user){
    return user;
  }

  return null;
}

export async function getUserStats(id: string): Promise<UserStats | null> { 
  const stats = await fetchUserStats(id); 
  const userStats = new UserStats(stats.reviewCount, stats.averageRating, stats.totalLikes);
  
  if (userStats){
    return userStats;
  }

  return null;
}

export async function updateReviewLikes(reviewId: string, token: string, likes: number, user: string): Promise<boolean> {
  const likeInfo = {
    likes: likes,
    userId: user
  }
  
  return await putReviewLikes(reviewId, token, likeInfo);
}

export async function deleteReview(reviewId: string, token: string): Promise<boolean | null> {
  return await deleteClientReview(reviewId, token);
}

export async function deleteComment(commentId: string, token: string): Promise<boolean | null> {
  return await deleteClientComment(commentId, token);
}

export async function deleteAlbum(albumId: string, token: string): Promise<boolean | null> {
  return await deleteClientAlbum(albumId, token);
}

export async function deleteArtist(artistId: string, token: string): Promise<boolean | null> {
  return await deleteClientArtist(artistId, token);
}