<script>
	import Albums from '@src/components/albums/Albums.svelte';
    import Navbar from '@src/components/navbar/Navbar.svelte';
</script>

<style>
    @import './../global.css';
    @import './albums.css';
</style>

<Navbar/>

<main>
    <Albums/>
</main>