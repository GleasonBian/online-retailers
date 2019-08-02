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
      component: () => import("views/homePage.vue"),
      children: [
        {
          path: "/",
          name: "homePage",
          component: () => import("#/homePage/homePageBody.vue")
        },
        {
          path: "/goodsList",
          name: "productList",
          component: () => import("views/productList.vue")
        },
        {
          path: "/goodsDetails",
          name: "productDetails",
          component: () => import("views/productDetails.vue")
        }
      ]
    }
  ]
});
