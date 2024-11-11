<script lang="ts">
	import { User } from "@src/models/UserClass";
    import { onMount } from "svelte";

    let token: string | null;
    let user: User | null;

    onMount(() => {
        token = localStorage.getItem('token');
        user = User.fromObject(JSON.parse(localStorage.getItem('user') || ''));
    });

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }
</script>

<nav>
    <a href="/"><button id="logo">
        <img src="https://via.placeholder.com/50" alt="logo">
    </button></a>
    <ul id="lista_nav">
        <li>
            <a href="/albums"><button>Albums</button></a>
        </li>
        <li>
            <a href="/artistas"><button>Artistas</button></a>
        </li>
        <li>
            <a href="/reviews"><button>Reviews</button></a>
        </li>
        <li>
            <a href="/users"><button>Usuarios</button></a>
        </li>
        {#if token && user}
            <li>
                <a href="/usuario/{user.id}"><button class="perfil">
                    <img class="avatar" src="{user.profile_picture || 'https://via.placeholder.com/50'}" alt="Profile">
                </button></a>
            </li>
            <li>
                <button class="logout" on:click={handleLogout}>Logout</button>
            </li>
        {:else}
            <li>
                <a class="login" href="/login"><button>Login</button></a>
            </li>
            <li>
                <a class="register" href="/register"><button>Register</button></a>
            </li>
        {/if}
    </ul>
</nav>

<style>
    @import './navbar.css';
</style>
