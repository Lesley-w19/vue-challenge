<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">Blog</div>
    <!-- NAVIGATION MENU -->
    <ul class="nav-links">
      <!-- USING CHECKBOX HACK -->
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <!-- NAVIGATION MENUS -->
      <div class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <div>
          <button class="btn">Create Blog</button>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarSection",
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>
