<!--
 * @Description: 支付失败
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:29:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-29 13:53:01
 -->
<template>
  <div class="shop_cart_pay box_width column_center">
    <div class="down_orders bg"></div>
    <div class="order_info">{{`您的订单 (订单编号: ${downOrders.orderNumber}) 支付失败!`}}</div>
    <div class="box_width button_box row_center">
      <router-link class="button_btn" to="{name:'homePage'}">继续采购</router-link>
    </div>
  </div>
</template>
     <script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "paySuccess",
  data() {
    return {
      downOrders: {}
    };
  },

  computed: {},

  methods: {},

  created() {
    let a = sessionStorage["downOrders"]
    a ? this.downOrders = JSON.parse(sessionStorage["downOrders"]) : this.downOrders.orderNumber="无支付订单"
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.shop_cart_pay {
  height: 377px;
  background: #ffffff;
}

.down_orders {
  width: 144px;
  height: 144px;
  background: url("~assets/zhifu-img.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
}
.order_info {
  margin-top: 49px;
  color: #1c7cce;
  font-size: 30px;
}
.button_box {
  margin-top: 49px;
}
.button_btn {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  margin-left: 50px;
  background: #1c7cce;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-right: 50px;
  cursor: pointer;
}
</style>
