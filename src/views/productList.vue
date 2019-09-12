<!--
 * @Description: 商品列表
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-08 19:14:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 14:51:58
 -->
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
import productList from "#/productList/productList.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "goodsList",
  data() {
    return {};
  },

  computed: mapState(["productParams"]),

  methods: {},

  created() {
    this.productParams.frontClassId = this.$route.query.frontClassId;
    this.productParams.firstFrontClassId = this.$route.query.firstFrontClassId;
    this.productParams.secondFrontClassId = this.$route.query.secondFrontClassId;
    this.$store.dispatch("productListData");
  },
  mounted() {
    this.$parent.$children[0].$children[2].statement = true;
  },
  updated() {},

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
