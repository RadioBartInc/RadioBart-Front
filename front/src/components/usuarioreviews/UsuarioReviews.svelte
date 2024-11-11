<script lang="ts">
    import { onMount } from "svelte";
    import { fetchReviewsByIds, getAlbumById, getAllReviews, getArtistById } from "@src/api/APIAdapter";
    import type { Review } from "@src/models/ReviewClass";
    import type { User } from "@src/models/UserClass";
    import type { Album } from "@src/models/AlbumClass";
    import type { Artista } from "@src/models/ArtistaClass";
	import { REVIEW_PREVIEW_LIMIT } from "@src/consts/limits";
	import { getRatingClass } from "@src/utils/misc";
  
    export let id: string; // User ID
    let reviews: Review[] = [];
    let reviewAlbums: Record<string, Album> = {}; // Stores albums for the reviews
    let albumArtists: Record<string, Artista> = {}; // Stores artists for the albums
  
    // Fetch the reviews by user and associated albums and artists
    onMount(async () => {
      try {
        // Fetch all reviews, then filter by the user ID
        reviews = (await getAllReviews()).filter(review => review.userId === id);
  
        // Fetch albums and artists for each review
        for (const review of reviews) {
          if (!reviewAlbums[review.albumId]) {
            const album = await getAlbumById(review.albumId);
            if (album) {
              reviewAlbums[review.albumId] = album;
              
              // Fetch the artist related to the album
              const artist = await getArtistById(album.artist);
              if (artist) {
                albumArtists[review.albumId] = artist;
              }
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch user reviews:", error);
      }
    });
  </script>
  
  <section>
    {#each reviews as review}
      <div class="review">
        <div class="info">
        <a href="{`/album/${review.albumId}`}">
            <img src={reviewAlbums[review.albumId]?.cover || 'https://via.placeholder.com/150'} alt="Album Cover" class="portada hover-image">
        </a>
  
          <div class="rating-wrapper">
            <p class="rating {getRatingClass(review.ratingScore)}">{review.ratingScore}</p>
          </div>
  
          <p class="fecha">{new Date(review.fecha).toLocaleDateString('es-ES')}</p>
  
          <div class="buttons_review">
            <div class="likes">
              <img src="https://via.placeholder.com/50" alt="heart" class="heart">
              <p class="likes-no">{review.likes}</p>
            </div>
  
            <a class="more_review" href={`/review/${review.id}`}>
              <button>
                <img src="https://via.placeholder.com/50" alt="More Review">
              </button>
            </a>
          </div>
        </div>
  
        <div class="ti-tex">
          <h3 class="artista">
            <a href={`/artista/${albumArtists[review.albumId]?.id}`}>{albumArtists[review.albumId]?.name || 'Unknown Artist'}</a>
          </h3>
          <h3 class="album">
            <a href={`/album/${review.albumId}`}>{reviewAlbums[review.albumId]?.title || 'Unknown Album'}</a>
          </h3>
  
          <p class="review-texto">
            {review.content.length > REVIEW_PREVIEW_LIMIT ? review.content.slice(0, REVIEW_PREVIEW_LIMIT) + '...' : review.content}
          </p>
        </div>
      </div>
    {/each}
  </section>
  
  <style>
    @import './usuarioreviews.css';
  
    .review-divider {
      margin: 20px 0;
      border-top: 1px solid #ccc;
      width: 100%;
    }
  </style>
  