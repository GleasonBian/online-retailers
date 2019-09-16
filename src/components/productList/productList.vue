<!--
 * @Description: 商品列表
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-01 16:06:37
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 14:59:39
 -->
<template>
  <div class="layout">
    <div class="box_width row_start_start">
      <router-link
        v-for="(item,index) in productData"
        :key="index"
        :to="{ path: 'goodsDetails', query: {id: item.id}}"
        style="text-decoration: none;"
      >
        <div class="product_item column_between_center">
          <img :src="img + item.mianImgPath" alt />
          <div class="product_desc column_start_start">
            <div
              :class="{
              'proprietary_tag': item.dealer === 1,
              'proprietary_tag_height': item.dealer !== 1,
            }"
            >
              <div class="product_desc_name uts">{{ item.productName }}</div>
            </div>
            <span class="product_desc_brand uts">品牌: {{ item.brandName }}</span>
            <span class="product_desc_unit uts">单位: {{ "" }}</span>
            <span class="product_desc_spec uts">共{{ item.goodsCount }}个规格型号</span>
            <span class="product_desc_price" v-if="userInfo">¥ 面议</span>
            <span class="product_desc_price" v-else>登录-查看价格</span>
          </div>
        </div>
      </router-link>
    </div>
    <pagination param="productParams" funHandle="productListData"></pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "productList",
  data() {
    return {};
  },

  computed: mapState(["productData", "img", "userInfo",'productParams']),

  methods: {},

  created() {
    this.productParams.pageNo=1
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.product_item {
  height: 387px;
  width: 280px;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  margin: 9px;
}
.product_item:hover {
  border-top: 2px solid #1c7cce;
}
.product_item img {
  width: 280px;
  height: 220px;
}
.product_desc {
  width: 100%;
  height: 168px;
  padding: 20px 15px 0px 15px;
}
.product_desc_name {
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}
.product_desc_brand,
.product_desc_unit,
.product_desc_spec {
  margin-bottom: 8px;
  font-size: 14px;
}
.product_desc_price {
  margin-top: 5px;
  font-size: 16px;
  color: #ff2731;
}
.proprietary_tag {
  width: 250px;
  height: 30px;
  line-height: 30px;
  background: url("~assets/tit.png.png");
  background-repeat: no-repeat;
  background-position: right center;
  text-align: left;
}
.proprietary_tag_height {
  height: 30px;
}
</style>
