<script lang="ts">
    import { postAlbum } from '@src/api/APIAdapter';  // Assuming you have the `addAlbum` function
    import { Album } from '@src/models/AlbumClass'; // The Album class
	import { User } from '@src/models/UserClass';
    import { onMount } from 'svelte';

    export let artist = '';
    let title = '';
    let genre = '';
    let releaseDate: string = '';
    let coverUrl = '';
    let reviews: string[] = [];

    let message = '';
    let messageColor = 'red';

    let token: string | null;
    let user: User | null;

    onMount(() => {
        token = localStorage.getItem('token');
        user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
    });
    
    async function handleAddAlbum(event: Event) {
        event.preventDefault();

        const album = new Album(
            '', 
            title,
            artist,
            new Date(releaseDate),
            genre,
            reviews,
            coverUrl || 'https://via.placeholder.com/150'
        );

        try {
            const success = await postAlbum(album, token ?? '', user?.admin_secret ?? '', user?.id ?? '');

            if (success) {
                messageColor = 'green';
                message = 'Álbum agregado correctamente';
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                messageColor = 'red';
                message = 'Error interno del servidor, intenta de nuevo';
            }
        } catch (error) {
            console.error('Error al agregar el álbum:', error);
            message = 'Ocurrió un error durante el proceso';
        }
    }
</script>

<form on:submit={handleAddAlbum}>
    <h2>Agregar Álbum</h2>
  
    <label for="title">Título:</label>
    <input type="text" id="title" bind:value={title} class="text-input" required />

    <label for="genre">Género:</label>
    <input type="text" id="genre" bind:value={genre} class="text-input" required />

    <label for="release-date">Fecha de Lanzamiento:</label>
    <input type="date" id="release-date" bind:value={releaseDate} class="text-input" required />

    <label for="cover-url">URL de la Portada:</label>
    <input type="text" id="cover-url" bind:value={coverUrl} class="text-input" />

    {#if message}
        <p class="{messageColor}">{message}</p>
    {/if}
  
    <div class="wrapper">
        <input class="submit" type="submit" value="Agregar Álbum" />
    </div>
</form>

<style>
    @import './addalbum.css';
</style>
