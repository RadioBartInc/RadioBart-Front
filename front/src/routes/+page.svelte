<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import ReviewsRecientes from '@src/components/reviewsrecientes/ReviewsRecientes.svelte';
    import AlbumesNuevos from '@src/components/albumesnuevos/AlbumesNuevos.svelte';
    import ArtistasPopulares from '@src/components/artistaspopulares/ArtistasPopulares.svelte';
</script>

<style>
    @import './global.css';
    @import './index.css';
</style>

<Navbar/>

<main>
    <section class="section-body" id="albums-recientes">
        <h2 class="section-title">Albumes nuevos</h2>
        <AlbumesNuevos/>
    </section>
    <section class="section-body" id="albums-populares">
        <h2 class="section-title">Artistas populares</h2>
        <ArtistasPopulares/>
    </section>
    <section class="section-body" id="reviews-recientes">
        <h2 class="section_title">Reviews recientes</h2>
        <ReviewsRecientes/>
    </section>
</main>
  