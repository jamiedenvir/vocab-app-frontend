import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ExamplesIndex from "../views/examples/Index.vue";
import ExamplesNew from "../views/examples/New.vue";
import ExamplesShow from "../views/examples/Show.vue";
import WordsIndex from "../views/words/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/views/index",
    name: "examples-index",
    component: ExamplesIndex,
  },
  {
    path: "/views/examples/new",
    name: "examples-new",
    component: ExamplesNew,
  },
  {
    path: "/views/examples/show",
    name: "examples-show",
    component: ExamplesShow,
  },
  {
    path: "/views/words/index",
    name: "words-index",
    component: WordsIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
