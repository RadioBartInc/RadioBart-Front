<script>
	import Albums from '@src/components/albums/Albums.svelte';
    import Navbar from '@src/components/navbar/Navbar.svelte';

    // TODO: Add a way to look up albums using words using a specific navbar with a search text field for albums
</script>

<style>
    @import './../global.css';
    @import './albums.css';
</style>

<Navbar/>

<main>
        <Albums/>
</main>