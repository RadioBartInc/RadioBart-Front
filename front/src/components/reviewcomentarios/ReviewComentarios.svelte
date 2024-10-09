<script lang="ts">
	import { fetchComentariosById, getReviewById, getUserById, postComentario } from '@src/api/APIAdapter';
	import { Comentario } from '@src/models/ComentarioClass';
	import type { Review } from '@src/models/ReviewClass';
	import type { User } from '@src/models/UserClass';
    import { onMount } from 'svelte';
    
    export let id: string;
    let comentarios: Comentario[] = [];
    let review: Review | null = null;
    let comentarioUser: Record<string, User> = {};

    onMount(async () => {
        try{
            review = await getReviewById(id);
            if (review){
                comentarios = await fetchComentariosById(review.comentarios);

                if (comentarios){
                    for (const comentario of comentarios) {
                        if (!comentarioUser[comentario.id]) {
                           let user = await fetchUser(comentario.user);
                           if (user){
                            comentarioUser[comentario.id] = user;
                           }
                         }
                    }
                }
            }
        } catch (error) {
            console.error("Failed to fetch review data:", error);
        }
    });

    async function fetchUser(userId: string): Promise<User | null> {
        try {
            return await getUserById(userId);
        } catch (error) {
            console.error(`Error fetching user ${userId}:`, error);
            return null;
        }
    }

    let newComment = ''; 
    let submitedComment: Comentario;
    export let messageColor: string = "red";
    export let message: string = "";

    async function submitComment() {
		try {
            newComment = newComment.trim()
            if (review && newComment.length > 0){
                submitedComment = new Comentario('', newComment, "66fed4cfb816132fbadbd955", new Date(Date.now()), review.id);

                newComment = '';
            } else {
                messageColor = "red";
                message = "Please enter a valid comment.";
                return;
            }

			const response = await postComentario(submitedComment);

            if (response) {
                messageColor = "green";
                message = "Comment submitted successfully!";
                newComment = "";
            }
		} catch (error) {
            console.error("Error submitting review:", error);
            messageColor = "red";
            message = "An error occurred while submitting the review.";
        }
	}
</script>

<section>
    <form on:submit|preventDefault={submitComment}>
        {#if message}
          <p class="submission-message" style="color: {messageColor}">{message}</p>
        {/if}
		<textarea bind:value={newComment} placeholder="Write a comment..." rows="3" class="comment-input"></textarea>
		<button type="submit" class="submit-btn">Submit Comment</button>
	</form>
    {#each comentarios as comentario}
        <div class="comentario">
            <div class="usuario">
                <div class="info_usuario">
                    <img src={comentarioUser[comentario.id]?.profile_picture || 'https://via.placeholder.com/150'} alt="Avatar" class="avatar">
                    <p><a href="./{comentarioUser[comentario.id]?.id}">{comentarioUser[comentario.id]?.name}</a></p>
                </div>
            </div>
            <p class="texto">{comentario.content}</p>
        </div>
    {/each}
</section>
<style>
    @import './reviewcomentarios.css';
</style>