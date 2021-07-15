import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/users/Show.vue";
import ExamplesIndex from "../views/vocab/ExamplesIndex.vue";
import ExamplesNew from "../views/vocab/ExamplesNew.vue";
import ExamplesShow from "../views/vocab/ExamplesShow.vue";
import WordsIndex from "../views/vocab/WordsIndex.vue";

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
    path: "/users/:id",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/examples",
    name: "examples-index",
    component: ExamplesIndex,
  },
  {
    path: "/examples/new",
    name: "examples-new",
    component: ExamplesNew,
  },
  {
    path: "/examples/:id",
    name: "examples-show",
    component: ExamplesShow,
  },
  {
    path: "/words",
    name: "words-index",
    component: WordsIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
});

export default router;
