<script lang="ts">
  import { onMount } from 'svelte';
  import { getArtistsPage } from '@src/api/APIAdapter'; 
  import type { Artista } from '@src/models/ArtistaClass';
  import { User } from '@src/models/UserClass';

  export let artists: Artista[] = [];

  let token: string | null = '';
  let user: User | null = null;

  let perPage = 8;                
  let currentPage = 1;            
  let totalRows = 0; 
  let totalPages = Math.ceil(totalRows / perPage);  
  let searchQuery = ''; 
  let searchFlag = false;

  $: {
    const start = currentPage * perPage;
    const end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;
    const newSearch = searchFlag
    
    fetchArtistsPage(currentPage);
    searchFlag = false;
  }

  async function fetchArtistsPage(page: number) {
    console.log("Fetching page:", page, "Per page:", perPage, "Query:", searchQuery);
    const response = await getArtistsPage(page, perPage, searchQuery);
    
    artists = response[0];
    totalRows = response[1];
    totalPages = Math.ceil(totalRows / perPage);
  }

  onMount(async () => {
    token = localStorage.getItem('token');

    const userObject = JSON.parse(localStorage.getItem('user') || '{}');
    user = userObject ? User.fromObject(userObject) : null;

    await fetchArtistsPage(currentPage);
  });

  function nextPage() {
    if (currentPage < totalPages) currentPage += 1;
  }

  function previousPage() {
    if (currentPage > 1) currentPage -= 1;
  }

  function handleSearch() {
    if (currentPage !== 1) {
      currentPage = 1;
    } else {
      searchFlag = true;
    }
  }

  function handleKeyPress(event: { key: string }) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
</script>

<!-- Search Bar -->
<div class="search-bar">
  <input 
    type="text" 
    placeholder="Search artists by name..." 
    bind:value={searchQuery}
    on:keypress={handleKeyPress} 
  />
  <button on:click={handleSearch}>Search</button>
</div>

<section>
  {#each artists as artist}
    <div class="artista">
      <a href={`/artista/${artist.id}`}>
        <img src={artist.foto || 'https://via.placeholder.com/150'} alt="artista_foto" class="artista_foto hover-image">
      </a>
      <h3 class="artista_nombre">
        <a href={`/artista/${artist.id}`}>{artist.name}</a>
      </h3>
    </div>
  {/each}
</section>

{#if totalRows > perPage}
  <div class='pagination'>
    <button on:click={previousPage} disabled={currentPage === 1}>
      Previous
    </button>
    <p>{currentPage} of {totalPages}</p>
    <button on:click={nextPage} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
{/if}

{#if user && user.role}
  <a href="/addArtist" class="agregar_wrapper"><button class="admin-button">Agregar Artista</button></a>
{/if}

<style>
  @import './artistas.css';

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
