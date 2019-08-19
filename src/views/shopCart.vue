<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 11:02:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-16 11:29:25
 -->
<template>
  <div class="layout">
    <div class="box_width column_center">
      <div class="article_steps bg"></div>
      <div class="shop_cart_text row_between_center">
        <div class="shop_cart_text_bottom">购物车</div>
        <div class="row_between_center">
          <span>已选 &nbsp;{{2}}&nbsp; 件商品</span>
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
        <div
          class="box_width column_start_start"
          v-for="(item, index) in shoppingCartEnterpriseVOS"
          :key="index"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="item.checkAll"
            @change="handleCheckAllChange"
            size="medium"
          >{{item.enterpriseName}}</el-checkbox>
          <el-checkbox-group
            v-model="checkedOrder"
            @change="handleCheckedCitiesChange"
            v-for="(each,idx) in item.shoppingCartVOList"
            :key="idx"
          >
            <div class="list_item_box">
              <el-checkbox :checked="each.check"></el-checkbox>
              <div class="product_info row_between_center">
                <img :src="img + each.mainImagePath" alt />
                <div class="column_between_center">
                  <div class="product_info_name">{{each.goodsName}}</div>
                  <div class="product_info_spec">规格型号: {{each.typeModel}}</div>
                </div>
              </div>
              <div class="product_info_price">¥ {{each.unitPrice}}</div>
              <el-input-number
                v-model="each.buyCount"
                @change="inputNumberHandle(each,index,idx)"
                :min="1"
                :max="99999"
                size="small"
              ></el-input-number>
              <div class="product_info_total">¥ {{each.total}}</div>
              <div>
                <el-button
                  type="primary"
                  style="width:100px"
                  @click="deleteOrderHandle(item,index,each,idx)"
                >删除</el-button>
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
        <div class="confirm_order" @click="confirmAnOrder()">确认订单</div>
      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "shoppingCart",
  data() {
    return {
      checkAll: false,
      checkedOrder: [],
      cities: cityOptions,
      isIndeterminate: true,
      num: 0
    };
  },

  computed: mapState({
    shoppingCartEnterpriseVOS: state =>
      state.shopCartData.shoppingCartEnterpriseVOS,
    img: state => state.img
  }),

  methods: {
    handleCheckAllChange(val) {
      console.log(val);
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleChange(val, item) {
      console.log(val, item);
    },
    deleteOrderHandle(item, index, each, idx) {
      this.$confirm("确定删除该订单吗?", "确定删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.shopCartdeleteOrderHandle({
            index: index,
            idx: idx
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    confirmAnOrder() {
      this.$router.push();
    },
    // 单条订单加减事件
    inputNumberHandle(each, index, idx) {
      console.log(each, index, idx);
    },
    ...mapActions(["shopCartHandle"]),
    ...mapMutations(["shopCartdeleteOrderHandle"])
  },

  created() {
    this.shopCartHandle();
  },

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
