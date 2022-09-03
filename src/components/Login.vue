<template>
  <div class="form-container">
    <div class="form">
      <form action="#" class="login-form">
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit" class="btn">Login</button>
        <p class="message">
          New User? <router-link to="/signup">Create an account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
