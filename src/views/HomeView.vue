<template>
  <div class="home">
    <div class="wrapper">
    <Navbar />
  </div>
    <Home msg="Welcome to Your Blog App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';
import Navbar from "@/components/Navbar";

export default {
  name: 'HomeView',
  components: {
    Home,
    Navbar
}
}
</script>
