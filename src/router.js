import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("views/Login.vue")
    },
    {
      path: "/phoneLogin",
      name: "phoneLogin",
      component: () => import("#/login&register/phoneLogin.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("#/login&register/register.vue")
    },
    {
      path: "/",
      name: "HomePage",
      component: () => import("views/homePage.vue")
    },
    {
      path: "/goodsList",
      name: "goodsList",
      component: () => import("views/productList.vue")
    }
  ]
});
