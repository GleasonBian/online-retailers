<!--
 * @Description: 下单成功
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:27:48
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-20 15:23:51
 -->
<template>
  <div class="shop_cart_down_order">
    <div class="down_orders" @click="downOrdersHandle">下单成功</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "downOrders",
  data() {
    return {};
  },

  computed: {},

  methods: {
    downOrdersHandle() {
      this.$router.push({
        name: "paySuccess",
        params: {}
      });
    },
    ...mapMutations(["shopCartStepHandle"])
  },

  created() {
    this.shopCartStepHandle(3);
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.down_orders {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  margin-left: 50px;
  background: #1c7cce;
  font-size: 20px;
  font-weight: bold;
  color: #e6e6e6;
  margin-right: 50px;
  cursor: pointer;
}
.shop_cart_down_order {
  min-height: 409px;
}
</style>
