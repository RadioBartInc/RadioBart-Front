<script lang="ts">
    import { onMount } from "svelte";
    import { fetchReviewsByIds, getAlbumById, getAllReviews, getArtistById, getUserById } from "@src/api/APIAdapter"; // Assuming this function exists to fetch reviews by user ID
    import type { Review } from "@src/models/ReviewClass";
	import type { User } from "@src/models/UserClass";
	import type { Album } from "@src/models/AlbumClass";
	import type { Artista } from "@src/models/ArtistaClass";
    
    export let id: string;
    let reviews: Review[] = [];
    let reviewAlbums: Record<string, Album> = {};
    let albumArtist: Record<string, Artista> = {};
    onMount(async () => {
        try {
            reviews = (await getAllReviews()).filter(review => review.userId === id);

            for (const review of reviews) {
                if (!reviewAlbums[review.albumId]) {
                    let album = await getAlbumById(review.albumId);
                    if (album){
                        reviewAlbums[review.albumId] = album;
                        let artist = await getArtistById(album.artist);
                        if (artist){
                            albumArtist[review.albumId] = artist;
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
    {#each reviews as review, i}
        <div class="review">
            <div class="info">
                <img src="https://via.placeholder.com/150" alt="Avatar" class="portada hover-image">
                <div class="rating-wrapper"><p class="rating regular_rating">52</p></div>
                <p class="fecha">Fecha de la review</p>
                <div class="buttons_review">
                    <div class="likes">
                        <img src="https://via.placeholder.com/50" alt="heart" class="heart">
                        <p class="likes-no">203</p>
                    </div>
                    <a class="more_review" href="/review/">
                        <button>
                        <img src="https://via.placeholder.com/50" alt="More Review">
                        </button>
                    </a>
                </div>
            </div>
            <div class="ti-tex">
                <h3 class="artista"><a href="./">Nombre del artista</a></h3>
                <h3 class="album"><a href="./">Nombre del album</a></h3>
                <p class="review-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolores suscipit libero provident quis obcaecati quo aperiam neque animi! Officiis ab repellendus alias voluptates quae praesentium perferendis sunt similique esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis tempora, inventore na Repellendus! </p>
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
