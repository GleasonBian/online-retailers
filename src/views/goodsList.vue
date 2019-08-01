<!-- 商品列表 -->
<template>
  <div class="column_between_center">
    <headercom></headercom>
    <div class="bread_crumbs">
      <span>首页</span> >
      <span style="color:#1c7cce">商品列表</span>
    </div>
    <classify></classify>
    <brandSearch></brandSearch>
  </div>
</template>

<script>
import headercom from "#/homePage/header.vue";
import classify from "#/other/classify.vue";
import brandSearch from "#/other/brandSearch.vue";
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
    classify,
    brandSearch
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
