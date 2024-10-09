<script lang="ts">
    import { onMount } from "svelte";
    import { getAllReviews } from "@src/api/APIAdapter";
    import type { Review as ReviewType } from "@src/models/ReviewClass";
	import Navbar from "@src/components/navbar/Navbar.svelte";
	import Review from "@src/components/review/Review.svelte";

    let reviews: ReviewType[] = [];

    async function fetchAllReviews() {
        try {
            reviews = await getAllReviews();
        } catch (error) {
            console.error("Failed to fetch all reviews:", error);
        }
    }

    onMount(fetchAllReviews);
</script>

<Navbar/>

<section>
    {#each reviews as review, i}
      <Review id={review.id} showMoreButton={true} />
  
      {#if i < reviews.length - 1}
        <div class="review-divider"></div>
      {/if}
    {/each}
</section>

<style>
    @import "./reviews.css";
</style>
