<script>
    import AddAlbum from '@src/components/addalbum/AddAlbum.svelte';

    export let data
</script>

<style>
    @import '@src/routes/global.css';
    @import './addAlbum.css';
</style>

<AddAlbum artist={data.id}/>