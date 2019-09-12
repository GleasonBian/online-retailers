<!--
 * @Description: 楼层
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 20:21:52
 -->
<template>
  <div>
    <div class="floor" v-for="(item, index) in floor" :key="index">
      <h3>{{ item.frontName }}</h3>
      <div class="floor_continer">
        <div class="classify_goods">
          <div :class="['floor_classify', 'bg', item.floor.img]">
            <div class="floor_Box">
              <div
                class="floor_classify_name uts"
                v-for="(each, index) in item.children"
                :key="index"
                v-show="index <= 13"
                @click="toProductList(each)"
              >{{ each.frontName }}</div>
              <!-- <router-link
                class="floor_classify_name uts"
                v-for="(each, index) in item.children"
                :key="index"
                :to="{ path: 'goodsList', query: { secondFrontClassId: each.id } }"
                v-show="index <= 13"
              >{{ each.frontName }}</router-link>-->
            </div>
            <div class="floor_hot">
              <div style="font-size:20px; color:#fff;margin-bottom:24px;">热销HOT</div>
              <div class="floor_hot_box">
                <router-link
                  class="floor_hot_name uts"
                  v-for="(each, index) in item.sellGoodsVOS"
                  :key="index"
                  :to="{
                    path: '/goodsDetails',
                    query: {
                      id: each.productId
                    }
                  }"
                >{{ each.goodsName }}</router-link>
              </div>
            </div>
          </div>
          <div class="floor_item_box">
            <router-link
              :to="{ path: 'goodsDetails', query: { id: each.productId } }"
              :class="['floor_item', item.floor.hover]"
              v-for="(each, index) in item.goodsVOList"
              :key="index"
            >
              <img :src=" img + each.mainImagePath " width="100%" height="170px" />
              <div class="floor_item_details">
                <div
                  :class="{
                  'proprietary_tag': each.dealer === 1,
                  'proprietary_tag_height': each.dealer !== 1,
                }"
                ></div>
                <div class="item_details_name uts">{{ each.goodsName }}</div>
                <div class="item_details_desc uts">{{ each.typeModel }}</div>
                <div class="item_details_price uts">{{ userInfo ? '面议' : '登录-查看价格'}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="hot_brand">
          <div class="hot_brand_title">品牌 HOT</div>
          <div class="hot_brand_body">
            <!-- <router-link
              v-for="(each,index) in item.brandVOS"
              :key="index"
              :to="{ path: 'brand', query: { id:each.id  }}"
              v-show="index <= 7"
              class="hot_brand_item"
            >
              <img :src="img + each.logoImg" />
            </router-link>-->
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_1.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_2.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_3.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_4.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_5.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_6.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_7.png" />
            </div>
            <div class="hot_brand_item">
              <img src="~assets/brand/brand_8.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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

  computed: mapState(["floor", "userInfo"]),

  mounted() {},

  methods: {
    /**
     * 商品列表
     */
    toProductList(each) {
      each.level = 2;
      this.classifyHandle(each);
      this.$router.push({
        path: "/goodsList",
        query: { secondFrontClassId: each.id }
      });
    },
    ...mapMutations(["classifyHandle"])
  }
};
</script>
<style scoped>
.floor1 {
  background: url(~assets/floor/1.png);
}
.floor2 {
  background: url(~assets/floor/2.png);
}
.floor3 {
  background: url(~assets/floor/3.png);
}
.floor4 {
  background: url(~assets/floor/4.png);
}
.floor5 {
  background: url(~assets/floor/5.png);
}
.floor6 {
  background: url(~assets/floor/6.png);
}
.floor7 {
  background: url(~assets/floor/7.png);
}
.floor8 {
  background: url(~assets/floor/8.png);
}
.floor9 {
  background: url(~assets/floor/9.png);
}
.floor10 {
  background: url(~assets/floor/10.png);
}
.floor_1:hover {
  border-top: 2px solid #5470b4;
}
.floor_2:hover {
  border-top: 2px solid #ec503f;
}
.floor_3:hover {
  border-top: 2px solid #d3b739;
}
.floor_4:hover {
  border-top: 2px solid #54b4a8;
}
.floor_5:hover {
  border-top: 2px solid #86639b;
}
.floor_6:hover {
  border-top: 2px solid #638b9b;
}
.floor_7:hover {
  border-top: 2px solid #639b8c;
}
.floor_8:hover {
  border-top: 2px solid #9b9063;
}
.floor_9:hover {
  border-top: 2px solid #9b7c63;
}
.floor_10:hover {
  border-top: 2px solid #5f6ac6;
}
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
  width: 180px;
  height: 350px;
  border-bottom: 2px solid #ffffff;
  text-align: left;
  margin-left: 20px;
  /* padding-left: 22px; */
}
.floor_classify_name {
  display: inline-block;
  width: 79px;
  height: 46px;
  line-height: 46px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap !important;
  outline: 0 !important;
  font-size: 18px;
  color: #ededed;
}
a:hover {
  color: #ffffff;
}
.floor_classify_name:nth-child(even) {
  margin-left: 18px;
}
.floor_hot {
  width: 180px;
  text-align: left;
  margin-left: 20px;
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
  width: 89px;
  height: 25px;
  overflow: hidden;
  white-space: nowrap !important;
  outline: 0 !important;
  font-size: 18px;
  color: #ffffff;
}
.floor_classify {
  width: 230px;
  height: 550px;
  padding: 30px 5px;
}
.floor_item_box {
  width: 970px;
  height: 550px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  margin-right: 33px;
  box-sizing: border-box;
}
.floor_item_box > .floor_item:nth-child(4) {
  margin-right: 0px;
}
.floor_item_box > .floor_item:nth-child(8) {
  margin-right: 0px;
}
.floor_item:hover {
  box-shadow: rgba(51, 51, 51, 0.2) 2px 3px 25px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.item_details_name {
  width: 204px;
  font-size: 14px;
  color: #666666;
}
.item_details_name:hover {
  color: #1c7cce;
}
.proprietary_tag {
  height: 14px;
  width: 210px;
  margin: 4px 0px;
  background: url("~assets/tit-small.png");
  background-repeat: no-repeat;
  padding-left: 50px;
}
.proprietary_tag_height {
  height: 14px;
}
.item_details_desc {
  width: 210px;
  font-size: 12px;
  color: #999999;
  padding: 5px 0px;
}
.item_details_price {
  font-size: 14px;
  color: #ff2731;
}
.hot_brand {
  width: 1200px;
  height: 135px;
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
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  height: 85px;
}
.hot_brand_body img {
  width: 123px;
  height: 82px;
}
.hot_brand_item {
  width: 123px;
  height: 82px;
  margin-right: 30px;
}
.floor_classify_name:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
