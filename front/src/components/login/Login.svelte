<script lang="ts">
	import { getUserByName, loginUser } from "@src/api/APIAdapter";
	import { User } from "@src/models/UserClass";

    let foundUser: User | null = null;
    let username = '';
    let password = '';
    let message = '';
    let messageColor = 'red';

    async function handleLogin(event: Event) {
        event.preventDefault();

        try {
            const user = new User("", username, password, "https://via.placeholder.com/50");
            const token = await loginUser(user);
            
            if (!token) {
                messageColor = 'red';
                message = 'Error en el inicio de sesión';
                return;
            }
            
            foundUser = await getUserByName(user.name)

            if (foundUser) {
                foundUser.password = ""
            }

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(foundUser));
            messageColor = 'green';
            message = 'Inicio de sesión exitoso';

            setTimeout(() => {
                window.location.href = '/';
            }, 1500);

        } catch (error) {
            console.error('Error during login:', error);
            messageColor = 'red';
            message = 'Ocurrió un error durante el inicio de sesión';
        }
    }
</script>

<form on:submit={handleLogin}>
    <h2>Login</h2>
  
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" bind:value={username} class="text-input" required />

    <label for="password">Contraseña:</label>
    <input type="password" id="password" bind:value={password} class="text-input" required />

    {#if message}
        <p class={messageColor}>{message}</p>
    {/if}
  
    <div class="wrapper">
        <input class="submit" type="submit" value="Login" />
    </div>
</form>

<style>
    @import './login.css';
</style>
