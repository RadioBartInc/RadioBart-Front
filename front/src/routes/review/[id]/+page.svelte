<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
	import Review from '@src/components/review/Review.svelte';
	import ReviewComentarios from '@src/components/reviewcomentarios/ReviewComentarios.svelte';

    export let data
</script>

<style>
    @import '@src/routes/global.css';
    @import './review.css';
</style>

<Navbar/>

<main>
    <section class="section-body" id="albums-recientes">
        <Review id={data.id}/>
    </section>
    <section class="section-body" id="albums-populares">
        <h2 class="section-title">Comentarios</h2>
        <ReviewComentarios id={data.id}/>
    </section>
</main>