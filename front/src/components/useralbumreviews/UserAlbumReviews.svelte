<script lang="ts">
  import { onMount } from 'svelte';
  import type { Review } from '@src/models/ReviewClass';
  import { User } from '@src/models/UserClass';
  import { getRatingClass } from '@src/utils/misc';
  import { fetchReviewsByIds, getAlbumById, getUserById } from '@src/api/APIAdapter';
  import { REVIEW_PREVIEW_LIMIT } from '@src/consts/limits';

  export let id;

  export let reviews: Review[] = [];
  let users: Record<string, User | null> = {};

  let reviewLikedState: Record<string, boolean> = {};
  let reviewLikeCounts: Record<string, number> = {};

  // Function to fetch a user based on their ID
  async function fetchUser(userId: string): Promise<User | null> {
    try {
      return await getUserById(userId);
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error);
      return null;
    }
  }

  onMount(async () => {
    try {
      const album = await getAlbumById(id);
      if (album) {
        reviews = await fetchReviewsByIds(album.reviews);
        for (const review of reviews) {
          if (!users[review.userId]) {
            users[review.userId] = await fetchUser(review.userId);
          }
          reviewLikedState[review.id] = false;
          reviewLikeCounts[review.id] = review.likes;
        }
      }
    } catch (error) {
      console.error("Failed to fetch album data:", error);
    }
  });

  // Function to toggle the like state of a review
  function toggleLike(reviewId: string) {
    if (reviewLikedState[reviewId]) {
      reviewLikeCounts[reviewId] -= 1;
    } else {
      reviewLikeCounts[reviewId] += 1;
    }
    reviewLikedState[reviewId] = !reviewLikedState[reviewId];
  }

  // Function to get a shortened preview of the review content
  function getReviewPreview(content: string): string {
    if (content.length > REVIEW_PREVIEW_LIMIT) {
      return content.slice(0, REVIEW_PREVIEW_LIMIT) + '...';
    }
    return content;
  }
</script>

<section>
  {#each reviews as review}
    <div class="review">
      <div class="usuario">
        <div class="info_usuario">
          <p class="rating {getRatingClass(review.ratingScore)}">{review.ratingScore}</p>
          <img src={users[review.userId]?.profile_picture || 'https://via.placeholder.com/50'} alt="Avatar" class="avatar">
          <p><a href={`/usuario/${review.userId}`}>{users[review.userId]?.name || review.userId}</a></p>
          <div class="likes">
            <button class="likes_button" on:click={() => toggleLike(review.id)}>
              <svg class="heart" height="20px" fill="{reviewLikedState[review.id] ? '#ff6666' : '#222'}" viewBox="0 -30 511.99938 511" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="m248.367188 448.496094c2.359374 1.394531 4.996093 2.082031 7.632812 2.082031s5.273438-.6875 7.632812-2.082031c10.398438-6.152344 255.613282-152.242188 248.203126-309.316406-3.632813-77.175782-63.378907-138.078126-134.769532-138.648438-61.941406-1.390625-100.558594 42.121094-121.066406 80.53125-20.40625-38.191406-59.363281-80.53125-120.042969-80.53125-.351562 0-.6875 0-1.023437 0-71.390625.574219-131.136719 61.472656-134.769532 138.648438-7.410156 157.074218 237.800782 303.164062 248.203126 309.316406zm0 0"/>
              </svg>
            </button>
            <p class="likes-no">{reviewLikeCounts[review.id]}</p>
            <a class="more_review" href="../review/{review.id}">
              <button><img src="https://via.placeholder.com/50" alt=""></button>
            </a>
          </div>
        </div>
        <p class="fecha">{review.fecha.toLocaleDateString('es-ES')}</p>
      </div>
      <p class="review-texto">{getReviewPreview(review.content)}</p>
    </div>
  {/each}
</section>

<style>
  @import './useralbumreviews.css';
</style>
