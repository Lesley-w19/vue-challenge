<template>
  <div class="blogs-container">
    <router-link to="/blogs"><h3>&larr; Back to blogs</h3></router-link>

    <div class="card">
      <img :src="blog.image" class="card__image" alt="brown couch" />
      <div class="card__content">
        <time datetime="2021-03-30" class="card__date">{{
          blog.created_at
        }}</time>
        <h2 class="card__title">{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <h5>by {{ blog.author }}</h5>
        <div>
          <p class="message">{{ message }}</p>
        </div>
        <div class="btns">
          <button class="btn btn-u" @click="singleBlogUpdate(blog.id)">
            edit
          </button>
          <button class="btn btn-d" @click="delBlog(blog.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "@/router";
export default {
  name: "SingleBlog",
  data() {
    return {
      blog_id: this.$route.params.id,
      message: "",
    };
  },
  methods: {
    ...mapActions(["getBlog", "deleteBlog"]),
    singleBlogUpdate(blog_id) {
      router.push({ name: "updateblog", params: { id: blog_id } });
    },
    delBlog(id) {
      this.deleteBlog(id);
      this.message = `Blog is deleted successfully!!...`;

      setTimeout(() => {
        router.push({ name: "blogs" });
      }, 2000);
    },
  },
  computed: mapGetters(["blog"]),
  created() {
    this.getBlog(this.blog_id);
  },
};
</script>

<style scoped lang="scss">
.blogs-container {
  padding: 20px 40px;
  h3 {
    text-align: start;
    margin-left: 40px;
    color: #0868a5;
    text-decoration: underline;
  }
}
@mixin mediaBig {
  @media (min-width: 576px) {
    @content;
  }
}



.card {
  max-width: 960px;
  border-radius: 5px;
  margin: 20px auto;
  margin-top: 0;

  @include mediaBig {
    flex-direction: row;
    align-items: center;
    margin: 40px;
    padding: 32px;
  }

  .card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 18px;

    @include mediaBig {
      width: 45%;
      max-height: none;
      min-height: 400px;
      margin-bottom: 0;
    }
  }

  .card__content {
    padding: 10px 20px;

    @include mediaBig {
      width: 55%;
      padding-left: 40px;
    }
  }

  .card__date {
    display: block;
    text-transform: uppercase;
    color: var(--color-text);
    margin-bottom: 10px;

    @include mediaBig {
      margin-bottom: 20px;
      font-weight: lighter;
      letter-spacing: 1px;
      text-align: right;
    }
  }

  .card__title {
    margin: 30px auto;
    font-size: 30px;
    padding: 10px 20px;
    text-transform: uppercase;
  }

  p,
  h6 {
    margin: 10px 0;
    letter-spacing: 1px;
  }
  .btns {
    width: 100%;
    padding: 10px 0;
    button {
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      color: #fff;
      text-transform: uppercase;
      margin: 1px 10px 0 0;
      cursor: pointer;
    }
    .btn-d {
      background-color: #ff2600;
    }
    .btn-u {
      background-color: #0868a5;
    }
  }
}
.message {
  padding: 20px auto;
  margin: 10px auto;
  text-align: center;
  color: #0868a5;
}
</style>
