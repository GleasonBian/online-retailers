<!-- 商品列表 -->
<template>
  <div class="layout">
    <div class="box_width row_start_start">
      <router-link
        v-for="(item,index) in productData"
        :key="index"
        :to="{ path: 'goodsDetails', query: { id: item.id}}"
        style="text-decoration: none;"
      >
        <div class="product_item column_between_center">
          <img src="~assets/Qr_code.png" alt />
          <div class="product_desc column_start_start">
            <span class="product_desc_name uts">{{item.productName}}</span>
            <span class="product_desc_brand uts">品牌: {{item.brandName}}</span>
            <span class="product_desc_unit uts">单位: {{"没有字段"}}</span>
            <span class="product_desc_spec uts">共{{"saleCount"+item.saleCount}}个规格型号</span>
            <span class="product_desc_price">¥ {{item.minPrice}} - {{item.maxPrice}}</span>
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
  name: "",
  data() {
    return {};
  },

  computed: mapState(["productData"]),

  methods: {},

  created() {},

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
  color: red;
}
</style>
