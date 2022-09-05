<template>
  <div class="page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>This page no longer exists or was moved to another location.</p>
    <button class="btn">
      <router-link to="/">Back to home page</router-link>
    </button>
  </div>
</template>
<script>
export default {
  name: "PagenotFound",
};
</script>

<style scoped lang="scss">
.page-not-found {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    letter-spacing: 1px;
  }
  .btn {
    padding: 10px 30px;
    margin: 20px auto;
    background-color: #158fbf;
    border-radius: 5px;
    border: none;
    a {
      color: #fff;
      text-transform: capitalize;
    }
  }
}
</style>
