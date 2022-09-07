import axios from "axios";
const state = {
  blogs: [],
  blog: {},
  error: "",
};
const getters = {
  blogsList: (state) => state.blogs,
  blog: (state) => state.blog,
};
const actions = {
  async getBlogs({ commit }) {
    const response = await axios.get("http://localhost:3000/blogs");
    commit("setBlogs", response.data);
  },
  async searchBlogs({ commit }, title) {
    const response = await axios.get("http://localhost:3000/blogs", title);
    commit("searchBlogs", response.data);
  },
  async getBlog({ commit }, id) {
    const response = await axios.get(`http://localhost:3000/blogs/${id}`);
    commit("setBlog", response.data);
  },
  async addBlog({ commit }, blog) {
    const response = await axios.post("http://localhost:3000/blogs", blog);
    commit("addBlog", response.data);
  },
  async updateBlog({ commit }, payload) {
    // console.log(payload);
    await axios
      .put(`http://localhost:3000/blogs/${payload.id}`, payload.form)
      .then((response) => {
        console.log(response);
        commit("updateBlog", response.data, payload.id, response.data.message);
        // alert("updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async deleteBlog({ commit }, id) {
    await axios.delete(`http://localhost:3000/blogs/${id}`);
    commit("deleteBlog", id);
  },
};
const mutations = {
  setBlogs: (state, blogs) => {
    // console.log(blogs);
    state.blogs = blogs;
    console.log(state.blogs);
  },
  setBlog: (state, blog) => (state.blog = blog),
  addBlog: (state, blog) => state.blogs.unshift(blog),
  updateBlog: (state, blog, id, message) => {
    //FILTER BY ID  THEN
    state.blogs.filter((blog) => blog.id !== id);
    state.blogs.unshift(blog);
    state.error = message;
  },
  searchBlogs: (state, blogs) => (state.blogs = blogs),
  deleteBlog: (state, id) => {
    let blgs = state.blogs.filter((blog) => blog.id !== id);
    state.blogs = blgs;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
