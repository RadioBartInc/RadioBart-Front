<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
    import ReviewsRecientes from '@src/components/reviewsrecientes/ReviewsRecientes.svelte';
</script>

<style>
    @import './global.css';
    @import './index.css';
</style>

<Navbar/>

<main>
    <section id="reviews-recientes">
        <h2>Reviews recientes</h2>
        <ReviewsRecientes/>
    </section>
</main>
  