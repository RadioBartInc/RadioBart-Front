<script lang="ts">
    import { onMount } from 'svelte';
  
    interface Album {
      artist: string;
      album_name: string;
      cover: string;
      rating: number;
    }
  
    let album: Album | null = null;
  
    // Fetch album data from tpab.json when the component mounts
    onMount(async () => {
      const res = await fetch('/tpab.json');
      album = await res.json() as Album;
    });
  
    // Helper function to determine rating class
    function getRatingClass(rating: number): string {
      if (rating >= 80) return 'good_rating';
      if (rating >= 50) return 'regular_rating';
      return 'bad_rating';
    }
  </script>
  
  <section>
    {#if album}
      <div class="datos">
        <h1 class="artista"><a href="./">{album.artist}</a></h1>
        <h2 class="nombre_album">{album.album_name}</h2>
      </div>
  
      <img src={album.cover} alt="album_cover" class="portada">
      
      <div class="rating-wrapper"><p class="rating {getRatingClass(album.rating)}">{album.rating}</p></div>
  
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
    @import './albumpage.css'; /* Your CSS file for album page */
  </style>