<script>
	import Artistas from '@src/components/artistas/Artistas.svelte';
    import Navbar from '@src/components/navbar/Navbar.svelte';
</script>

<style>
    @import './../global.css';
    @import './artistas.css';
</style>

<Navbar/>

<main>
        <Artistas/>
</main>