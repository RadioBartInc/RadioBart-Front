<script lang="ts">
	import { getAlbumAvgRating, getArtistById } from "@src/api/APIAdapter";
	import type { Album } from "@src/models/AlbumClass";
	import type { Artista } from "@src/models/ArtistaClass";
	import { getRatingClass } from "@src/utils/misc";

	import { onMount } from "svelte";

  export let album: Album | null = null;
  export let artist: Artista | null = null;
  export let avg_rating: number = 0;

  onMount(async () => {
    if (album && album.artist) {
      try {
        artist = await getArtistById(album.artist);
        const ratingRes = await getAlbumAvgRating(album.id);
        if (ratingRes){
          avg_rating = ratingRes;
        } else {
          avg_rating = 0
        }
      } catch (error) {
        console.error("Failed to fetch artist data:", error);
      }
    }
  });

  // TODO: Make it so you can submit a review
</script>

<section>
  {#if album && artist}
    <div class="datos">
      <h1 class="artista"><a href="./artista/{artist.id}">{artist.name}</a></h1>
      <h2 class="nombre_album">{album.title}</h2>
    </div>

    <img src={album.cover} alt="album_cover" class="portada">
    
    <div class="rating-wrapper"><p class="rating {getRatingClass(avg_rating)}">{avg_rating}</p></div>

    <form action="./album">
      <div class="user_rating">
        <input placeholder="0-100" class="rating_input" type="text">
        <p>/ 100</p>
      </div>
      <textarea id="review" class="review_input" placeholder="Enter your text here..."></textarea>
      <input type="submit" class="submit" value="Submit review">
    </form>
  {/if}
</section>

<style>
  @import './albumpage.css';
</style>
