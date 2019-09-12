<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-07 10:01:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-28 10:39:06
 -->
<!-- 个人中心 -->
<template>
  <div style="background:#fafafa">
    <headerCom></headerCom>
    <div class="personal_box">
      <navMenu></navMenu>
      <div class="personal_title">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer bg"></div>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
import navMenu from "#/personalCenter/navMenu.vue";
export default {
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    headerCom,
    navMenu
  }
};
</script>

<style scoped>
.personal_box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  margin: 24px auto;
}
.personal_title {
  width: 1000px;
  margin-left: 20px;
}
.footer {
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
  margin-top: 0px;
}
</style>
