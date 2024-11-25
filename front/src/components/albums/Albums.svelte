<script lang="ts">
  import { onMount } from 'svelte';
  import { getArtistById, getAllAlbums, getAlbumAvgRating, getAlbumsPage } from '@src/api/APIAdapter';
  import type { Album } from '@src/models/AlbumClass';
  import type { Artista } from '@src/models/ArtistaClass';
  import { getRatingClass } from "@src/utils/misc";

  export let albums: Album[] = [];
  export let artists: Record<string, Artista | null> = {};
  export let avgRatings: Record<string, number> = {};

  let perPage = 8;                
  let currentPage = 1;            
  let totalRows =  1  
  let totalPages = Math.ceil(totalRows / perPage);  
  let searchQuery = ''; 
  let searchFlag = false
  $: {
    const start = currentPage * perPage;
    const end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;
    const newSearch = searchFlag
    
    fetchAlbumPage(currentPage);
    searchFlag = false
  }
  
  async function fetchAlbumPage(page: number){
    console.log("page: " + page + " perPage: " + perPage + " searchQuery: " + searchQuery)
    let response = await getAlbumsPage(page, perPage, searchQuery);
    
    albums = response[0]
    totalRows =  response[1]
    totalPages = Math.ceil(totalRows / perPage);

    artists = {}
    avgRatings = {}

    for (const album of albums) {
      artists[album.artist] = await fetchArtist(album.artist);
      avgRatings[album.id] = await fetchAlbumAvgRating(album.id);
    }
  }

  onMount(async () => {
    await fetchAlbumPage(currentPage);

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

  function handleSearch() {
    if (currentPage != 1){
      currentPage = 1;
    } else {
      searchFlag = true
    }
  }

  function handleKeyPress(event: { key: string; }) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
</script>


<div class="search-bar">
  <input 
    type="text" 
    placeholder="Search albums or artists..." 
    bind:value={searchQuery}
    on:keypress={handleKeyPress} 
  />
  <button on:click={handleSearch}>Search</button>
</div>
<section>
  {#each albums as album}
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
    <button on:click={() => currentPage -= 1} disabled={currentPage === 1}>
      Previous
    </button>
    <p>{currentPage} of {totalPages}</p>
    <button on:click={() => currentPage += 1} disabled={currentPage === totalPages}>
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
