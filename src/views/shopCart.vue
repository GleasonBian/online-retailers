<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 11:02:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-12 09:31:58
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
            class="store_checkAll_btn"
            size="medium"
          >店铺名称</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :key="city">
              <div class="list_item_box"></div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
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
      isIndeterminate: true
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
.store_checkAll_btn {
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
  grid-template-columns: 190px 280px 256px 106px 147px 224px;
  align-items: center;
  height: 50px;
  border: 1px solid #e6e6e6;
  margin-top: 24px;
}
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid red;
}
</style>
