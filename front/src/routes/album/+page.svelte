<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import AlbumPage from '@src/components/albumpage/AlbumPage.svelte';
	import UserAlbumReviews from '@src/components/useralbumreviews/UserAlbumReviews.svelte';
</script>

<style>
    @import './../global.css';
    @import './album.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <AlbumPage/>
    </section>
    
    <section class="section-body">
        <h2 class="section-title">Reviews recientes</h2>
        <UserAlbumReviews/>
    </section>
</main>

