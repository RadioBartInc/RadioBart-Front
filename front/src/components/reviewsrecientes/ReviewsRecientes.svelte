<!-- TODO: Make it so it gets the data and sorts it, also make it so that it doesnt let the content go over about 75-100 chars and add a "..." if it exceeds the limit -->
<script lang="ts">
    import { onMount } from 'svelte';
    import type { Review } from '@src/models/ReviewClass';
    import { User } from '@src/models/UserClass';
    import { getRatingClass } from '@src/utils/misc';
    import { fetchReviewsByIds, getAlbumById, getAllReviews, getArtistById, getUserById, updateReviewLikes } from '@src/api/APIAdapter';
    import { REVIEW_PREVIEW_LIMIT } from '@src/consts/limits';
	import type { Album } from '@src/models/AlbumClass';
	import type { Artista } from '@src/models/ArtistaClass';
    
    export let reviews: Review[] = [];
    let users: Record<string, User | null> = {};
    let albums: Record<string, Album | null> = {};
    let artists: Record<string, Artista | null> = {};
    
    let user: User | null = null; 

    let reviewLikedState: Record<string, boolean> = {};
    let reviewLikeCounts: Record<string, number> = {};
    let isCooldownActive: Record<string, boolean> = {};

    // Function to fetch a user based on their ID
    async function fetchUser(userId: string): Promise<User | null> {
        try {
            return await getUserById(userId);
        } catch (error) {
            console.error(`Error fetching user ${userId}:`, error);
            return null;
        }
    }
    async function fetchAlbum(albumId: string): Promise<Album | null> {
        try {
            return await getAlbumById(albumId);
        } catch (error) {
            console.error(`Error fetching album ${albumId}:`, error);
            return null;
        }
    }

    onMount(async () => {
        try {
            let user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));

            reviews = await getAllReviews();

            reviews = reviews.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
            
            for (const review of reviews) {
                if (!users[review.userId]) {
                    users[review.userId] = await fetchUser(review.userId);
                }
                if (!albums[review.albumId]) {
                    albums[review.albumId] = await fetchAlbum(review.albumId);
                }

                let album = albums[review.albumId]
                if(album){
                    if (!artists[album.artist]) {
                        artists[album.id] = await getArtistById(album.artist);
                    }
                }
                
                if(user){
                    reviewLikedState[review.id] = review.userLikes.includes(user.id);
                } else {
                    reviewLikedState[review.id] = false;
                }
                reviewLikeCounts[review.id] = review.likes;
                isCooldownActive[review.id] = false;
            }
        } catch (error) {
            console.error("Error during onMount:", error);
        }
    });
    
    function getReviewPreview(content: string): string {
        if (content.length > REVIEW_PREVIEW_LIMIT) {
        return content.slice(0, REVIEW_PREVIEW_LIMIT) + '...';
        }
        return content;
    }

    async function toggleLike(reviewId: string) {
        let token = localStorage.getItem('token'); 
        if(token){
            user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
        }
        
        if (!token || !user) {
        return;
        }
        
        if (isCooldownActive[reviewId]) {
        console.log('Please wait before liking again.');
        return;
        }

        if (reviewLikedState[reviewId]) {
        reviewLikeCounts[reviewId] -= 1;
        } else {
        reviewLikeCounts[reviewId] += 1;
        }
        reviewLikedState[reviewId] = !reviewLikedState[reviewId];

        try {
        await updateReviewLikes(reviewId, token, reviewLikeCounts[reviewId], user.id);
        console.log('Review like updated successfully');
        } catch (error) {
        console.error('Error updating review like:', error);
        reviewLikedState[reviewId] = !reviewLikedState[reviewId];
        reviewLikeCounts[reviewId] += reviewLikedState[reviewId] ? 1 : -1;
        }

        // Set cooldown for 2 seconds to prevent spam
        isCooldownActive[reviewId] = true;
        setTimeout(() => {
        isCooldownActive[reviewId] = false;
        }, 2000); // Cooldown of 2 seconds
    }

    function getAlbumArtistName(albumId: string | undefined): string{
        if(albumId){
            let artist = artists[albumId];
            if(artist){
                return artist.name;
            }
        }    

        return "Not Found"
    }
</script>

<section>
    {#each reviews as review}
        <div class="review">
            <a href="{`/album/${albums[review.albumId]?.id}`}">
                <img src={albums[review.albumId]?.cover} alt="album_cover" class="portada hover-image">
            </a>
            <div class="contenido">
                <h3 class="artista"><a href="{`/artista/${albums[review.albumId]?.artist}`}">{getAlbumArtistName(albums[review.albumId]?.id)}</a></h3>
                <h3 class="album"><a href="{`/album/${albums[review.albumId]?.id}`}">{albums[review.albumId]?.title || "Unknown Album"}</a></h3>
                <p class="texto-review">{getReviewPreview(review.content)}</p>
            </div>
            <p class="fecha">{review.fecha.toLocaleDateString('es-ES')}</p>
            <div class="rating-wrapper">
                <p class="rating {getRatingClass(review.ratingScore)}">{review.ratingScore}</p>
            </div>
            <div class="usuario">
                <a href="{`/usuario/${review.userId}`}" class="avatar_wrapper">
                    <img src={users[review.userId]?.profile_picture || 'https://via.placeholder.com/50'} alt="Avatar" class="avatar">
                </a>
                <p><a href={`/usuario/${review.userId}`}>{users[review.userId]?.name || review.userId}</a></p>
                <div class="buttons">
                    <div class="likes_wrapper">
                        <button class="likes_button" on:click={() => toggleLike(review.id)}>
                            <svg class="heart" height="20px" fill="{reviewLikedState[review.id] ? '#ff6666' : '#222'}" viewBox="0 -30 511.99938 511" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path d="m248.367188 448.496094c2.359374 1.394531 4.996093 2.082031 7.632812 2.082031s5.273438-.6875 7.632812-2.082031c10.398438-6.152344 255.613282-152.242188 248.203126-309.316406-3.632813-77.175782-63.378907-138.078126-134.769532-138.648438-61.941406-1.390625-100.558594 42.121094-121.066406 80.53125-20.40625-38.191406-59.363281-80.53125-120.042969-80.53125-.351562 0-.6875 0-1.023437 0-71.390625.574219-131.136719 61.472656-134.769532 138.648438-7.410156 157.074218 237.800782 303.164062 248.203126 309.316406zm0 0"/>
                            </svg>
                        </button>
                        <p class="likes-no">{reviewLikeCounts[review.id]}</p>
                    </div>
                    <a class="more_review" href="/review/{review.id}">
                        <button><img src="https://via.placeholder.com/50" alt=""></button>
                    </a>
                </div>
            </div>
        </div>
    {/each}
</section>

<style>
    @import './reviewsrecientes.css';
</style>