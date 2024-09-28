<!-- UserAlbumReviews.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { Review } from '@src/models/ReviewClass';
  import { User } from '@src/models/UserClass';
  import { getRatingClass } from '@src/utils/misc';
	import { getUserById } from '@src/api/APIAdapter';

  export let reviews: Review[] = [];
  let users: Record<string, User | null> = {};

  async function fetchUser(userId: string): Promise<User | null> {
    try {
      return await getUserById(userId);
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error);
      return null;
    }
  }

  onMount(async () => {
    for (const review of reviews) {
      if (!users[review.userId]) {
        users[review.userId] = await fetchUser(review.userId);
      }
    }
  });
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
            <img src="https://via.placeholder.com/50" alt="heart" class="heart">
            <p class="likes-no">{review.likes}</p>
          </div>
        </div>
        <p class="fecha">{review.fecha}</p>
      </div>
      <p class="review-texto">{review.content}</p>
    </div>
  {/each}
</section>

<style>
  @import './useralbumreviews.css';
</style>
