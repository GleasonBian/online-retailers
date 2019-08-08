<!-- 商品详情 -->
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
