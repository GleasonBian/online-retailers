<!--
 * @Description: 我的购物车
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-20 09:58:35
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-04 17:57:39
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
    <div v-if="isShow">
      <div
        class="box_width column_start_start"
        v-for="(item, index) in shoppingCartEnterpriseVOS"
        :key="index"
      >
        <el-checkbox
          class="check_all"
          :indeterminate="item.isIndeterminate"
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
              <div class="product_info_name uts">
                <router-link
                  :to="{
                  path: 'goodsDetails',
                  query: {
                    id: each.productId
                  }
                }"
                >{{ each.goodsName }}</router-link>
              </div>
              <div class="product_info_spec uts">规格型号: {{ each.typeModel }}</div>
            </div>
          </div>
          <div class="product_info_price">¥ {{ each.unitPrice }}</div>
          <!-- -->
          <el-input-number
            v-model="each.buyCount"
            :min="1"
            :max="99999"
            size="small"
            @change="inputNumberHandle(each, index, idx)"
          ></el-input-number>
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
    <div class="empty_shopping_cart box_width column_center" v-else>
      <div class="bg emty_img"></div>
      <div class="go_buy_button" @click="goBuyButton">去购物></div>
    </div>
    <div class="row_between_center box_width operate" v-show="isShow">
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
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import {
  shoppingCartUpdateCartCount,
  shoppingCartDeleteManyOrOne
} from "@/getData.js";
export default {
  name: "",
  data() {
    return {};
  },

  computed: {
    ...mapState({
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
        return result;
      },
      isShow: state => {
        if ("shoppingCartEnterpriseVOS" in state.shopCartData) {
          let len = state.shopCartData.shoppingCartEnterpriseVOS.length;
          if (len > 0) {
            return true;
          } else {
            return false;
          }
        }
      }
    }),
    ...mapGetters(["checkedCount"])
  },

  methods: {
    /**
     * 全选处理
     */
    handleCheckAllChange(index) {
      this.isIndeterminate = false;
      this.shoppingCartEnterpriseVOS[index].shoppingCartVOList.forEach(item => {
        item.check = this.shoppingCartEnterpriseVOS[index].checkAll;
      });
      this.shoppingCartEnterpriseVOS[
        index
      ].selectedArray = this.shoppingCartEnterpriseVOS[
        index
      ].shoppingCartVOList.filter(item => {
        // 筛选已选订单
        return item.check;
      });
    },
    /**
     * 单选处理
     */
    checkboxHandle(item, index, each, idx) {
      this.shoppingCartEnterpriseVOS.forEach(element => {
        element.selectedArray = element.shoppingCartVOList.filter(item => {
          // 筛选已选订单
          return item.check;
        });
        // 改变 全选按钮 状态
        element.selectedArray.length > 0
          ? (element.isIndeterminate = true)
          : (element.isIndeterminate = false);

        if (
          element.selectedArray.length === element.shoppingCartVOList.length
        ) {
          element.checkAll = true;
          element.isIndeterminate = false;
        } else {
          element.checkAll = false;
        }
      });
    },
    /**
     * 单条订单删除
     */
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
          this.deleteORder(each.id);
          this.showCartInfoHandle();
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
    /**
     * 已选订单删除
     */
    deletecheckedOrderHandle() {
      let ids = [];
      this.shoppingCartEnterpriseVOS.forEach((element, index) => {
        element.shoppingCartVOList = element.shoppingCartVOList.filter(item => {
          if (item.check) {
            ids.push(item.id);
          }
          return !item.check;
        });
        if (element.shoppingCartVOList.length === 0) {
          this.shoppingCartEnterpriseVOS.splice(index, 1);
        }
      });
      if (ids.length === 0) {
        this.$message.warning("请选择商品");
        return;
      }
      this.deleteORder(ids.join(","));
    },
    /**
     * 删除 复用函数
     */
    async deleteORder(ids) {
      const res = await shoppingCartDeleteManyOrOne({
        ids: ids
      });
      if (res.result) {
        this.$message.success(res.message);
        this.showCartInfoHandle();
      } else {
        this.$message.success(res.message);
      }
    },
    /**
     * 确认订单
     */
    confirmAnOrder() {
      // 没有选中商品提示
      console.log(this.amount)
      if (this.amount === "0.00") {
        this.$message.warning("商品总额为0.00 不可提交");
        return;
      }
      // 将数组重新保存
      let arr = this.shoppingCartEnterpriseVOS;
      // 中转 数组
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].selectedArray.length !== 0) {
          newArr.push(arr[i]);
        }
      }
      // 过滤数组
      newArr = JSON.parse(JSON.stringify(newArr));
      newArr.forEach(element => {
        element.shoppingCartVOList = element.selectedArray;
        delete element.isIndeterminate;
        delete element.selectedArray;
        delete element.shoppingCartListJson;
        delete element.checkAll;
      });

      // 存储本地
      sessionStorage["orderInfo"] = JSON.stringify(newArr);

      // 页面跳转
      this.$router.push("submitOrders");
    },
    /**
     * 单条订单加减事件
     */
    async inputNumberHandle(each, index, idx) {
      await shoppingCartUpdateCartCount({
        id: each.id,
        count: each.buyCount
      });
    },
    /**
     * 去购物
     */
    goBuyButton() {
      this.$router.push("/");
    },
    ...mapActions(["shopCartHandle", "showCartInfoHandle"]),
    ...mapMutations(["shopCartdeleteOrderHandle"])
  },

  created() {
    this.shopCartHandle();
  },
  updated() {},
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
.empty_shopping_cart {
  height: 322px;
}
.emty_img {
  width: 439px;
  height: 74px;
  background: url("~assets/empty-car-img.png");
}
.go_buy_button {
  position: relative;
  top: -26px;
  left: -80px;
  font-size: 18px;
  color: #1c7cce;
  cursor: pointer;

  cursor: pointer;
}
</style>
