<!--
 * @Description: 我的购物车
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-20 09:58:35
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-21 15:57:37
 -->
<template>
  <div class="shop_cart_my_cart">
    <div class="shop_cart_text row_between_center">
      <div class="shop_cart_text_bottom">购物车</div>
      <div class="row_between_center">
        <span>已选 &nbsp;{{ checkedCount }}&nbsp; 件商品</span>
      </div>
    </div>
    <div class="list_item_box">
      <div>
        <span>选择</span>
        <!-- <el-checkbox>全选</el-checkbox> -->
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
          class="check_all"
          :indeterminate="isIndeterminate"
          v-model="item.checkAll"
          @change="handleCheckAllChange(index)"
          :label="item.enterpriseName"
        ></el-checkbox>
        <div class="list_item_box" v-for="(each, idx) in item.shoppingCartVOList" :key="idx">
          <el-checkbox
            :key="idx"
            v-model="each.check"
            @change="checkboxHandle(item, index, each, idx)"
          ></el-checkbox>
          <div class="product_info row_between_center">
            <img :src="img + each.mainImagePath" alt />
            <div class="column_between_center">
              <div class="product_info_name uts">{{ each.goodsName }}</div>
              <div class="product_info_spec uts">规格型号: {{ each.typeModel }}</div>
            </div>
          </div>
          <div class="product_info_price">¥ {{ each.unitPrice }}</div>
          <!-- @change="inputNumberHandle(each, index, idx)" -->
          <el-input-number v-model="each.buyCount" :min="1" :max="99999" size="small"></el-input-number>
          <div class="product_info_total">¥ {{ (each.buyCount * each.unitPrice).toFixed(2) }}</div>
          <div>
            <el-button
              type="primary"
              style="width:100px"
              @click="deleteOrderHandle(item, index, each, idx)"
            >删除</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row_between_center box_width operate">
      <div class="delete_product" @click="deletecheckedOrderHandle">删除已选商品</div>
      <div>
        已选
        <span style="font-size:18px; color: green;">&nbsp;{{ checkedCount }} &nbsp;</span>件商品&nbsp;&nbsp; 总计:&nbsp;
        <span style="font-size:28px; color: red;">¥&nbsp;{{ amount }}</span> 元
      </div>
      <div class="confirm_order" @click="confirmAnOrder()">确认订单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      checkedCount: 0
    };
  },

  computed: mapState({
    shoppingCartEnterpriseVOS: state =>
      state.shopCartData.shoppingCartEnterpriseVOS,
    img: state => state.img,
    shopCartStep: state => state.shopCartStep,
    amount: state => {
      let result = 0;
      if ("shoppingCartEnterpriseVOS" in state.shopCartData) {
        state.shopCartData.shoppingCartEnterpriseVOS.forEach(element => {
          element.shoppingCartVOList.forEach(item => {
            item.total = item.buyCount * item.unitPrice;
            if (item.check) {
              result += parseFloat(item.total);
            }
          });
        });
        return result.toFixed(2);
      }
    }
  }),

  methods: {
    /* 购物车全选 */
    handleCheckAllChange(index) {
      this.isIndeterminate = false;
      this.shoppingCartEnterpriseVOS[index].shoppingCartVOList.forEach(item => {
        item.check = this.shoppingCartEnterpriseVOS[index].checkAll;
      });
    },
    /* 删除订单 */
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
    /* 确认订单 */
    confirmAnOrder() {
      this.$router.push({
        name: "submitOrders",
        params: {}
      });
      console.log(this.shoppingCartEnterpriseVOS);
    },
    // 单条订单加减事件 (暂未使用)
    inputNumberHandle(each, index, idx) {
      console.log(each, index, idx);
    },
    /* 单条订单选择事件 */
    checkboxHandle(item, index, each, idx) {
      this.shoppingCartEnterpriseVOS.forEach(element => {
        element.shoppingCartVOList.forEach(item => {
          item.check ? this.checkedCount++ : this.checkedCount--;
          item.check && (this.isIndeterminate = true);
          if (this.checkedCount === element.shoppingCartVOList.length) {
            element.checkAll = true;
            this.isIndeterminate = false;
          } else {
            element.checkAll = false;
            this.isIndeterminate = true;
          }
        });
      });
    },
    /* 删除选择订单 */
    deletecheckedOrderHandle() {
      this.shopCartDeleteCheckedHandle();
    },
    ...mapActions(["shopCartHandle"]),
    ...mapMutations([
      "shopCartdeleteOrderHandle",
      "shopCartStepHandle",
      "shopCartDeleteCheckedHandle" // 暂未使用
    ])
  },

  created() {
    this.shopCartHandle();
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.check_all {
  margin: 12px 24px;
}
.shop_cart_my_cart {
  min-height: 409px;
}
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
  margin: 12px 0px;
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
