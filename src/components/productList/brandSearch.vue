<!-- 品牌搜索框 -->
<template>
  <div class="brand_search_container row_center">
    <div class="brand_search_box">
      <div class="row_center synthesis_order">综合排序</div>
      <div></div>
      <div class="row_center">价格区间</div>
      <div></div>
      <div class="row_center interval_price">
        <input
          type="text"
          v-model="productParams.startPrice"
          @keyup="productParams.startPrice=productParams.startPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
        />-
        <input
          type="text"
          v-model="productParams.endPrice"
          @keyup="productParams.endPrice=productParams.endPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
        />
      </div>
      <div></div>
      <div class="row_center">品牌</div>
      <div></div>
      <div class="row_center brand_input">
        <input type="text" v-model="productParams.brandName" placeholder="输入品牌进行搜索" />
      </div>
      <div></div>
      <div class="row_center search_button" @click="brandHandle()">搜 索</div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "brandSearch",
  data() {
    return {};
  },

  computed: mapState(["productParams"]),

  methods: {
    brandHandle() {
      this.$store.dispatch("productListData");
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.brand_search_box {
  height: 50px;
  width: 1200px;
  margin: 24px 0px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 120px 40px 60px 20px 130px 90px 30px 20px 215px 20px 120px auto;
  justify-items: center;
  align-items: center;
}
.interval_price input {
  display: block;
  width: 60px;
  height: 20px;
  border: 1px solid #cccccc;
  color: #1c7cce;
}
.brand_input input {
  display: block;
  width: 215px;
  height: 20px;
  border: 1px solid #cccccc;
}
.synthesis_order {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.search_button {
  width: 120px;
  height: 30px;
  background: #1c7cce;
  border-radius: 5px;
  color: #ffffff;
}
.search_button:hover {
  cursor: pointer;
}
</style>
