<!-- 商品详情 -->
<template>
  <div class="layout">
    <productInfo></productInfo>
  </div>
</template>

<script>
import productInfo from "#/productDetails/productInfo.vue";
export default {
  name: "productDetails",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    productInfo
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
