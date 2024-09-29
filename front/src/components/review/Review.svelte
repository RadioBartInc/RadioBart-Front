<script lang="ts">
    import { Review } from '@src/models/ReviewClass';

    export let review: Review;

    // TODO: Fetch all the data for a review
    // TODO: Make it so you can comment on a review
    // TODO: Make it so you can like a review
</script>

<section>
    <div class="info">
        <img src="https://via.placeholder.com/150" alt="Album Cover" class="portada hover-image">
        <h3 class="artista"><a href="./">Artist Name</a></h3>
        <h3 class="album"><a href="./">Album Name</a></h3>
        <div class="rating-wrapper">
            <p class="rating regular_rating">{review.ratingScore}</p>
        </div>
        <p class="fecha">{review.fecha.toLocaleDateString()}</p>
    </div>
    
    <div class="review">
        <div class="usuario">
            <div class="info_usuario">
                <img src="https://via.placeholder.com/50" alt="User Avatar" class="avatar">
                <p><a href="./">User Name</a></p>
                <div class="likes">
                    <img src="https://via.placeholder.com/50" alt="Heart" class="heart">
                    <p class="likes-no">{review.likes}</p>
                </div>
            </div>
        </div>
        <p class="review-texto">{review.content}</p>
    </div>
</section>

<style>
    @import './review.css';
</style>
