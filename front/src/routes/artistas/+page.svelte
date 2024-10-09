<script>
	import Artistas from '@src/components/artistas/Artistas.svelte';
    import Navbar from '@src/components/navbar/Navbar.svelte';

    // TODO: Add a way to look up albums using words using a specific navbar with a search text field for artists
</script>

<style>
    @import './../global.css';
    @import './artistas.css';
</style>

<Navbar/>

<main>
        <Artistas/>
</main>