<script lang="ts">
    import { onMount } from 'svelte';
    import { getArtistaAvgRating } from '@src/api/APIAdapter';
    import type { Artista } from '@src/models/ArtistaClass';
    import { getRatingClass } from '@src/utils/misc';

    export let artist: Artista | null = null; 
    let avg_rating: number = 0;

    onMount(async () => {
        if (artist) {
        try {
            const ratingRes = await getArtistaAvgRating(artist.id);
            avg_rating = ratingRes || 0;
        } catch (error) {
            console.error("Failed to fetch artist rating:", error);
        }
        }
    });
</script>

<section>
{#if artist}
<div class="artista">
    <img src={artist.foto || 'https://via.placeholder.com/150'} alt="artista_foto" class="artista_foto">
    <h3 class="artista_nombre"><a href={`/artista/${artist.id}`}>{artist.name}</a></h3>
    <p class="rating {getRatingClass(avg_rating)}">{avg_rating}</p>
</div>
{/if}
</section>

<style>
    @import './artista.css';
</style>
