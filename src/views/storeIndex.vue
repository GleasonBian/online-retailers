<!-- 店铺首页 -->
<template>
  <div class="layout store_main">
    <div class="row_between_start box_width">
      <storebarA></storebarA>
      <div class="store_banner">
        <el-carousel height="560px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="box_width new_hot"></div>
    <div class="row_between_start box_width">
      <storebarB></storebarB>
      <div class="product_list_box row_start_start">
        <div class="list_item_box column_between_start">
          <img class="list_item_img" src="~assets/Qr_code.png" alt />
          <div class="list_item_info_box column_center">
            <div class="item_info_title item_info_main">13231</div>
            <div class="item_info_brand item_info_main">123123</div>
            <div class="item_info_price item_info_main">12312</div>
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
    return {};
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
.store_main {
  margin-top: 24px;
}
.store_banner {
  width: 946px;
  height: 560px;
  background: #fc7272;
}
.new_hot {
  height: 114px;
  background: url("~assets/tit-new.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
}
.product_list_box {
  width: 946px;
}
.list_item_box {
  width: 210px;
  height: 260px;
  box-sizing: border-box;
  margin: 15px 12px;
  background: #ffffff;
}
.list_item_box:hover {
  box-shadow: rgba(51, 51, 51, 0.2) 5px 3px 10px;
}
.list_item_img {
  width: 100%;
  height: 170px;
}
.list_item_info_box {
  width: 100%;
  height: 90px;
}
.item_info_title {
  color: #666666;
  font-size: 14px;
}
.item_info_brand {
  color: #999999;
  font-size: 12px;
}
.item_info_price {
  color: #e40838;
  font-size: 14px;
}
.item_info_main {
  height: 25px;
  line-height: 25px;
}
</style>
