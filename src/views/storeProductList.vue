<!--  -->
<template>
  <div class="layout store_product_list">
    <div class="box_width row_between_start">
      <div>
        <storebarA class="storebarA"></storebarA>
        <storebarB></storebarB>
      </div>
      <div class="prod_list_container">
        <div class="all_product">| &nbsp; 全部商品</div>
        <div class="sort_search_box row_start_center">
          <div class="sort_search_text">排序</div>
          <div class="sort_search_select row_between_start">
            <span style="color:#1C7CCE">默认排序</span>
            <span>销量</span>
            <span>
              价格
              <img src="~assets/Under.png" alt />
            </span>
          </div>
          <div class="price_interval_text">价格区间:</div>
          <div class="row_center interval_price">
            <input
              type="text"
              v-model="minPrice"
              @keyup="minPrice=minPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
            />-
            <input
              type="text"
              v-model="maxPrice"
              @keyup="maxPrice=maxPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
            />
          </div>
          <div class="search_btn">搜&nbsp;索</div>
        </div>
        <div class="prod_list_box row_start_start">
          <div class="prod_item_box_main column_center">
            <img class="prod_item_img" src="~assets/Qr_code.png" alt />
            <div class="prod_item_main column_between_center">
              <div class="prod_item_title text_left">鞍钢热轧卷板</div>
              <div class="prod_item_brand text_left">品牌: {{"了多是"}}</div>
              <div class="prod_item_unit text_left">单位: {{"个"}}</div>
              <div class="prod_item_spec text_left">共{{"10"}}规格型号</div>
              <div class="prod_item_price text_left">¥ &nbsp; {{900}}~{{3200}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storebarA from "#/store/storebarA.vue";
import storebarB from "#/store/storebarB.vue";
export default {
  name: "",
  data() {
    return {
      minPrice: 0,
      maxPrice: 99
    };
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    storebarA,
    storebarB
  }
};
</script>

<style scoped>
.store_product_list {
  margin-top: 24px;
}
.storebarA {
  margin-bottom: 24px;
}
.prod_list_container {
  width: 946px;
}
.prod_list_box {
  width: 946px;
}
.all_product {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  text-align: left;
  color: #1c7cce;
  margin-bottom: 24px;
}
.sort_search_box {
  width: 100%;
  height: 60px;
  background: #ffffff;
  font-size: 18px;
}
.prod_item_box_main {
  width: 212px;
  height: 350px;
  background: #ffffff;
  margin: 15px 12px;
}
/* .prod_item_box_main :hover {
  border-top: 2px solid #1c7cce;
} */
.sort_search_text {
  padding: 0px 24px;
  color: #666666;
}
.sort_search_select {
  border: 1px solid #e6e6e6;
  width: 300px;
  height: 30px;
  padding: 3px 10px;
  font-size: 15px;
}
.interval_price input {
  display: block;
  width: 60px;
  height: 20px;
  border: 1px solid #cccccc;
  color: #1c7cce;
}
.price_interval_text {
  color: #666666;
  margin: 0px 24px 0px 60px;
}
.search_btn {
  width: 120px;
  height: 40px;
  border-radius: 8px;
  background: #1c7cce;
  line-height: 40px;
  color: #ffffff;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 600;
}
.prod_item_img {
  width: 99%;
  height: 170px;
}
.prod_item_main {
  width: 100%;
  height: 170px;
}
.prod_item_main div {
  width: 85%;
}

.text_left {
  text-align: left;
}
.prod_item_title {
  font-size: 16px;
  font-weight: 600;
}
.prod_item_brand,
.prod_item_unit,
.prod_item_spec {
  color: #808080;
}
.prod_item_price {
  color: red;
  font-size: 16px;
}
</style>
