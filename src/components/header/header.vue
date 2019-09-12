<!--
 * @Description: 头部组件包含 快捷栏, 搜索栏
 * @Author: your name
 * @Date: 2019-08-05 13:09:31
 * @LastEditTime: 2019-09-05 15:26:00
 * @LastEditors: OBKoro1
 -->
<template>
  <div class="head_container">
    <div class="shortcu_bar">
      <shortcutBar></shortcutBar>
    </div>
    <div class="search_nav">
      <div class="search_nav_box">
        <searchBar class="search_bar"></searchBar>
        <navBar></navBar>
      </div>
    </div>
  </div>
</template>

<script>
import shortcutBar from "#/header/shortcutBar";
import searchBar from "#/header/searchBar";
import navBar from "#/header/navBar";
export default {
  name: "headercom",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    shortcutBar,
    searchBar,
    navBar
  }
};
</script>

<style scoped>
.head_container {
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
}

.search_nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: rgba(51, 51, 51, 0.2) 1px 1px 1px;
}
.search_nav_box {
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  align-items: center;
  padding-bottom: 15px;
}
.search_bar {
  width: 1200px;
}
.shortcu_bar {
  width: 100vw;
  box-shadow: 1px 1px 1px #3333;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
