<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
	import Review from '@src/components/review/Review.svelte';
	import ReviewComentarios from '@src/components/reviewcomentarios/ReviewComentarios.svelte';
</script>

<style>
    @import './../global.css';
    @import './review.css';
</style>

<Navbar/>

<main>
    <section class="section-body" id="albums-recientes">
        <Review/>
    </section>
    <section class="section-body" id="albums-populares">
        <h2 class="section-title">Comentarios</h2>
        <ReviewComentarios/>
    </section>
</main>