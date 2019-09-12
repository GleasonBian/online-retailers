<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-05 09:54:15
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-04 16:24:25
 -->
<template>
  <div class="store_info_box column_between_center">
    <div class="store_info">
      <div class="store_title_bg bg"></div>
      <div class="store_mian_box column_between_start">
        <div class="store_name uts">{{ name }}</div>
        <div class="store_avatar row_between_center">
          <img :src="img + logo" alt class="store_avatar_img" />
          <img src="~assets/contact.png" alt />
        </div>
        <div class="Sale_amount">
          <span>销售量:</span>
          <span style="color:#1C7CCE">{{ orderCount }}</span>
          <span>件</span>
        </div>
      </div>
      <div class="store_info_item column_between_start">
        <div>
          <span>创建时间: &nbsp;</span>
          <span class="uts">{{ createTime }}</span>
        </div>
        <div class="row_start_start">
          <span>所在地区: &nbsp;</span>
          <span class="uts address">{{ registeredAddress }}</span>
        </div>
        <div>
          <span>商品数量: &nbsp;</span>
          <span class="uts">{{ goodsCount }}</span>
        </div>
        <div>
          <span>联系电话: &nbsp;</span>
          <span class="uts">{{ phone }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="store_product_sort">
      <div class="product_sort bg"></div>
      <div class="product_sort_body row_between_center_wrap">
        <div class="sort_item row_center">默认</div>
        <div class="sort_item row_center">默认</div>
        <div class="sort_item row_center">默认</div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "storeBarA",
  data() {
    return {};
  },

  computed: mapState({
    name: state => state.storeIndexData.name,
    img: state => state.img,
    logo: state => state.storeIndexData.logo,
    phone: state => state.storeIndexData.phone,
    orderCount: state => state.storeIndexData.orderCount,
    registeredAddress: state => state.storeIndexData.registeredAddress,
    goodsCount: state => state.storeIndexData.goodsCount,
    createTime: state => {
      let date = new Date(state.storeIndexData.createTime);
      return date.toLocaleString().split(" ")[0];
    }
  }),

  methods: {},

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.address {
  display: inline-block;
  width: 140px;
}
.store_info_box {
  width: 230px;
  height: 440px;
  background: #ffffff;
}

.store_avatar_img {
  width: 100px;
  height: 100px;
}

.store_info {
  height: 415px;
  width: 100%;
}
.store_title_bg {
  width: 230px;
  height: 40px;
  background: url("~assets/tit-lianxi.png");
}
.store_mian_box {
  padding-left: 15px;
  height: 230px;
  width: 230px;
}
.store_info_item {
  padding: 5px 0px 5px 16px;
  height: 150px;
  width: 100%;
}
.Sale_amount {
  width: 100%;
  text-align: right;
  padding-right: 16px;
  padding-bottom: 24px;
  font-size: 15px;
}
.store_name {
  width: 100%;
  height: 50px;
  text-align: left;
  font-size: 18px;
  line-height: 50px;
}
.product_sort {
  background: url("~assets/order.png");
  width: 100%;
  height: 40px;
}

.store_product_sort {
  width: 100%;
  height: 121px;
}
.product_sort_body {
  width: 100%;
  height: 80px;
}
.sort_item {
  width: 72px;
  height: 50px;
  border: 1px solid #b6b4b6;
  border-radius: 10px;
  font-size: 16px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
