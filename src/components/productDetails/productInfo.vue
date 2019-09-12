<!--
 * @Description: 商品详情下半截
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-01 20:03:57
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-05 16:40:04
 -->
<template>
  <div class="column_center">
    <div class="product_info box_width">
      <div class="selected_class_box row_start_center">
        <div class="selected_class">已选类目</div>
        <span v-for="( item, index ) in classify" :key="index" class="classify">
          <span v-if="index !== 0">&nbsp;＞</span>
          {{ item.frontName }}
        </span>
      </div>
      <div class="product_intro row_center">
        <div class="preview_wrap column_between_center">
          <div class="preview_img_box">
            <img :src="imgPath" class="preview_img" />
          </div>
          <div class="preview_img_list row_center">
            <img
              v-for="(item, index) in imageList"
              :key="index"
              :src="img + item.imagePath"
              @click="switchImgIndex(index)"
              v-show="index < 6"
              class="preview_img_click"
            />
          </div>
        </div>
        <div class="itemInfo_wrap column_between_center">
          <div class="itemInfo_title">{{ productName }}</div>
          <div class="itemInfo_price row_start_center">
            <span>价格</span>
            <!--<span v-if="userInfo">¥{{ minPrice }}~{{ maxPrice }}</span>-->
            <span v-if="userInfo">面议</span>
            <span v-else>登录查看价格</span>
          </div>
          <div class="itemInfo_other column_between_center">
            <div class="itemInfo_other_distribution row_start_center">
              <span>配送方式</span>
              <span>{{ dispatchExplain }}</span>
            </div>
            <div class="itemInfo_other_specification row_start_center">
              <span>规格型号</span>
              <span>共计&nbsp;&nbsp;{{ goodsAttrCount }}&nbsp;&nbsp;种型号</span>
            </div>
          </div>
          <div class="itemInfo_img row_around_center">
            <div class="zhuanshu_img"></div>
            <div class="fwuu_img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "productDetailsBottom",
  data() {
    return {
      imgIndex: 0,
      bigImg: [],
      smallImg: [],
      img: process.env.VUE_APP_IMG
    };
  },

  computed: {
    ...mapState({
      productName: state => state.productDetails.productName,
      imageList: state => state.productDetails.imageList,
      minPrice: state => state.productDetails.minPrice,
      maxPrice: state => state.productDetails.maxPrice,
      goodsAttrCount: state => state.productDetails.goodsAttrCount,
      dispatchExplain: state => state.productDetails.dispatchExplain,
      classify: "classify",
      imgPath(state) {
        if ("imageList" in state.productDetails)
          return (
            this.img + state.productDetails.imageList[this.imgIndex].imagePath
          );
      },
      userInfo: "userInfo"
    })
  },

  methods: {
    switchImgIndex(index) {
      this.imgIndex = index;
    }
  },

  created() {},

  mounted() {},
  updated() {},
  components: {}
};
</script>

<style scoped>
.product_info {
  height: 510px;
  border: 1px solid #e6e6e6;
  margin-top: 24px;
}
.selected_class_box {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e6e6e6;
}
.product_intro {
  width: 100%;
  min-height: 460px;
}
.selected_class {
  height: 48px;
  line-height: 50px;
  width: 120px;
  background: #f5f5f5;
}
.preview_wrap {
  height: 380px;
  width: 300px;
  /* background: #1c7cce; */
  margin-right: 30px;
}
.itemInfo_wrap {
  width: 800px;
  height: 380px;
}
.preview_img_box {
  width: 300px;
  height: 300px;
}
.preview_img {
  width: 100%;
  height: 100%;
}
.preview_img_list {
  width: 300px;
  height: 45px;
}
.preview_img_list img {
  width: 45px;
  height: 45px;
  margin: 0px 3px;
}
.preview_img_click:hover {
  cursor: pointer;
}
.itemInfo_title {
  font-size: 28px;
  align-self: flex-start;
  margin-top: 40px;
}
.itemInfo_price {
  width: 100%;
  height: 50px;
  background: rgba(141, 189, 230, 0.2);
  align-self: flex-start;
}
.itemInfo_price :first-child {
  font-size: 18px;
  padding: 0px 50px 0px 30px;
}
.itemInfo_price :last-child {
  font-size: 24px;
  color: #e71f4a;
}
.itemInfo_other {
  width: 100%;
  padding-left: 24px;
}
.itemInfo_other_specification,
.itemInfo_other_distribution {
  height: 34px;
  align-self: flex-start;
  font-size: 16px;
  color: #999999;
}
.itemInfo_other_specification :first-child {
  margin-right: 30px;
}
.itemInfo_other_distribution :first-child {
  margin-right: 30px;
}
.itemInfo_img {
  width: 100%;
  height: 110px;
  /* background: #8dbde6; */
}
.fwuu_img {
  background: url("~assets/fwuu-img.png") no-repeat;
}
.zhuanshu_img {
  background: url("~assets/zhuanshu-img.png") no-repeat;
}
.fwuu_img,
.zhuanshu_img {
  width: 300px;
  height: 108px;
  background-size: 100%;
  background-position: center center;
}
.classify {
  font-size: 16px;
  color: #1c7cce;
}
</style>
