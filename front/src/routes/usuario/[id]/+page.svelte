<script>
    import Navbar from '@src/components/navbar/Navbar.svelte';
	import Usuario from '@src/components/usuario/Usuario.svelte';
    import UsuarioReviews from '@src/components/usuarioreviews/UsuarioReviews.svelte'

    export let data
</script>

<style>
    @import '@src/routes/global.css';
    @import './usuario.css';
</style>

<Navbar/>

<main>
    <section class="section-body">
        <Usuario id={data.id}/>
    </section>
    <section class="section-body">
        <h2 class="section-title titulo-rev">Reviews</h2>
        <UsuarioReviews id={data.id}/>
    </section>
</main>
  