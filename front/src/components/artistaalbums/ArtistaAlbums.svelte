<script lang="ts">
    import type { Album } from '@src/models/AlbumClass'; // Import Album model
    import { getRatingClass } from '@src/utils/misc'; // Import utility function for rating classes
  
    export let albums: Album[] = []; // Array of albums passed as a prop
    export let avgRatings: Record<string, number> = {}; // Object to hold average ratings for each album

</script>

<section>
    {#each albums as album}
        <div class="album">
            <img src={album.cover || 'https://via.placeholder.com/150'} alt="album_cover" class="portada hover-image">
            <h3 class="nombre_album"><a href={`/album/${album.id}`}>{album.title}</a></h3>
            <p class="rating {getRatingClass(avgRatings[album.id] || 0)}">{avgRatings[album.id] || 0}</p>
        </div>
    {/each}
</section>

<style>
    @import './artistaalbums.css';
</style>
