import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import LoginPage from "../components/Login.vue";
import SignupPage from "../components/SignUp.vue";
import CreateBlog from "../components/CreateBlog.vue";
import Blogs from "../components/Blogs.vue";
import SingleBlog from "../components/Blog.vue";
import UpdateBlog from "../components/UpdateBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/createblog",
    name: "createblog",
    component: CreateBlog,
  },
  {
    path: "/updateblog/:id",
    name: "updateblog",
    component:UpdateBlog,
  },

  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
  },
  {
    path: "/blogs/:id",
    name: "blog",
    component: SingleBlog,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
