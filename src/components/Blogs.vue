<template>
  <div class="blogs-container">
    <Navbar />

    <h1>Our Blogs</h1>
    <form class="search-form" @submit.prevent="filteredList">
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-if="page != 1"
            @click="page--"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(page - 1, page + 2)"
            :key="pageNumber"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
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
      allBlogs: [],
      page: 1,
      perPage: 4,
      pages: [],
    };
  },

  methods: {
    ...mapActions(["getBlogs", " searchBlogs"]),
    singleBlog(blog_id) {
      router.push({ name: "blog", params: { id: blog_id } });
    },
    filteredList() {
      // this.allBlogs = this.search ? this.searchBlogs : this.blogsList;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.allBlogs.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(allBlogs) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return allBlogs.slice(from, to);
    },
  },
  components: {
    Navbar,
  },
  watch: {
    // this.allBlogs = this.blogsList

    blogsList() {
      this.allBlogs = this.blogsList;

      this.setPages();
    },
  },
  computed: {
    ...mapGetters(["blogsList"]),
    displayedBlogs() {
      return this.paginate(this.allBlogs);
    },
    searchBlogs() {
      if (this.search) {
        return this.displayedBlogs.filter((bl) =>
          bl.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.displayedBlogs;
      }
    },
  },
  mounted() {
    this.getBlogs();
    // console.log(this.blogsList);
    console.log("anything!.");
  },

  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
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

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px auto;
  button {
    padding: 10px 20px;
    margin: 30px 3px;
    background-color: #0868a5;
    color: #fff;
    border: none;
    border-radius: 2px;
    letter-spacing: 1px;

    .page-link {
      display: inline-block;
      font-size: 20px;
      color: #29b3ed;
      font-weight: 500;
    }
  }
}
</style>
