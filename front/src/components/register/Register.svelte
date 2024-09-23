<form action="/register" method="POST">
    <h2>Register</h2>
  
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" class="text-input" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" class="text-input" required>
  
    <label for="confirm-password">Confirm Password:</label>
    <input type="password" id="confirm-password" name="confirm_password" class="text-input" required>
  
    <div class="wrapper">
        <input class="submit" type="submit" value="Register">
    </div>
</form>

<style>
    @import './register.css';
</style>