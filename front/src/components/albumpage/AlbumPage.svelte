<script lang="ts">
  import { getAlbumAvgRating, getAlbumById, getArtistById, getAllReviews, postReview, putReview } from "@src/api/APIAdapter";
  import type { Album } from "@src/models/AlbumClass";
  import type { Artista } from "@src/models/ArtistaClass";
  import { Review } from "@src/models/ReviewClass";
  import { getRatingClass } from "@src/utils/misc";
  import { onMount } from "svelte";

  export let id;
  export let album: Album | null = null;
  export let artist: Artista | null = null;
  export let avg_rating: number = 0;
  export let userId = "current-user-id";
  export let messageColor: string = "red";

  let userRating: string = "";
  let userReview: string = "";
  let message: string = "";

  onMount(async () => {
    try {
      album = await getAlbumById(id);
      if (album) {
        artist = await getArtistById(album.artist);
        const ratingRes = await getAlbumAvgRating(album.id);
        avg_rating = ratingRes ? ratingRes : 0;
      }
    } catch (error) {
      console.error("Failed to fetch artist data:", error);
    }
  });

  function isValidRating(rating: string): boolean {
    const parsedRating = parseInt(rating, 10);
    return !isNaN(parsedRating) && parsedRating >= 0 && parsedRating <= 100;
  }

  async function submitReview(event: Event) {
    event.preventDefault();

    if (!isValidRating(userRating)) {
      messageColor = "red";
      message = "Please enter a valid rating between 0 and 100.";
      return;
    }

    try {
      const parsedRating = parseInt(userRating, 10);
      
      const existingReviews = await getAllReviews();

      const existingReview = existingReviews.find(
        (review) => review.userId === userId && review.albumId === album!.id
      );

      if (existingReview) {
        existingReview.ratingScore = parsedRating;
        existingReview.content = userReview;
        existingReview.fecha = new Date();

        const response = await putReview(existingReview);

        if (response) {
          messageColor = "green";
          message = "Review updated successfully!";
          userRating = "";
          userReview = "";
        } else {
          messageColor = "red";
          message = "Failed to update review. Please try again later.";
        }
      } else {
        // Create a new review
        const newReview = new Review(
          `${Date.now()}`,
          userId,
          parsedRating,
          userReview,
          new Date(),
          0,        
          album!.id,
          []          
        );

        const response = await postReview(newReview);

        if (response) {
          messageColor = "green";
          message = "Review submitted successfully!";
          userRating = "";
          userReview = "";
        } else {
          messageColor = "red";
          message = "Failed to submit review. Please try again later.";
        }
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      messageColor = "red";
      message = "An error occurred while submitting the review.";
    }
  }
</script>

<section>
  {#if album && artist}
    <div class="datos">
      <h1 class="artista"><a href="./artista/{artist.id}">{artist.name}</a></h1>
      <h2 class="nombre_album">{album.title}</h2>
    </div>

    <img src={album.cover} alt="album_cover" class="portada">

    <div class="rating-wrapper"><p class="rating {getRatingClass(avg_rating)}">{avg_rating}</p></div>

    <form on:submit={submitReview}>
      <div class="user_rating">
        <input 
          placeholder="0-100" 
          class="rating_input" 
          type="text" 
          bind:value={userRating} 
          on:input={() => message = ""}
        >
        <p>/ 100</p>
        {#if message}
          <p class="submission-message" style="color: {messageColor}">{message}</p>
        {/if}
      </div>
      <textarea 
        id="review" 
        class="review_input" 
        placeholder="Enter your review here..." 
        bind:value={userReview} 
        on:input={() => message = ""}
      ></textarea>
      <input type="submit" class="submit" value="Submit review">
    </form>
  {/if}
</section>

<style>
  @import './albumpage.css';
</style>
 
