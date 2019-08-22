<!--
 * @Description: 商品详情
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-01 17:34:57
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-20 09:37:00
 -->
<template>
  <div class="layout">
    <productInfo></productInfo>
    <specifications></specifications>
    <productIntro></productIntro>
  </div>
</template>

<script>
import productInfo from "#/productDetails/productInfo.vue";
import specifications from "#/productDetails/table.vue";
import productIntro from "#/productDetails/productIntro";
import { mapActions } from "vuex";
export default {
  name: "productDetails",
  data() {
    return {};
  },

  computed: {},

  methods: {
    ...mapActions(["productGetProduct"]),
    productDetailsHandle() {
      this.productGetProduct({
        productId: this.$route.query.id
      });
    }
  },

  created() {
    this.productDetailsHandle();
  },

  mounted() {},

  components: {
    productInfo,
    specifications,
    productIntro
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
