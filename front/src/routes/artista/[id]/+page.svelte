<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import Artista from '@src/components/artista/Artista.svelte';
	import ArtistaAlbums from '@src/components/artistaalbums/ArtistaAlbums.svelte';

    export let data
</script>

<style>
    @import '@src/routes/global.css';
    @import './artista.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <Artista id={data.id}/>
    </section>
    <section class="section-body">
        <h2 class="section-title">Albumes</h2>
        <ArtistaAlbums id={data.id}/>
    </section>
</main>
  