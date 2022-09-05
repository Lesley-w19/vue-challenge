<template>
  <div class="form-container">
    <div class="form">
      <form class="register-form" @submit.prevent="onBlogSubmit">
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
            vi-model="form.published"
          />Publish</label
        >
        <p class="message">{{ message }}</p>
        <button type="submit" class="btn btn-sign">Create Blog</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CreateBlog",
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
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    onChecked() {
      const checked = 1;
      return (this.form.published = checked);
    },
    onBlogSubmit() {
      // console.log(this.form);
      this.addBlog(this.form);
      this.message = "Blog added...";
      setTimeout(() => {
        this.$router.push({ name: "blogs" });
      }, 2000);
    },
  },
};
</script>
<style scoped>
.message {
  color: green;
}
</style>
