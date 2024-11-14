<script lang="ts">
  import { onMount } from 'svelte';
  import { getArtistById, getAllAlbums, getAlbumAvgRating } from '@src/api/APIAdapter';
  import type { Album } from '@src/models/AlbumClass';
  import type { Artista } from '@src/models/ArtistaClass';
  import { getRatingClass } from "@src/utils/misc";

  export let albums: Album[] = [];
  export let artists: Record<string, Artista | null> = {};
  export let avgRatings: Record<string, number> = {};

  let perPage = 8;                
  let currentPage = 0;            
  let totalRows = albums.length;  
  let totalPages = Math.ceil(totalRows / perPage);  
  let trimmedRows: Album[] = [];
  let searchQuery = '';            // Search query for filtering

  // Computed rows to display based on pagination and search
  $: {
    const start = currentPage * perPage;
    const end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;
    const filteredAlbums = searchQuery
      ? albums.filter(album => 
          album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (artists[album.artist]?.name || '').toLowerCase().includes(searchQuery.toLowerCase())
        )
      : albums;
    totalRows = filteredAlbums.length;
    totalPages = Math.ceil(totalRows / perPage);
    trimmedRows = filteredAlbums.slice(start, end + 1);
  }

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

    totalRows = albums.length;
    totalPages = Math.ceil(totalRows / perPage);
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
      return rating || 0;
    } catch (error) {
      console.error(`Error fetching average rating for album ${albumId}:`, error);
      return 0;
    }
  }

  function handleSearch(event: Event) {
    searchQuery = (event.target as HTMLInputElement).value;
    currentPage = 0; // Reset to the first page on search
  }
</script>

<!-- Search Bar -->
<div class="search-bar">
  <input type="text" placeholder="Search albums or artists..." on:input={handleSearch} />
</div>

<section>
  {#each trimmedRows as album}
    <div class="album">
      <a href="{`/album/${album.id}`}">
        <img src={album.cover || 'https://via.placeholder.com/150'} alt="album_cover" class="portada hover-image">
      </a>
      <h3 class="artista">
        <a href={`/artista/${album.artist}`}>{artists[album.artist]?.name}</a>
      </h3>
      <h3 class="nombre_album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
      <p class="rating {getRatingClass(avgRatings[album.id])}">{avgRatings[album.id]}</p>
    </div>
  {/each}
</section>

{#if totalRows > perPage}
  <div class='pagination'>
    <button on:click={() => currentPage -= 1} disabled={currentPage === 0}>
      Previous
    </button>
    <p>{currentPage + 1} of {totalPages}</p>
    <button on:click={() => currentPage += 1} disabled={currentPage === totalPages - 1}>
      Next
    </button>
  </div>
{/if}

<style>
  @import './albums.css';

  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .search-bar input {
    width: 100%;
    max-width: 20rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
</style>
