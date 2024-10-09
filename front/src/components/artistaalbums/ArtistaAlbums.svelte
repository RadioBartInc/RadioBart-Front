<script lang="ts">
    import { onMount } from 'svelte';
    import { getArtistById, getAllAlbums, getAlbumAvgRating, fetchAlbumsById } from '@src/api/APIAdapter'; // Import the function to get artist by ID
    import type { Album } from '@src/models/AlbumClass'; // Import Album model
    import type { Artista } from '@src/models/ArtistaClass'; // Import Artist model
    import { getRatingClass } from "@src/utils/misc";
  
    export let id;
    let artist: Artista | null = null;
    export let albums: Album[] = [];
    export let avgRatings: Record<string, number> = {};
  
    onMount(async () => {
        try{
            console.log(artist)
            artist = await getArtistById(id);
            if (artist) {
                albums = await fetchAlbumsById(artist.albums)
                
                albums.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
                
                for (const album of albums) {
                    if (!(album.id in avgRatings)) {
                        avgRatings[album.id] = await fetchAlbumAvgRating(album.id);
                    }
                }

            }
        } catch (error) {
            console.error("Error getting artist", error);
        }
    });
  
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
    {#if artist}
        {#each albums as album}
            <div class="album">
                <img src={album.cover || 'https://via.placeholder.com/150'} alt="album_cover" class="portada hover-image">
                <h3 class="nombre_album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
                <p class="rating {getRatingClass(avgRatings[album.id])}">{avgRatings[album.id]}</p>
            </div>
        {/each}
    {/if}
</section>

<style>
    @import './artistaalbums.css';
</style>
