<!--
 * @Description: 下单成功
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:27:48
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-29 13:31:28
 -->
<template>
  <div class="shop_cart_down_order column_center box_width">
    <div class="order_tip_info">订单提交成功，请尽快付款</div>
    <div class="column_start_start">
      <div class="order_tip_order_info">订单编号：{{downOrders.orderNumber}}</div>
      <div class="order_tip_order_info">待支付金额：{{downOrders.orderAmount}} 元</div>
      <div class="order_tip_order_info">下单成功，尽快付款 !</div>
    </div>

    <div class="order_info">我们讲保留您的订单72小时，如72小时内仍没有付款，订单将自动取消</div>
    <div class="pay_box">
      <div class="pay_way_text">选择支付方式：</div>
      <div class="pay_way_select">
        <el-radio v-model="payWay" :label="1">支付宝</el-radio>
        <el-radio v-model="payWay" :label="0">货到付款</el-radio>
      </div>
    </div>
    <div class="pay_button row_end_center">
      <div style="font-size:16px; color: #333333; cursor: pointer;" @click="goBackOrder">返回订单</div>
      <div class="down_orders" @click="downOrdersHandle">{{payWay === 1 ? "立即付款" : "货到付款"}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { payDelivery } from "@/getData.js";
export default {
  name: "downOrders",
  data() {
    return {
      payWay: 1,
      downOrders: JSON.parse(sessionStorage["downOrders"])
    };
  },

  computed: {},

  methods: {
    downOrdersHandle() {
      if (this.payWay === 1) {
        window.location.href = `${process.env.VUE_APP_URL}alipay/pcPay?outTradeNo=${this.downOrders.id}`;
      } else {
        this.payDeliveryHandle({
          orderId: this.downOrders.id
        });
      }
    },
    goBackOrder() {
      // 订单
      this.$router.replace('/myOrder');
    },
    async payDeliveryHandle(param) {
      const res = await payDelivery(param);
      this.$message.success(res.message);
      this.$router.push("/paySuccess");
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.pay_button {
  width: 840px;
}
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
  background: #ffffff;
  padding: 20px 0px;
}
/* 16px */
.order_tip_info {
  margin-bottom: 48px;
  color: #1c7cce;
  font-size: 36px;
}
.order_tip_order_info {
  margin-bottom: 14px;
  color: #333333;
  font-size: 18px;
}
.order_info {
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
}
.pay_box {
  width: 840px;
  height: 112px;
  border: 1px solid #e6e6e6;
  margin-top: 24px;
  margin-bottom: 48px;
}
.pay_way_select,
.pay_way_text {
  width: 100%;

  text-align: left;
  padding-left: 24px;
}
.pay_way_text {
  line-height: 50px;
  height: 50px;
  border-bottom: 1px solid #e6e6e6;
}
.pay_way_select {
  height: 60px;
  line-height: 60px;
}
</style>
