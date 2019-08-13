<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 14:47:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-13 13:26:20
 -->
<!-- 导航栏 -->
<template>
  <div class="navBar">
    <div class="nav_bar_items">
      <router-link
        class="nav_bar_link"
        v-for="(item, index) in navBar"
        :key="index"
        :to="item.to"
        :style="`color:${item.color}`"
      >{{ item.name }}</router-link>
    </div>
    <div class="phone"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navBar",
  data() {
    return {};
  },
  computed: mapState(["navBar"]),

  created() {},

  mounted() {},

  methods: {},

  components: {}
};
</script>
<style>
.navBar {
  align-self: flex-end;
  margin-top: 30px;
  width: 968px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.phone {
  width: 130px;
  height: 20px;
  background: url("~assets/mall_tel.png") no-repeat;
  background-size: 100%;
  background-position: center center;
}
.home_page {
  color: #1c7cce;
}
.item,
.home_page:hover {
  cursor: pointer;
}
.nav_bar_items {
  width: 825px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav_bar_link {
  margin-right: 65px;
}
</style>
