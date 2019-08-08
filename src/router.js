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
      path: "/findPassword",
      name: "findPassword",
      component: () => import("#/login&register/findPassword.vue")
    },
    {
      path: "/storeJoin",
      name: "storeJoin",
      component: () => import("#/store/storeJoin.vue")
    },
    {
      path: "/personalCenter",
      name: "personalCenter",
      component: () => import("#/personalCenter/personalCenter.vue"),
      children: [
        {
          path: "/personInfo",
          name: "personInfo",
          component: () => import("#/personalCenter/person/personInfo.vue")
        },
        {
          path: "/accountSecurity",
          name: "accountSecurity",
          component: () => import("#/personalCenter/person/accountSecurity.vue")
        },
        {
          path: "/receiverAddress",
          name: "receiverAddress",
          component: () => import("#/personalCenter/person/receiverAddress.vue")
        },
        {
          path: "/invoiceManagement",
          name: "invoiceManagement",
          component: () =>
            import("#/personalCenter/person/invoiceManagement.vue")
        },
        {
          path: "/myMessage",
          name: "myMessage",
          component: () => import("#/personalCenter/person/myMessage.vue")
        },
        {
          path: "/myOrder",
          name: "myOrder",
          component: () => import("#/personalCenter/order/myOrder.vue")
        },
        {
          path: "/supplyCertificate",
          name: "supplyCertificate",
          component: () =>
            import("#/personalCenter/order/supplyCertificate.vue")
        },
        {
          path: "/afterSalesRecord",
          name: "afterSalesRecord",
          component: () => import("#/personalCenter/order/afterSalesRecord.vue")
        }
      ]
    },

    {
      path: "/brand",
      name: "brand",
      component: () => import("#/store/brand.vue")
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
          name: "protductDetails",
          component: () => import("views/productDetails.vue")
        },
        {
          path: "/storeList",
          name: "storeList",
          component: () => import("views/storeList.vue")
        },
        {
          path: "/storeIndex",
          name: "storeIndex",
          component: () => import("views/storeIndex.vue")
        },
        {
          path: "/storeProductList",
          name: "storeProductList",
          component: () => import("views/storeProductList.vue")
        },
        {
          path: "/shoppingCart",
          name: "shopCart",
          component: () => import("views/shopCart.vue")
        }
      ]
    }
  ]
});
