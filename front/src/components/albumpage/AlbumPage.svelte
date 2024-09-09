<section>
    <div class="datos">
        <h1 class="artista"><a href="./">Nombre del artista</a></h1>
        <h2 class="nombre_album">Nombre del album</h2>
    </div>

    <img src="https://via.placeholder.com/150" alt="album_cover" class="portada">
    
    <p class="rating good_rating">85</p>

    <form action="./album">
        <div class="user_rating">
            <input placeholder="0-100" class="rating_input" type="text">
            <p>/ 100</p>
        </div>
        <textarea id="review" class="review_input" placeholder="Enter your text here..."></textarea>
        <input type="submit" class="submit" value="Submit review">
    </form>
</section>

<style>
    @import './albumpage.css';
</style>