<script lang="ts">
    import { onMount } from 'svelte';
    import { getArtistById, getAllAlbums, getAlbumAvgRating } from '@src/api/APIAdapter';
    import type { Album } from '@src/models/AlbumClass';
    import type { Artista } from '@src/models/ArtistaClass';
    import { getRatingClass } from '@src/utils/misc';
  
    let albums: Album[] = [];
    let artists: Record<string, Artista | null> = {};
    let avgRatings: Record<string, number> = {};
    
    onMount(async () => {
      const allAlbums = await getAllAlbums();
      albums = allAlbums.sort((a, b) => b.fecha.getTime() - a.fecha.getTime()).slice(0, 4);
      
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
        return rating !== undefined && rating !== null ? rating : 0;
      } catch (error) {
        console.error(`Error fetching average rating for album ${albumId}:`, error);
        return 0;
      }
    }
  </script>
  
  <section>
    {#each albums as album}
      <div class="album">
        <a href="{`/album/${album.id}`}">
          <img src={album.cover} alt="album_cover" class="portada hover-image">
        </a>
        <h3 class="artista">
          <a href={`/artista/${album.artist}`}>{artists[album.artist]?.name || "Nombre del artista"}</a>
        </h3>
        <h3 class="nombre_album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
        <p class="rating {getRatingClass(avgRatings[album.id])}">{avgRatings[album.id]}</p>
      </div>
    {/each}
  </section>
  
  <style>
    @import './albumesnuevos.css';
  </style>
  