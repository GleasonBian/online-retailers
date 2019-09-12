<!--
 * @Description: 三级分类
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-01 10:26:33
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 14:21:17
 -->
<template>
  <div class="classify_layout column_center">
    <div class="classify_container column_center">
      <div class="selected_classify row_between_center">
        <div>
          <span style="color:#333; font-size:16px;">已选类目</span>
          <span
            v-for="(item,index) in classify"
            :key="index"
            class="classify"
          >&nbsp;＞{{item.frontName}}</span>
        </div>
        <div class="total_goods">共 {{total}} 件商品</div>
      </div>
      <div class="classify_items">
        <div class="row_between_center classify_items_layout">
          <div class="classify_items_name">一级类目</div>
          <div class="row_start_start classify_items_body">
            <!-- <div
              class="classify_items_body_text"
              v-for="(item,index) in LevelOneData"
              :key="index"
              v-if="index < 8"
              @click="LevelTwo(item,index)"
            >{{item.frontName}}</div>-->
            <div class="classify_items_body_text" @click="LevelTwo({id:1},index)">通信产品</div>
          </div>
          <div class="classify_items_more" @click="dropDownHandle('showdropDownOne')">
            <!-- <span v-show="LevelOneData.length >= 8">更多 ﹀</span> -->
          </div>
        </div>
        <transition name="fade">
          <div class="classify_items_drop_down_body" v-show="showdropDownOne">
            <div class="container_box row_start_start">
              <div
                class="classify_items_drop_down_body_name"
                v-for="(item,index) in LevelOneData"
                :key="index"
                v-if="index >= 8"
                @click="LevelTwo(item,index)"
              >{{item.frontName}}</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="classify_items" v-show="LevelTwoData.length> 0">
        <div class="row_between_center classify_items_layout">
          <div class="classify_items_name">二级类目</div>
          <div class="row_start_start classify_items_body">
            <div
              class="classify_items_body_text"
              v-for="(item,index) in LevelTwoData"
              :key="index"
              v-if="index < 8"
              @click="LevelThree(item,index)"
            >{{item.frontName}}</div>
          </div>
          <div class="classify_items_more" @click="dropDownHandle('showdropDownTwo')">
            <span v-show="LevelTwoData.length >= 8">更多 ﹀</span>
          </div>
        </div>
        <transition name="fade">
          <div class="classify_items_drop_down_body" v-show="showdropDownTwo">
            <div class="container_box row_start_start">
              <div
                class="classify_items_drop_down_body_name"
                v-for="(item,index) in LevelTwoData"
                :key="index"
                v-if="index >= 8"
                @click="LevelThree(item,index)"
              >{{item.frontName}}</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="classify_items" v-show="LevelThreeData.length> 0">
        <div class="row_between_center classify_items_layout">
          <div class="classify_items_name">三级类目</div>
          <div class="row_start_start classify_items_body">
            <div
              class="classify_items_body_text"
              v-for="(item,index) in LevelThreeData"
              :key="index"
              v-if="index < 8"
              @click="JumpHandle(item,index)"
            >{{item.frontName}}</div>
          </div>
          <div class="classify_items_more" @click="dropDownHandle('showdropDownThree')">
            <span v-show="LevelThreeData.length >= 8">更多 ﹀</span>
          </div>
        </div>
        <transition name="fade">
          <div class="classify_items_drop_down_body" v-show="showdropDownThree">
            <div class="container_box row_start_start">
              <div
                class="classify_items_drop_down_body_name"
                v-for="(item,index) in LevelThreeData"
                :key="index"
                v-if="index >= 8"
                @click="JumpHandle(item,index)"
              >{{item.frontName}}</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { loadChildListData } from "@/getData.js";
export default {
  name: "",
  data() {
    return {
      showdropDownOne: false,
      showdropDownTwo: false,
      showdropDownThree: false,
      LevelOneData: [],
      LevelTwoData: [],
      LevelThreeData: [],
      index:''
    };
  },

  computed: mapState(["classify", "total", "productParams"]),

  methods: {
    dropDownHandle(param) {
      this[param] = !this[param];
    },
    /**
     * 一级分类
     */
    async LevelOne() {
      const res = await loadChildListData({ parentId: 0 });
      this.LevelOneData = res.data;
    },
    /**
     * 二级分类
     */
    async LevelTwo(item, index) {
      this.isLevelTwoShow = true;
      // this.productParams.secondFrontClassId = item.id;
      const res = await loadChildListData({ parentId: item.id });
      this.LevelTwoData = res.data;
      this.classifyHandle(item);
      this.LevelThreeData = [];
    },
    /**
     * 三级分类
     */
    async LevelThree(item, index) {
      this.isLevelThreeShow = true;
      const res = await loadChildListData({ parentId: item.id });
      this.LevelThreeData = res.data;
      this.classifyHandle(item);
    },
    JumpHandle(item) {
      this.classifyHandle(item);
      this.$router.push({
        path: "goodsList",
        query: { frontClassId: item.id }
      });
      this.productParams.offset=0
      this.levelThreeHandle({ id: item.id });
      this.$store.dispatch("productListData");
    },
    ...mapMutations(["classifyHandle", "levelThreeHandle"])
  },

  created() {
    this.LevelOne();
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.classify_layout {
  width: 100vw;
}
.classify_container {
  width: 1200px;
}
.selected_classify {
  width: 100%;
  height: 50px;
  padding: 0px 30px 0px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.classify_items {
  width: 100%;
  min-height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
  padding: 0px 30px;
}
.classify {
  font-size: 16px;
  color: #1c7cce;
}
.total_goods {
  font-size: 16px;
  color: #000000;
}
.classify_items_layout {
  min-height: 60px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
  /* margin-bottom: 10px; */
}
.classify_items_name {
  width: 90px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  color: rgb(28, 124, 206);
}
.classify_items_more {
  width: 90px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  text-align: right;
}
.classify_items_more:hover {
  cursor: pointer;
}
.classify_items_body {
  width: 900px;
  overflow: hidden;
}
.classify_items_drop_down_body {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  width: 100%;
}
/* .classify_items_drop_down_body::after {
  flex: auto;
  content: "";
} */
.classify_items_drop_down_body_name {
  margin-bottom: 10px;
  height: 30px;
  margin-right: 70px;
  line-height: 30px;
  text-align: left;
}
.classify_items_body_text {
  margin-right: 50px;
}
.classify_items_body_text:last-child {
  margin-right: 0px;
}
.classify_items_drop_down_body_name:hover,
.classify_items_body_text:hover {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container_box {
  width: 1000px;
  margin-left: 120px;
}
</style>
