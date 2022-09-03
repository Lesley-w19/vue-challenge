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
        <button class="btn btn-color">Read blogs</button>
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
<style scoped>
h3 {
  margin: 0 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
