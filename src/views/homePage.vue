<!-- 首页 -->
<template>
  <div class="homePage">
    <headerCom>
      <navBar></navBar>
    </headerCom>
    <banner class="classify_banner_box"></banner>
    <div class="hot_product"></div>
    <floor></floor>
    <div class="slogan"></div>
  </div>
</template>

<script>
import headerCom from "#/homePage/header.vue";
import banner from "#/homePage/banner";
import floor from "#/homePage/floor";
import navBar from "#/other/navBar";
export default {
  name: "homePage",
  data() {
    return {};
  },

  created() {},
  mounted() {},
  components: {
    headerCom,
    navBar,
    banner,
    floor
  },

  computed: {},

  methods: {}
};
</script>
<style>
.slogan {
  width: 1200px;
  height: 120px;
  background: url("~assets/mall_ad2.png") no-repeat;
  background-size: 100%;
  background-position: center center;
  margin-bottom: 24px;
}
.homePage {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
}

.classify_banner_box {
  margin-top: 10px;
}
.hot_product {
  width: 1200px;
  height: 114px;
  color: aliceblue;
  background: url("~assets/tit-new.png") no-repeat;
  background-size: 100%;
  background-position: center center;
}
</style>
