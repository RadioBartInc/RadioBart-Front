<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import Artista from '@src/components/artista/Artista.svelte';
	import ArtistaAlbums from '@src/components/artistaalbums/ArtistaAlbums.svelte';
</script>

<style>
    @import './../global.css';
    @import './artista.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <Artista/>
    </section>
    <section class="section-body">
        <h2 class="section-title">Albumes</h2>
        <ArtistaAlbums/>
    </section>
</main>
  