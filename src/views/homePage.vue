<!-- 首页 -->
<template>
  <div class="homePage">
    <headerCom></headerCom>
    <router-view></router-view>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
export default {
  name: "homePage",
  data() {
    return {};
  },

  created() {},
  mounted() {},
  components: {
    headerCom
  },

  computed: {},

  methods: {}
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
</style>
