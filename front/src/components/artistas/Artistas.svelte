<script lang="ts">
    import { onMount } from 'svelte';
    import { getAllArtists } from '@src/api/APIAdapter'; 
    import type { Artista } from '@src/models/ArtistaClass';
  
    export let artists: Artista[] = [];
  
    onMount(async () => {
      artists = await getAllArtists();
    });

  </script>
  
  <section>
    {#each artists as artist}
      <div class="artista">
        <img src={artist.foto || 'https://via.placeholder.com/150'} alt="artista_foto" class="artista_foto hover-image">
        <h3 class="artista_nombre">
          <a href={`/artista/${artist.id}`}>{artist.name}</a>
        </h3>
      </div>
    {/each}
  </section>
  
  <style>
    @import './artistas.css';
  </style>
  