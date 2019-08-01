<!-- 商品列表 -->
<template>
  <div class="column_between_center">
    <headercom></headercom>
    <div class="bread_crumbs">
      <span>首页</span> >
      <span style="color:#1c7cce">商品列表</span>
    </div>
    <classify></classify>
    <div class="product_list_filter"></div>
  </div>
</template>

<script>
import headercom from "#/homePage/header.vue";
import classify from "#/other/classify.vue";
export default {
  name: "goodsList",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    headercom,
    classify
  }
};
</script>

<style scoped>
.bread_crumbs {
  width: 1200px;
  text-align: left;
  font-size: 16px;
  margin: 24px;
}
.product_list_filter {
  height: 50px;
  width: 1200px;
  margin: 24px 0px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
</style>
