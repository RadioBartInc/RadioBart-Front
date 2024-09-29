<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import Artista from '@src/components/artista/Artista.svelte';
	import ArtistaAlbums from '@src/components/artistaalbums/ArtistaAlbums.svelte';

    export let artist; 
    export let albums;
</script>

<style>
    @import '@src/routes/global.css';
    @import './artista.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <Artista {artist}/>
    </section>
    <section class="section-body">
        <h2 class="section-title">Albumes</h2>
        <ArtistaAlbums {albums}/>
    </section>
</main>
  