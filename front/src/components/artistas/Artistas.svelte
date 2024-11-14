<script lang="ts">
  import { onMount } from 'svelte';
  import { getAllArtists } from '@src/api/APIAdapter'; 
  import type { Artista } from '@src/models/ArtistaClass';
  import { User } from '@src/models/UserClass';

  export let artists: Artista[] = [];

  let token: string | null = '';
  let user: User | null = null;
  let currentPage = 0;
  let trimmedArtists: Artista[] = [];
  const perPage = 8;
  let searchQuery = ''; // Variable to store the search query

  // Derived values for pagination
  $: totalRows = artists.length;
  $: totalPages = Math.ceil(totalRows / perPage);

  // Get the artists to display on the current page
  $: {
      const filteredArtists = searchQuery
          ? artists.filter(artist => artist.name.toLowerCase().includes(searchQuery.toLowerCase()))
          : artists;

      totalRows = filteredArtists.length;
      totalPages = Math.ceil(totalRows / perPage);

      const start = currentPage * perPage;
      const end = start + perPage;
      trimmedArtists = filteredArtists.slice(start, end);
  }

  onMount(async () => {
      token = localStorage.getItem('token');
      user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
      artists = await getAllArtists();
  });

  function nextPage() {
      if (currentPage < totalPages - 1) currentPage += 1;
  }

  function previousPage() {
      if (currentPage > 0) currentPage -= 1;
  }

  function handleSearch(event: Event) {
      searchQuery = (event.target as HTMLInputElement).value;
      currentPage = 0; // Reset to the first page on search
  }
</script>

<!-- Search Bar -->
<div class="search-bar">
  <input type="text" placeholder="Search artists by name..." on:input={handleSearch} />
</div>

<section>
  {#each trimmedArtists as artist}
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
    <button on:click={previousPage} disabled={currentPage === 0}>
      Previous
    </button>
    <p>{currentPage + 1} of {totalPages}</p>
    <button on:click={nextPage} disabled={currentPage === totalPages - 1}>
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
