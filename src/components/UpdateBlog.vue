<template>
  <div class="form-container">
    <div class="form">
      <form class="register-form" @submit.prevent="onBlogUpdate">
        <input
          type="text"
          placeholder="Enter blog title"
          v-model="blog.title"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Enter blog image *url*"
          v-model="blog.image"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Enter blog author"
          v-model="blog.author"
          required
        />

        <textarea
          name="message"
          rows="10"
          placeholder="Enter blog description"
          v-model="blog.description"
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
        <!-- <p class="message">{{ message }}</p> -->
        <button type="submit" class="btn btn-update">Update Blog</button>
      </form>
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
      //   message: "",
      //   blog_id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["getBlog", "updateBlog"]),
    onChecked() {
      const checked = 1;
      return (this.form.published = checked);
    },

    onBlogUpdate() {
      // console.log(this.form)
      // this.updateBlog(this.form);
      console.log(this.form);
      // this.message = "Blog updated...";
      //     setTimeout(() => {
      //       this.$router.push({ name: "blogs" });
      //     }, 2000);
    },
  },
  computed: mapGetters(["blog"]),
  created() {
    const blog_id = this.$route.params.id;
    // console.log(blog_id);
    this.getBlog(blog_id);
    // this.form = {
    //   title: this.blog.title,
    //   description: this.blog.description,
    //   image: this.blog.image,
    //   author: this.blog.author,
    //   published: this.blog.published,
    // };
  },
};
</script>
<style scoped>
.message {
  color: green;
}
.btn-update {
  background-color: orange;
}
</style>
