<template>
  <div class="form-container">
    <div class="form">
      <form action="#" class="register-form">
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="name" placeholder="Username" />

        <input type="text" name="password" placeholder="Password" />
        <button type="submit" class="btn btn-sign">Sign in</button>
        <p class="message">
          Already registered?<router-link to="/login"> Sign in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>
