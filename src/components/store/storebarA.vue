<!--  -->
<template>
  <div class="store_info_box column_between_center">
    <div class="store_info">
      <div class="store_title_bg bg"></div>
      <div class="store_mian_box column_between_start">
        <div class="store_name">店铺名称</div>
        <div class="store_avatar row_between_center">
          <img src="~assets/Qr_code.png" alt />
          <img src="~assets/contact.png" alt />
        </div>
        <div class="Sale_amount">
          <span>销售量:</span>
          <span style="color:#1C7CCE">233232</span>
          <span>件</span>
        </div>
      </div>
      <div class="store_info_item column_between_start">
        <div>
          <span>创建时间: &nbsp;</span>
          <span class="uts">2020年12月30日</span>
        </div>
        <div>
          <span>所在地区: &nbsp;</span>
          <span class="uts">2020年12月30日</span>
        </div>
        <div>
          <span>商品数量: &nbsp;</span>
          <span class="uts">2020年12月30日</span>
        </div>
        <div>
          <span>联系电话: &nbsp;</span>
          <span class="uts">2020年12月30日</span>
        </div>
      </div>
    </div>
    <div class="store_product_sort">
      <div class="product_sort bg"></div>
      <div class="product_sort_body row_between_center_wrap">
        <div class="sort_item row_center">默认</div>
        <div class="sort_item row_center">默认</div>
        <div class="sort_item row_center">默认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.store_info_box {
  width: 230px;
  height: 560px;
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
  /* border: 1px solid #b6b4b6; */
  /* border-right: none; */
}
.sort_item {
  width: 72px;
  height: 50px;
  border: 1px solid #b6b4b6;
  border-radius: 10px;
  font-size: 16px;
}
</style>
