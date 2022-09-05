<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppSection",
  data() {
    return {
      blogs: this.blogsList,
    };
  },
  methods: {
    ...mapActions(["getBlogs", " searchBlogs"]),
  },
  computed: mapGetters(["blogsList"]),
  created() {
    this.getBlogs();
    // console.log(this.blogsList);
  },
};
</script>
