<script lang="ts">
    import { onMount } from 'svelte';
  
    // Define the Album type
    interface Album {
      artist: string;
      album_name: string;
      cover: string;
      rating: number;
    }
  
    let albums: Album[] = [];
  
    // Fetch JSON data on mount
    onMount(async () => {
      const res = await fetch('/albums.json');
      albums = await res.json() as Album[];
    });
  
    // Helper function to determine rating class
    function getRatingClass(rating: number): string {
      if (rating >= 80) return 'good_rating';
      if (rating >= 50) return 'regular_rating';
      return 'bad_rating';
    }
  </script>
  
  <section>
    {#each albums as album}
      <div class="album">
        <img src={album.cover} alt="album_cover" class="portada hover-image">
        <h3 class="artista"><a href="./">{album.artist}</a></h3>
        <h3 class="nombre_album"><a href="./">{album.album_name}</a></h3>
        <p class="rating {getRatingClass(album.rating)}">{album.rating}</p>
      </div>
    {/each}
  </section>
  
  <style>
    @import './albums.css'; /* Your existing CSS */
  </style>
  