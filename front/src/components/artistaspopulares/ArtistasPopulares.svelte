<script lang="ts">
    import { onMount } from 'svelte';
    import { getAllArtists, getArtistaAvgRating } from '@src/api/APIAdapter';
    import type { Artista } from '@src/models/ArtistaClass';

    let topArtists: Artista[] = [];
    let avgRatings: Record<string, number> = {};

    onMount(async () => {
        const artists = await getAllArtists();

        for (const artist of artists) {
            avgRatings[artist.id] = (await getArtistaAvgRating(artist.id)) ?? 0;
        }

        topArtists = Object.entries(avgRatings)
        .sort(([, ratingA], [, ratingB]) => ratingB - ratingA)
        .slice(0, 4) // Get the top 4
        .map(([artistId]) => artists.find(artist => artist.id === artistId))
        .filter((artist): artist is Artista => artist !== undefined);
    });
</script>

<section>
    {#each topArtists as artist, index}
        <div class="artista">
        <img src={artist.foto || 'https://via.placeholder.com/150'} alt="artista_foto" class="artista_foto hover-image">
        <h3 class="artista_nombre">
            <a href={`/artista/${artist.id}`}>{artist.name}</a>
        </h3>
        <p class="puesto {index === 0 ? 'primero' : index === 1 ? 'segundo' : index === 2 ? 'tercero' : 'cuarto'}">{index + 1}</p>
        </div>
    {/each}
</section>
  
<style>
    @import './artistaspopulares.css';
</style>
  