<!--
 * @Description: 支付成功
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:29:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-20 15:22:04
 -->
<template>
  <div class="shop_cart_pay">
    <div class="down_orders" @click="downOrdersHandle">支付成功</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "paySuccess",
  data() {
    return {};
  },

  computed: {},

  methods: {
    ...mapMutations(["shopCartStepHandle"])
  },

  created() {
    this.shopCartStepHandle(4);
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.shop_cart_pay {
  height: 409px;
}
</style>
