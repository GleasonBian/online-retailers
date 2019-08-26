<!--
 * @Description: 提交订单
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:25:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-23 23:23:43
 -->
<template>
  <div class="shop_cart_submit_order column_start_start box_width">
    <div class="column_start_start common box_width">
      <div class="text">选择收货地址</div>
      <div class="row_center box_width select_address_box">
        <div class="address_item_box address_border">
          <div class="default_address">设为默认地址</div>
          <div class="address_item">
            <div class="address_item_add">
              <span>地址:&nbsp;</span>
              <span>撒打发京东方拉萨大家发上的飞机啊上的飞机啊上的飞机啊手动阀</span>
            </div>
            <div class="address_item_add">
              <span>姓名:&nbsp;</span>
              <span>卞刘著</span>
            </div>
            <div class="address_item_add">
              <span>电话:&nbsp;</span>
              <span>13031131929</span>
            </div>
          </div>
          <div class="corner_mark bg"></div>
        </div>
      </div>
    </div>
    <div class="column_start_start common box_width">
      <div class="text">订单信息</div>
      <div class="column_start_start box_width">
        <div class="order_info_title">
          <div class="order_title_box row_between_center">
            <div class="order_store_name">店铺名称</div>
            <div class="order_concat_stroe">联系商家</div>
          </div>
          <div class="order_nav_bar row_start_center">
            <div>商品信息</div>
            <div>规格型号</div>
            <div>价格</div>
            <div>数量</div>
            <div>金额</div>
          </div>
        </div>
        <div class="order_info_body">
          <div class="order_info_item row_start_center box_width">
            <img src="~assets/Qr_code.png" class="order_info_item_img" />
            <div class="order_info_item_name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
            <div class="order_info_item_spec"></div>
            <div class="order_info_item_price"></div>
            <div class="order_info_item_count"></div>
            <div class="order_info_item_amount"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="column_start_start common box_width">
      <div class="text">订单信息</div>
    </div>
    <div class="column_start_start common box_width">
      <div class="text">订单信息</div>
    </div>
    <div>
      <div class="submit_order" @click="submitOrderHandle">提交订单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "submitOrders",
  data() {
    return {};
  },

  computed: {},

  methods: {
    submitOrderHandle() {
      this.$router.push({
        name: "downOrders",
        params: {}
      });
    },
    ...mapMutations(["shopCartStepHandle"])
  },

  created() {
    this.shopCartStepHandle(2);
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.submit_order {
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
.order_info_item {
  border: 1px solid red;
}
.order_info_item_img {
  width: 150px;
  height: 150px;
}
.order_info_item_name {
}
.shop_cart_submit_order {
  min-height: 409px;
}
.common > .text {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding: 12px 0px 24px 24px;
  border-bottom: 1px solid #e5e5e5;
  text-align: left;
}
.common {
  background: #ffffff;
  margin: 12px 0px;
}
.address_item_box {
  width: 240px;
  height: 214px;
  background: #fafafa;
  margin: 12px;
  position: relative;
}
.address_item {
  padding: 30px 20px 34px 20px;
}
.address_item_add {
  text-align: left;
  font-size: 16px;
  color: #999999;
}
.address_item_add span:first-child {
  color: #000000;
  font-size: 18px;
  font-weight: bold;
}
.address_item_add span:last-child {
  font-size: 16px;
  color: #999999;
  line-height: 2;
}
.corner_mark {
  background: url("~assets/for-icon.png");
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.default_address {
  position: absolute;
  top: 8px;
  right: 10px;
  color: #1c7cce;
  cursor: pointer;
}
.address_border {
  border-top: 2px solid #1c7cce;
}
.order_info_title {
  height: 90px;
  border: 1px solid #eaeaea;
  width: 100%;
  margin-top: 24px;
}

.order_title_box {
  background: hsla(212, 82%, 74%, 0.808);
  height: 40px;
}
.order_concat_stroe,
.order_store_name {
  width: 200px;
}
.order_store_name {
  font-size: 18px;
  font-weight: bold;
}
.order_nav_bar {
  width: 100%;
  height: 50px;
  background: red;
}
.order_nav_bar div {
  width: 100px;
  height: 100%;
  background: #1c7cce;
  line-height: 50px;
}
.order_nav_bar div:nth-child(1) {
  margin-left: 270px;
}
.order_info_body {
}
.order_concat_stroe {
}
.select_address_box {
}
</style>
