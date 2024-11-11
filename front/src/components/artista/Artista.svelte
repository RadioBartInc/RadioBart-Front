<script lang="ts">
    import { onMount } from 'svelte';
    import { getArtistaAvgRating, getArtistById } from '@src/api/APIAdapter';
    import type { Artista } from '@src/models/ArtistaClass';
    import { getRatingClass } from '@src/utils/misc';
	import { User } from '@src/models/UserClass';

    export let id;
    let artist: Artista | null = null; 
    let avg_rating: number = 0;
    let token: string | null;
    let user: User | null;

    onMount(async () => {
        try {
            token = localStorage.getItem('token');
            user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
            
            artist = await getArtistById(id);
            if (artist) {            
                const ratingRes = await getArtistaAvgRating(artist.id);
                avg_rating = ratingRes || 0;
            } 
        } catch (error) {
            console.error("Error getting artist", error);
        }
    });
</script>

<section>
{#if artist}
    <div class="artista">
        <img src={artist.foto || 'https://via.placeholder.com/150'} alt="artista_foto" class="artista_foto">
        <h3 class="artista_nombre">{artist.name}</h3>
        <p class="rating {getRatingClass(avg_rating)}">{avg_rating}</p>
    </div>
    {#if user && user.role}
        <ul id="lista_nav">
            <li>
                <a href={artist.id + "/addAlbum"}><button>Agregar Album</button></a>
            </li>
            <li>
                <a href={artist.id + "/borrarArtista"}><button>Borrar Arista</button></a>
            </li>
        </ul>
    {/if}
{/if}
</section>

<style>
    @import './artista.css';
</style>
