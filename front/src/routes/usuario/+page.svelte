<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
	import Usuario from '@src/components/usuario/Usuario.svelte';
    import UsuarioReviews from '@src/components/usuarioreviews/UsuarioReviews.svelte'
</script>

<style>
    @import './../global.css';
    @import './usuario.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <Usuario/>
    </section>
    <section class="section-body">
        <h2 class="section-title titulo-rev">Reviews</h2>
        <UsuarioReviews/>
    </section>
</main>
  