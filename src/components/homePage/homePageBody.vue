<!--
 * @Description: 首页 主体
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-01 20:39:52
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-05 09:42:41
 -->
<template>
  <div class="column_center">
    <banner class="classify_banner_box"></banner>
    <div class="hot_product"></div>
    <floor></floor>
    <div class="slogan"></div>
  </div>
</template>

<script>
import banner from "#/homePage/banner";
import floor from "#/homePage/floor";

export default {
  name: "homePageBody",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    banner,
    floor
  }
};
</script>

<style scoped>
.classify_banner_box {
  margin-top: 10px;
}
.hot_product {
  width: 1200px;
  height: 114px;
  color: aliceblue;
  background: url("~assets/tit-HOT.png") no-repeat;
  background-size: 100%;
  background-position: center center;
}
.slogan {
  width: 1200px;
  height: 120px;
  background: url("~assets/mall_ad2.png") no-repeat;
  background-size: 100%;
  background-position: center center;
  margin-bottom: 24px;
}
</style>
