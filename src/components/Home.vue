<template>
  <div class="container home-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h3>{{ msg }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          quisquam maxime voluptatem quidem consectetur et ipsam esse
          accusantium illum a!
        </p>
        <button class="btn">
          <router-link to="/blogs"> Read blogs </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
    padding: 10px 50px;
    margin: 20px auto;
    background-color: #158fbf;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    a{
color: #fff;
text-transform: uppercase;
letter-spacing: 1px;
    }
    }
</style>
