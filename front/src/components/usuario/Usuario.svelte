<script lang="ts">
	import { getUserById, getUserStats } from '@src/api/APIAdapter';
	import type { User } from '@src/models/UserClass';
	import type { UserStats } from '@src/models/UserStats';
    import { onMount } from 'svelte';

    export let id: string;
    let user: User | null = null;
    let userStats: UserStats | null = null;
    
    onMount(async () => {
        try {
            user = await getUserById(id);   

            if (user){
                userStats = await getUserStats(user.id);
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    });
</script>

<section>
    {#if user && userStats}
    <div class="avatar-wrapper">
        <img src="{user.profile_picture || 'https://via.placeholder.com/50'}" alt="Avatar" class="avatar">
    </div>
    <h1 class="nombre">{user.name}</h1>
    <div class="data">
        <div class="data-block">
            <p>Reviews</p>
            <p class="cant-reviews">{userStats.reviewCount}</p>
        </div>
        <div class="data-block">
            <p>Avg. Rating</p>
            <p class="promedio-rating">{userStats.averageRating}</p>
        </div>
        <div class="data-block">
            <p>Likes Totales</p>
            <p class="likes-totales">{userStats.totalLikes}</p>
        </div>
    </div>
    {/if}
</section>

<style>
    @import './usuario.css';
</style>