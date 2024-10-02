<script lang="ts">
  import { onMount } from 'svelte';
  import { getArtistById, getAllAlbums, getAlbumAvgRating } from '@src/api/APIAdapter'; // Import the function to get artist by ID
  import type { Album } from '@src/models/AlbumClass'; // Import Album model
  import type { Artista } from '@src/models/ArtistaClass'; // Import Artist model
	import { getRatingClass } from "@src/utils/misc";

  export let albums: Album[] = [];
  export let artists: Record<string, Artista | null> = {};
  export let avgRatings: Record<string, number> = {};

  onMount(async () => {
    albums = await getAllAlbums();

    for (const album of albums) {
      if (!artists[album.artist]) {
        artists[album.artist] = await fetchArtist(album.artist);
      }

      if (!(album.id in avgRatings)) {
        avgRatings[album.id] = await fetchAlbumAvgRating(album.id);
      }
    }
  });

  async function fetchArtist(artistId: string): Promise<Artista | null> {
    try {
      return await getArtistById(artistId);
    } catch (error) {
      console.error(`Error fetching artist ${artistId}:`, error);
      return null;
    }
  }

  async function fetchAlbumAvgRating(albumId: string): Promise<number> {
    try {
      const rating = await getAlbumAvgRating(albumId);
      if (rating){
        return rating;
      }
      return 0;
    } catch (error) {
      console.error(`Error fetching average rating for album ${albumId}:`, error);
      return 0;
    }
  }
</script>

<section>
  {#each albums as album}
    <div class="album">
      <img src={album.cover || 'https://via.placeholder.com/150'} alt="album_cover" class="portada hover-image">
      <h3 class="artista">
        <a href={`/artista/${album.artist}`}>{artists[album.artist]?.name}</a>
      </h3>
      <h3 class="nombre_album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
      <p class="rating {getRatingClass(avgRatings[album.id])}">{avgRatings[album.id]}</p>
    </div>
  {/each}
</section>

<style>
  @import './albums.css';
</style>
