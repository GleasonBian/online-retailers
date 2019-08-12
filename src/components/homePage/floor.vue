<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-11 11:08:12
 -->
<!-- 楼层 -->
<template>
  <div>
    <div class="floor" v-for="(item, index) in floor" :key="index">
      <h3>{{item.frontName}}</h3>
      <div class="floor_continer">
        <div class="classify_goods">
          <div class="floor_classify" style="background: #5c7ac3;">
            <div class="floor_Box">
              <router-link
                class="floor_classify_name uts"
                v-for="(each,index) in item.children"
                :key="index"
                :to="{ path: 'goodsList', query: { id:each.id  }}"
              >{{each.frontName}}</router-link>
            </div>
            <div class="floor_hot">
              <div style="font-size:20px; color:#fff;margin-bottom:24px;">热销HOT</div>
              <div class="floor_hot_box">
                <div
                  class="floor_hot_name uts"
                  v-for="(each,index) in item.sellGoodsVOS"
                  :key="index"
                >{{each.goodsName}}</div>
              </div>
            </div>
          </div>
          <div class="floor_item_box">
            <router-link
              :to="{ path: 'goodsDetails', query: { id:each.productId  }}"
              class="floor_item"
              v-for="(each,index) in item.goodsVOList"
              :key="index"
            >
              <img :src="img+each.mainImagePath" width="202px" height="153px" />
              <div class="floor_item_details">
                <div class="item_details_name uts">{{each.goodsName}}</div>
                <div class="item_details_desc uts">{{each.typeModel}}</div>
                <div class="item_details_price uts">¥ {{each.goodsPrice}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="hot_brand">
          <div class="hot_brand_title">品牌 HOT</div>
          <div class="hot_brand_body">
            <router-link
              v-for="(each,index) in item.brandVOS"
              :key="index"
              :to="{ path: 'brand', query: { id:each.id  }}"
            >
              <img :src="img + each.logoImg" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "floor",
  data() {
    return {
      img: process.env.VUE_APP_IMG
    };
  },

  created() {
    this.$store.dispatch("handle");
  },
  components: {},

  computed: mapState(["floor"]),

  mounted() {},

  methods: {}
};
</script>
<style scoped>
.floor {
  width: 1200px;
  margin-bottom: 50px;
}
h3 {
  text-align: left;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}
.floor_continer {
  width: 1200px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.classify_goods {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.floor_Box {
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 3px solid #ffffff;
}
.floor_hot {
  margin-top: 20px;
  width: 200px;
}
.floor_hot_box {
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.floor_hot_name {
  width: 90px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap !important;
  outline: 0 !important;
  font-size: 18px;
  color: #ffffff;
}
.floor_classify {
  width: 230px;
  height: 550px;
  padding: 30px 15px;
}
.floor_item_box {
  width: 970px;
  height: 550px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 30px;
  align-items: stretch;
  align-content: space-between;
}
.floor_item {
  width: 210px;
  height: 260px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
}
.floor_item:hover {
  border-top: 2px solid #1c7cce;
  box-shadow: rgba(51, 51, 51, 0.2) 2px 3px 25px;
}
.floor_classify_name {
  width: 90px;
  height: 23px;
  overflow: hidden;
  white-space: nowrap !important;
  outline: 0 !important;
  font-size: 18px;
  color: #ffffff;
}
/* .floor_item_details {
  margin-top: 20px;
} */
.item_details_name {
  font-size: 14px;
  color: #666666;
}
.item_details_desc {
  font-size: 12px;
  color: #999999;
}
.item_details_price {
  font-size: 14px;
  color: #e40838;
}
.hot_brand {
  width: 1200px;
  height: 118px;
  /* background: #1c7cce; */
  overflow: hidden;
}
.hot_brand_title {
  width: 100%;
  text-align: left;
  font-size: 22px;
  color: #333333;
}
.hot_brand_body {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 85px;
  overflow: hidden;
}
.hot_brand_body img {
  margin: 0px 14px;
  width: 123px;
  height: 82px;
}
</style>
