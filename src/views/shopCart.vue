<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 11:02:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-12 13:34:18
 -->
<template>
  <div class="layout">
    <div class="box_width column_center">
      <div class="article_steps bg"></div>
      <div class="shop_cart_text row_between_center">
        <div class="shop_cart_text_bottom">购物车</div>
        <div class="row_between_center">
          <span>已选 &nbsp;{{2}}&nbsp; 件商品</span>
          <div class="settlement">结算</div>
        </div>
      </div>
      <div class="list_item_box">
        <div>
          <span>全选按钮</span>
        </div>
        <div>商品信息</div>
        <div>价格</div>
        <div>数量</div>
        <div>金额</div>
        <div>操作</div>
      </div>
      <div>
        <div class="box_width column_start_start">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            size="medium"
          >店铺名称</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <div class="list_item_box">
              <el-checkbox></el-checkbox>
              <div class="product_info row_between_center">
                <img src="~assets/Qr_code.png" alt />
                <div class="column_between_center">
                  <div class="product_info_name">12121</div>
                  <div class="product_info_spec">规格型号: {{"23412撒旦发射点发射点发"}}</div>
                </div>
              </div>
              <div class="product_info_price">¥ {{233232}}</div>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
              <div class="product_info_total">¥ {{"23243242"}}</div>
              <div>
                <el-button type="primary" style="width:100px">删除</el-button>
              </div>
            </div>
          </el-checkbox-group>
        </div>
      </div>
      <div class="row_between_center box_width operate">
        <div class="delete_product">删除已选商品</div>
        <div>
          已选
          <span style="font-size:18px; color: green;">&nbsp;{{2}} &nbsp;</span>件商品&nbsp;&nbsp; 总计:&nbsp;
          <span style="font-size:28px; color: red;">¥&nbsp;{{123}}</span>
        </div>
        <div class="confirm_order">确认订单</div>
      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "shoppingCart",
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      num: 0
    };
  },

  computed: {},

  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.delete_product {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #1c7cce;
  border-radius: 10px;
  margin-left: 50px;
  cursor: pointer;
}
.confirm_order {
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
.article_steps {
  margin: 24px;
  width: 826px;
  height: 45px;
  background: url("~assets/con-4.png");
}
.shop_cart_text {
  width: 100%;
  height: 40px;
}
.shop_cart_text_bottom {
  font-size: 24px;
  font-weight: 600;
}
.settlement {
  width: 80px;
  height: 40px;
  color: #ffffff;
  background: #1c7cce;
  line-height: 40px;
  border-radius: 5px;
  margin-left: 24px;
}
.settlement:hover {
  cursor: pointer;
}
.list_item_box {
  display: grid;
  grid-template-columns: 50px 415px 210px 152px 147px 224px;
  align-items: center;
  min-height: 50px;
  border: 1px solid #e6e6e6;
  margin-top: 24px;
}
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid red;
}
/* 商品信息 */
.product_info {
  width: 100%;
  height: 150px;
}
.product_info > img {
  width: 150px;
  height: 150px;
}
.product_info_spec,
.product_info_name {
  width: 260px;
  height: 70px;
  line-height: 70px;
}
.product_info_spec {
  font-size: 14px;
  color: #999999;
}
.product_info_name {
  font-size: 16px;
  color: #333333;
}
.product_info_price,
.product_info_total {
  width: 100%;
  height: 150px;
  line-height: 150px;
  font-size: 20px;
  color: #e40838;
}
.operate {
  height: 70px;
  background: #ebebeb;
  margin-top: 24px;
}
</style>
