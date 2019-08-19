<!-- 个人中心 -->
<template>
  <div>
    <headerCom></headerCom>
    <div class="personal_box">
      <navMenu></navMenu>
      <div class="personal_title">
        <router-view></router-view>
      </div>
    </div>
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
  justify-content: space-between;
  width: 1200px;
  margin: 10px auto;
}
.personal_title {
  width: 82%;
}
</style>
