<template>
  <div class="upform">
    <router-link to="/blogs" class="back"
      ><h3>&larr; Back to blogs</h3></router-link
    >
    <div class="form-container">
      <div class="form">
        <form class="register-form" @submit.prevent="onBlogUpdate">
          <input
            type="text"
            placeholder="Enter blog title"
            v-model="form.title"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Enter blog image *url*"
            v-model="form.image"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Enter blog author"
            v-model="form.author"
            required
          />

          <textarea
            name="message"
            rows="10"
            placeholder="Enter blog description"
            v-model="form.description"
            required
          >
          </textarea>

          <label class="form-check">
            <input
              type="checkbox"
              class="form-check"
              @click="onChecked()"
              v-model="blog.published"
            />Publish</label
          >
          <p class="message">{{ message }}</p>
          <button type="submit" class="btn btn-update">Update Blog</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UpdateBlog",
  data() {
    return {
      form: {
        title: "",
        description: "",
        image: "",
        author: "",
        published: 0,
      },
      message: "",
      blog_id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["getBlog", "updateBlog"]),
    onChecked() {
      const checked = 1;
      return (this.form.published = checked);
    },

    onBlogUpdate() {
      const blog_data = {
        id: this.blog_id,
        form: this.form,
      };
      this.updateBlog(blog_data);
      // console.log(this.form);
        this.message = "Blog updated successfully...";
        setTimeout(() => {
          this.$router.push({ name: "blogs" });
        }, 2000);
    },
  },
  computed: mapGetters(["blog"]),
  created() {
    const blog_id = this.$route.params.id;

    this.getBlog(blog_id);
    this.form = this.blog;
  },
};
</script>
<style scoped>
    .upform{
        padding: 20px;
    }
.message {
  color: green;
  margin: 10px auto;
}
.btn-update {
  background-color: orange;
}
</style>
