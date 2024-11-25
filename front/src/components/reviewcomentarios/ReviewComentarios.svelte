<script lang="ts">
	import { deleteComment, fetchComentariosById, getReviewById, getUserById, postComentario } from '@src/api/APIAdapter';
	import { MAX_COMMENT_LENGTH } from '@src/consts/limits';
	import { Comentario } from '@src/models/ComentarioClass';
	import type { Review } from '@src/models/ReviewClass';
	import { User } from '@src/models/UserClass';
    import { onMount } from 'svelte';
    
    export let id: string;
    let comentarios: Comentario[] = [];
    let review: Review | null = null;
    let comentarioUser: Record<string, User> = {};
    
    let token: string | null;
    let user: User | null;
    let userId: string | null;
    
    onMount(async () => {
        try{
            token = localStorage.getItem('token');
      
            if (token) {
                const userObject = JSON.parse(localStorage.getItem('user') || '{}');
                user = userObject ? User.fromObject(userObject) : null;
                if (user) {
                    userId = user.id;
                }
            }

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
            if (review && userId && token && (newComment.length > 0 || newComment.length < MAX_COMMENT_LENGTH)) {
                submitedComment = new Comentario('', newComment, userId, new Date(Date.now()), review.id);

                newComment = '';
            } else {
                messageColor = "red";
                message = "Please enter a valid comment.";
                return;
            }
            
			const response = await postComentario(submitedComment, token);

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

    async function callDeleteComment(commentId: string) {
        await deleteComment(commentId, token ?? "");
        
        window.location.reload();
    }
</script>

<section>
    {#if token}
    <form on:submit|preventDefault={submitComment}>
        {#if message}
        <p class="submission-message" style="color: {messageColor}">{message}</p>
        {/if}
		<textarea bind:value={newComment} placeholder="Write a comment..." rows="3" class="comment-input"></textarea>
		<button type="submit" class="submit-btn">Submit Comment</button>
	</form>
    {:else}
    <p class="comment-input not-logged">Logeate para escribir un mensaje</p>
    {/if}
    {#each comentarios as comentario}
        <div class="comentario">
            <div class="usuario">
                <div class="info_usuario">
                    <a href="/usuario/{comentarioUser[comentario.id]?.id}">
                        <img src={comentarioUser[comentario.id]?.profile_picture || 'https://via.placeholder.com/150'} alt="Avatar" class="avatar">
                    </a>
                    <p><a href="./{comentarioUser[comentario.id]?.id}">{comentarioUser[comentario.id]?.name}</a></p>
                </div>
            </div>
            <p class="texto">{comentario.content}</p>
            {#if user && user.role}
                <button on:click={() => callDeleteComment(comentario.id)} class="admin-button bg-red">Borrar Comentario</button>
            {/if}
        </div>
    {/each}
</section>
<style>
    @import './reviewcomentarios.css';
</style>