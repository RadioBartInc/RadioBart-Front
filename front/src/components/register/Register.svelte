<script lang="ts">
	import { checkUserExists, registerUser } from '@src/api/APIAdapter';
	import { User } from '@src/models/UserClass';
    import { onMount } from 'svelte';

    let username = '';
    let password = '';
    let confirmPassword = '';
    let message = '';
    let messageColor = 'red';

    async function handleRegister(event: Event) {
        event.preventDefault();

        if (username.length < 4) {
            messageColor = 'red';
            message = 'El nombre de usuario debe tener al menos 4 letras';
            return;
        }

        if (password.length < 6) {
            messageColor = 'red';
            message = 'La contraseña debe tener al menos 6 caracteres';
            return;
        }

        if (password !== confirmPassword) {
            messageColor = 'red';
            message = "Las contraseñas no coinciden";
            return;
        }

        const user = new User("", username, password, "https://via.placeholder.com/50");

        try {
            const userExists = await checkUserExists(user);

            if (userExists) {
                messageColor = 'red';
                message = 'El nombre de usuario ya está en uso';
                return;
            }

            if (await registerUser(user)) {
                messageColor = 'green';
                message = 'Usuario registrado correctamente';
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                messageColor = 'red';
                message = 'Error interno del servidor, intenta de nuevo';
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            message = 'Ocurrió un error durante el registro';
        }
    }
</script>

<form on:submit={handleRegister}>
    <h2>Registrar</h2>
  
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" bind:value={username} class="text-input" required />

    <label for="password">Contraseña:</label>
    <input type="password" id="password" bind:value={password} class="text-input" required />

    <label for="confirm-password">Confirmar contraseña:</label>
    <input type="password" id="confirm-password" bind:value={confirmPassword} class="text-input" required />

    {#if message}
        <p class="{messageColor}">{message}</p>
    {/if}
  
    <div class="wrapper">
        <input class="submit" type="submit" value="Registrar" />
    </div>
</form>

<style>
    @import './register.css';
</style>
