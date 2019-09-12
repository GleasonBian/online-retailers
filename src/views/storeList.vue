<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-03 14:50:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-06 09:38:08
 -->
<!--  -->
<template>
  <div class="layout margin">
    <div class="box_width column_start_start">
      <div class="store_sort row_between_center">
        <div class="btn_box row_center">
          <span
            @click="searchHandle('default',1)"
            :class="{
              sortActive: sortActive === 1 ? true: false
            }"
          >默认排序</span>
        </div>
        <div class="row_center btn_box">
          <span
            @click="searchHandle('order_count',2)"
            :class="{
              sortActive: sortActive === 2 ? true: false
            }"
          >销量</span>
        </div>
        <div class="row_center btn_box">
          <span
            @click="searchHandle('create_time',3)"
            :class="{
              sortActive: sortActive === 3 ? true: false
            }"
          >时间</span>
        </div>
      </div>
      <div class="store_list_box column_center">
        <div
          class="store_list_item row_between_center"
          v-for="(item,index) in storeListData"
          :key="index"
        >
          <router-link
            :to="{
            path: '/storeIndex',
            query:{supplierId:item.id}
          }"
            class="store_box column_start_start router-link-active"
          >
            <div class="row_start_center store_img_info">
              <img :src="img+item.logo" alt />
              <div class="store_info column_around_start">
                <span>{{item.name}}</span>
                <!-- <span>店铺主营商品</span> -->
              </div>
            </div>
            <div class="store_box_info column_start_start">
              <div class="row_start_center">
                <span>销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量: &nbsp;</span>
                <span>{{item.orderCount}}</span>
              </div>
              <div class="row_start_center">
                <span>联系商家:&nbsp;</span>
                <span>{{item.phone}}</span>
              </div>
            </div>
          </router-link>
          <div class="product_box row_around_center_nowrap">
            <router-link
              class="product_box_item column_start_center"
              v-for="(each,index) in item.sjgtwMallGoodsVOS"
              :key="index"
              :to="{
                path: '/goodsDetails',
                query:{id:each.productId}}"
            >
              <img :src="img + each.mainImagePath" alt />
              <div class="product_name uts">{{ each.goodsName }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <pagination param="storeParams" funHandle="SearchEnterprise"></pagination>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "storeList",
  data() {
    return {
      sortActive: 1
    };
  },

  computed: mapState(["storeListData", "total", "img"]),

  methods: {
    searchHandle(val, num) {
      this.sortActive = num;
      this.storeParamsHandle(val);
      this.SearchEnterprise();
    },
    ...mapMutations(["storeParamsHandle"]),
    ...mapActions(["SearchEnterprise"])
  },

  created() {
    this.searchHandle();
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.product_name {
  width: 145px;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
}
.product_name:hover {
  color: #1c7cce;
}
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
  border: 1px solid #efefef;
  margin-bottom: 24px;
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
.store_info > span:hover {
  color: #1c7cce;
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
  cursor: pointer;
}
.btn_arr {
  font-size: 10px;
  padding-left: 5px;
}
.sortActive {
  color: #1c7cce;
  font-size: 15px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
