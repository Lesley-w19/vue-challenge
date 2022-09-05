<template>
  <div class="blogs-container">
    <Navbar />

    <h1>Our Blogs</h1>
    <form class="search-form" @submit.prevent="filteredList()">
      <input
        type="text"
        name="search"
        placeholder="Search by title"
        v-model="search"
      />

      <button type="submit" class="btn btn-sign">Search</button>
    </form>

    <div class="band">
      <div v-for="blog in searchBlogs" :key="blog.id" :img="blog.image">
        <div class="item-2">
          <a class="card" @click="singleBlog(blog.id)">
            <img class="thumb" :src="blog.image" alt="blogpic" />
            <article>
              <h1>{{ blog.title }}</h1>
              <p>{{ blog.description.slice(0, 80) }}...</p>
              <span>{{ blog.author }}</span>
            </article>
          </a>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
import router from "@/router";

export default {
  name: "BlogCards",
  data() {
    return {
      search: "",
      // blog_query: this.searchByTitle,
      isBlogs: true,
      searchBlogs: [],
    };
  },

  methods: {
    ...mapActions(["getBlogs", " searchBlogs"]),
    singleBlog(blog_id) {
      router.push({ name: "blog", params: { id: blog_id } });
    },
    // searchResult() {
    //   const title = this.$route.query;
    //   console.log(title);
    //   // this.searchBlogs(title);
    //   // return this.blogsList;
    // },
    // filteredArray() {
    //   const compare = (a, b) => {
    //     if (a.name < b.name) return -1;
    //     if (a.name > b.name) return 1;
    //     return 0;
    //   };

    //   return this.searchBlogs
    //     .filter((blg) => {
    //       return blg.title.toLowerCase().includes(this.search.toLowerCase());
    //     })
    //     .sort(compare);
    // },
    filteredList() {
      return this.searchBlogs.filter(bl => {
        return bl.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    Navbar,
  },
  computed: mapGetters(["blogsList"]),
  created() {
    this.getBlogs();
    this.searchBlogs = this.blogsList
    // console.log(this.blogsList);
  },
};
</script>

<style scoped lang="scss">
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px auto;
  input {
    padding: 10px 30px;
    width: 60%;
    border: none;
    border-radius: 10px;
    margin-right: 20px;
  }

  button {
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    margin: 1px 20px 0 0;
    cursor: pointer;

    background-color: #0868a5;
  }
}
</style>
