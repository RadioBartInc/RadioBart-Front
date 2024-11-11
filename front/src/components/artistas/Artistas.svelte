<script lang="ts">
    import { onMount } from 'svelte';
    import { getAllArtists } from '@src/api/APIAdapter'; 
    import type { Artista } from '@src/models/ArtistaClass';
	import { User } from '@src/models/UserClass';
  
    export let artists: Artista[] = [];
  
    let token: string | null = '';
    let user: User | null = null;
    
    onMount(async () => {
      token = localStorage.getItem('token');
      user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
      artists = await getAllArtists();
      console.log(artists)
    });

  </script>
  
  {#if user && user.role}
      <ul id="lista_nav">
          <li>
              <a href="/addArtist"><button>Agregar Artista</button></a>
          </li>
      </ul>
  {/if}
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
  
  <style>
    @import './artistas.css';
  </style>
  