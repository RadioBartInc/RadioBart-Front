<script lang="ts">
    import { onMount } from "svelte";
    import { getReviewById, getUserById, getAlbumById, putReviewLike } from "@src/api/APIAdapter";
    import type { Review } from "@src/models/ReviewClass";
    import type { User } from "@src/models/UserClass";
    import type { Album } from "@src/models/AlbumClass";
    import { getRatingClass } from "@src/utils/misc";
  
    export let id: string;
    let review: Review | null = null;
    let user: User | null = null;
    let album: Album | null = null;
  
    let likeCount = 0;
    let likedByUser = false;
  
    async function fetchData() {
      try {
        // Fetch the review details by ID
        review = await getReviewById(id);
  
        if (review) {
          // Fetch the user details associated with the review
          user = await getUserById(review.userId);
  
          // Fetch the album details associated with the review
          album = await getAlbumById(review.albumId);
  
          // Initialize like data
          likeCount = review.likes;
          likedByUser = false; // Assume the user hasn't liked it yet
        }
      } catch (error) {
        console.error("Failed to fetch review data:", error);
      }
    }
  
    onMount(fetchData);
  
    async function toggleLike() {
      if (review) {
        try {
          const response = await putReviewLike(review.id, likedByUser ? -1 : 1);
          if (response) {
            likeCount += likedByUser ? -1 : 1;
            likedByUser = !likedByUser;
          }
        } catch (error) {
          console.error("Failed to update like status:", error);
        }
      }
    }
  </script>
  
  <section>
    {#if review && album}
      <div class="info">
        <img src={album.cover} alt="Album Cover" class="portada hover-image">
        <h3 class="artista"><a href={`/artista/${album.artist}`}>{album.title}</a></h3>
        <h3 class="album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
        <div class="rating-wrapper">
          <p class="rating {getRatingClass(review.ratingScore)}">{review.ratingScore}</p>
        </div>
        <p class="fecha">{review.fecha.toLocaleDateString('es-ES')}</p>
      </div>
  
      <div class="review">
        <div class="usuario">
          <div class="info_usuario">
            <img src={user.profile_picture || 'https://via.placeholder.com/50'} alt="User Avatar" class="avatar">
            <p><a href={`/usuario/${user.id}`}>{user.name}</a></p>
            <div class="likes">
              <button class="like-button" on:click={toggleLike}>
                <svg class="heart" height="20px" fill="{likedByUser ? '#ff6666' : '#222'}" viewBox="0 -30 511.99938 511" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="m248.367188 448.496094c2.359374 1.394531 4.996093 2.082031 7.632812 2.082031s5.273438-.6875 7.632812-2.082031c10.398438-6.152344 255.613282-152.242188 248.203126-309.316406-3.632813-77.175782-63.378907-138.078126-134.769532-138.648438-61.941406-1.390625-100.558594 42.121094-121.066406 80.53125-20.40625-38.191406-59.363281-80.53125-120.042969-80.53125-.351562 0-.6875 0-1.023437 0-71.390625.574219-131.136719 61.472656-134.769532 138.648438-7.410156 157.074218 237.800782 303.164062 248.203126 309.316406zm0 0"/>
                </svg>
              </button>
              <p class="likes-no">{likeCount}</p>
            </div>
          </div>
        </div>
        <p class="review-texto">{review.content}</p>
      </div>
    {/if}
  </section>
  
  <style>
    @import './review.css';
  
    .like-button {
      border: none;
      background: none;
      cursor: pointer;
    }
  
    .like-button svg.heart {
      transition: fill 0.3s ease-in-out;
    }
  </style>
  