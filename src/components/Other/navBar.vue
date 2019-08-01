<!-- 导航栏 -->
<template>
  <div class="navBar">
    <div class="home_page">首页</div>
    <div class="item">通讯设备</div>
    <div class="item">梁场物料</div>
    <div class="item">货车配件</div>
    <div class="item">解决方案</div>
    <div class="item">企业品牌</div>
    <div class="phone"></div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style>
.navBar {
  align-self: flex-end;
  margin-top: 30px;
  /* margin-bottom: 15px; */
  width: 968px;
  height: 20px;
  display: flex;
  justify-content: space-between;
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
</style>
