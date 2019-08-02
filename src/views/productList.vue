<!-- 商品列表 -->
<template>
  <div class="column_between_center">
    <div class="bread_crumbs">
      <span>首页</span> >
      <span style="color:#1c7cce">商品列表</span>
    </div>
    <classify></classify>
    <brandSearch></brandSearch>
    <productList></productList>
  </div>
</template>

<script>
import classify from "#/productList/classify.vue";
import brandSearch from "#/productList/brandSearch.vue";
import productList from "#//productList/productList.vue";
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
    classify,
    brandSearch,
    productList
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
</style>
