<!--  -->
<template>
  <div class="layout">
    <div class="product_spec box_width">
      <table class="product_table box_width">
        <thead class="product_thead">
          <td>品牌</td>
          <td>规格型号</td>
          <td>单位</td>
          <td>价格</td>
          <td>价格购买数量</td>
          <td>库存</td>
        </thead>
        <tbody>
          <tr v-for="(item,index) in goodsList">
            <td>{{item.brandName}}</td>
            <td>{{item.typeModel}}</td>
            <td>{{item.unit}}</td>
            <td>{{item.goodsPrice}}</td>
            <td>
              <el-input-number
                v-model="item.buyCount"
                :min="0"
                :max="100"
                :step="2"
                step-strictly
                size="small"
                @change="handleChange(item)"
              ></el-input-number>
            </td>
            <td>{{item.amount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row_end_center buy_info_box box_width">
      <div class="row_center product_selected_info">
        <span>已选</span>
        <span style="color:green">{{"3"}}</span>
        <span>种型号</span>
        <span style="color:green">10</span>
        <span>件商品</span>
        <span>总计:</span>
        <span style="color:red; font-size:24px">{{123.50}}</span>
        <span>元</span>
      </div>
      <div class="row_center">
        <div class="btn_Purchase prod_btn cursor">立即采购</div>
        <div class="add_shop_cart prod_btn cursor" @click="addShopCart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "productDetailsTable",
  data() {
    return {
      num: 1
    };
  },

  computed: {
    ...mapState({
      goodsList: state => state.productDetails.goodsList
    })
  },

  methods: {
    addShopCart() {
      console.log();
    },
    handleChange(val, item) {
      console.log(val, item);
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.product_spec {
  margin-top: 24px;
  border: 1px solid #e6e6e6;
}
.product_thead {
  background: #1c7cce;
  color: #ffffff;
}
td {
  width: 200px;
}
.product_thead td {
  height: 50px;
  text-align: center; /*设置水平居中*/
  vertical-align: middle; /*设置垂直居中*/
  border: 1px solid #ffffff;
}
tbody tr td {
  height: 40px;
  text-align: center; /*设置水平居中*/
  vertical-align: middle; /*设置垂直居中*/
  border-left: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
}
.product_selected_info {
  margin-right: 100px;
}
.prod_btn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  color: #ffffff;
  background: #1c7cce;
  margin-right: 40px;
}

.buy_info_box {
  height: 70px;
  background: #8dbde6;
  margin-bottom: 24px;
}
</style>
