<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-10 11:25:23
 -->
<!-- 首页 -->
<template>
  <div class="homePage">
    <headerCom></headerCom>
    <router-view></router-view>
    <div class="footer bg"></div>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "homePage",
  data() {
    return {};
  },

  created() {
    this.setNavBarHandle();
  },
  updated() {
    this.setNavBarHandle();
  },
  mounted() {},
  components: {
    headerCom
  },

  computed: mapState({
    navBar: state => state.navBar
  }),

  methods: {
    ...mapMutations(["navBarHandle"]),
    /**
     * 设置 导航栏
     */
    setNavBarHandle() {
      this.navBarHandle([
        {
          to: "/",
          name: "首页",
          color: ""
        },
        {
          to: {
            path: "/goodsList",
            query: {
              firstFrontClassId: "1"
            }
          },
          name: "自营商城",
          color: ""
        }
        // {
        //   to: {
        //     path: "/goodsList",
        //     query: {
        //       id: "2"
        //     }
        //   },
        //   name: "梁场物料",
        //   color: ""
        // },
        // {
        //   to: {
        //     path: "/goodsList",
        //     query: {
        //       id: "3"
        //     }
        //   },
        //   name: "货车配件",
        //   color: ""
        // },
        // {
        //   to: "/brand",
        //   name: "企业品牌",
        //   color: ""
        // }
      ]);
    }
  }
};
</script>
<style>
.homePage {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
}
.footer {
  margin-top: 50px;
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
}
</style>
