<!--  -->
<template>
  <div class="layout margin">
    <div class="box_width column_start_start">
      <div class="store_sort row_between_center">
        <div class="btn_box row_center">默认排序</div>
        <div class="row_center btn_box">
          <span>销量</span>
          <div class="column_center btn_arr">
            <span>▲</span>
            <span>▼</span>
          </div>
        </div>
        <div class="row_center btn_box">
          <span>价格</span>
          <div class="column_center btn_arr">
            <span>▲</span>
            <span>▼</span>
          </div>
        </div>
      </div>
      <div class="store_list_box column_center">
        <div class="store_list_item row_between_center">
          <router-link to="storeIndex" class="store_box column_start_start router-link-active">
            <div class="row_start_center store_img_info">
              <img src="~assets/Qr_code.png" alt />
              <div class="store_info column_around_start">
                <span>店铺名称</span>
                <span>店铺主营商品</span>
              </div>
            </div>
            <div class="store_box_info column_start_start">
              <div class="row_start_center">
                <span>销量</span>
                <span>{{123123123}}</span>
              </div>
              <div class="row_start_center">
                <span>联系商家</span>
                <span>{{12312312}}</span>
              </div>
            </div>
          </router-link>
          <div class="product_box row_around_center_nowrap">
            <div class="product_box_item column_start_center">
              <img src="~assets/Qr_code.png" alt />
              <span>店铺名称</span>
            </div>
            <div class="product_box_item column_start_center">
              <img src="~assets/Qr_code.png" alt />
              <span>店铺名称</span>
            </div>
            <div class="product_box_item column_start_center">
              <img src="~assets/Qr_code.png" alt />
              <span>店铺名称</span>
            </div>
            <div class="product_box_item column_start_center">
              <img src="~assets/Qr_code.png" alt />
              <span>店铺名称</span>
            </div>
            <div class="product_box_item column_start_center">
              <img src="~assets/Qr_code.png" alt />
              <span>店铺名称</span>
            </div>
          </div>
        </div>
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
.margin {
  margin-top: 24px;
}
.store_sort {
  width: 300px;
  height: 50px;
  /* background: #efefef; */
}
.store_list_box {
  width: 100%;
  border: 1px solid #efefef;
  margin: 12px 0px;
}
.store_box {
  width: 400px;
  height: 200px;
  padding: 10px;
  border-right: 1px solid #efefef;
}
.row_start_center img {
  width: 120px;
  height: 120px;
}
.store_list_item {
  width: 100%;
}
.store_img_info {
  width: 100%;
}
.product_box {
  width: 100%;
  height: 200px;
}
.store_info {
  padding-left: 10px;
  width: 160px;
  height: 120px;
}
.store_info :first-child {
  font-size: 20px;
  font-weight: 600;
}
.store_box_info {
  width: 100%;
}
.store_box_info div {
  width: 100%;
  height: 30px;
}
.product_box_item {
  width: 160px;
  height: 180px;
}
.product_box_item img {
  width: 146px;
  height: 146px;
}
.product_box_item span {
  font-size: 18px;
  padding-top: 5px;
}
.btn_box {
  width: 100px;
  height: 50px;
  border: 1px solid #efefef;
}
.btn_arr {
  font-size: 10px;
  padding-left: 5px;
}
</style>
