<!--
 * @Description: 分类 与 banner 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 17:21:15
 -->
<template>
  <div class="classify_banner">
    <div class="banner">
      <el-carousel height="520px">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <img :src="item.link + item.path" class="banner_img" @click="toProductDetails(item.id)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="classify">
      <div
        class="classify_item"
        v-for="(item,index) in classify"
        :key="index"
        @mouseenter="subclassHandle(item,index)"
        @mouseleave="subclassLeaveHandle(item,index)"
        v-show="index <= 9"
      >
        <span>{{ item.frontName }}</span>
        <span>＞</span>
      </div>
    </div>
    <!--  -->
    <div
      class="classify_mask_layer row_between_start"
      @mouseenter="subclassHandle(item,index)"
      @mouseleave="subclassLeaveHandle(item,index)"
      v-show="!isShowMaskLayer"
    >
      <div class="columns">
        <div
          class="secondary_classify_box column_start_start"
          v-for="(item,index) in secondary"
          :key="index"
          v-show="(index%2 == 0) ? true : false"
        >
          <div class="secondary_title row_between_center">
            <span>{{ item.frontName }}</span>
            <!-- <span>更多&nbsp;〉</span> -->
          </div>
          <div class="secondary_body row_start_start_wrap">
            <div
              v-for="(each,idx) in item.children"
              :key="idx"
              class="secondary_body_item_name"
              @click="toProductList(each)"
            >{{ each.frontName }}</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div
          class="secondary_classify_box column_start_start"
          v-for="(item,index) in secondary"
          :key="index"
          v-show="(index%2 == 0) ? false : true"
        >
          <div class="secondary_title row_between_center">
            <span>{{ item.frontName }}</span>
            <!-- <span>更多&nbsp;〉</span> -->
          </div>
          <div
            :class="{
            secondary_body:true,
            row_start_start_wrap:true
          }"
          >
            <div
              v-for="(each,idx) in item.children"
              :key="idx"
              class="secondary_body_item_name"
              @click="toProductList(each)"
            >{{ each.frontName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { indexFrontClass, getRotaryImage } from "@/getData.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: "banner",
  data() {
    return {
      classify: [],
      secondary: [],
      banner: [],
      isShowMaskLayer: true,
      selectedClassify: []
    };
  },

  computed: mapState(["img", "productParams"]),

  methods: {
    /**
     * 鼠标移入
     */
    subclassHandle(item, index) {
      this.isShowMaskLayer = false;
      if (!item) return;
      this.secondary = item.children;
      if (item) {
        // console.log(item);
      }
    },
    /**
     * 鼠标移出
     */
    subclassLeaveHandle(item, index) {
      this.isShowMaskLayer = true;
      if (!item) return;
    },
    /**
     * 获取分类
     */
    async indexFrontClassHandle() {
      const res = await indexFrontClass();
      this.classify = res;
    },
    /**
     * banner 图片
     */
    async getRotaryImageHandle() {
      const res = await getRotaryImage({
        showing: 1,
        typeCode: 10
      });
      this.banner = res.rows;
    },
    /**
     * 详情页
     */
    toProductDetails(id) {
      this.$router.push({
        path: "/goodsDetails",
        query: {
          id: id
        }
      });
    },
    /**
     * 商品列表
     */
    toProductList(each) {
      this.classifyHandle(each);
      this.$router.push({
        path: "/goodsList",
        query: { frontClassId: each.id }
      });
    },
    ...mapMutations(["classifyHandle"])
  },

  created() {
    this.indexFrontClassHandle();
    this.getRotaryImageHandle();
  },

  mounted() {},

  components: {}
};
</script>
<style scoped>
.columns {
  width: 483px;
  min-height: 520px;
  padding: 24px;
}
.columns:first-child {
  border-right: 2px solid #f5f5f5;
}
.secondary_title {
  padding: 5px;
  width: 100%;
  border-bottom: 2px solid #5d7ac4;
}
.secondary_title > span:first-child {
  color: #5d7ac4;
  font-size: 16px;
  font-weight: bold;
}
.secondary_title > span:last-child {
  cursor: pointer;
}
.secondary_body {
  width: 100%;
}
.secondary_body_A {
  height: 117px;
  overflow-y: hidden;
}
.secondary_body_B {
  min-height: 117px;
}
.secondary_body_item_name {
  padding: 8px 15px;
  color: #000;
}
.secondary_body_item_name:hover {
  text-decoration: underline;
  cursor: pointer;
}
.secondary_classify_box {
  width: 100%;
  min-height: 155px;
  margin-bottom: 24px;
}
.classify_banner {
  width: 1200px;
  height: 520px;
  position: relative;
}
.classify {
  width: 230px;
  height: 520px;
  background: rgba(105, 101, 101, 0.6);
  padding: 20px 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.classify_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 48px;
  font-size: 18px;
  padding: 0px 20px;
  color: white;
}
.classify_item:first-child {
  margin: 0px;
}
.banner {
  width: 1200px;
  height: 520px;
}

.classify_item:hover {
  background: #5d5dc1;
  cursor: pointer;
}

.classify_mask_layer {
  width: 970px;
  height: 520px;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner_img {
  width: 1200px;
  height: 520px;
}
</style>
