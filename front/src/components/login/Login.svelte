<form action="/login" method="POST">
    <h2>Login</h2>
  
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" class="text-input" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" class="text-input" required>

    <div class="wrapper">
        <input class="submit" type="submit" value="Login">
    </div>
</form>

<style>
    @import './login.css';
</style>