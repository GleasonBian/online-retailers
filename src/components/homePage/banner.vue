<template>
  <div class="classify_banner">
    <div class="classify">
      <div
        class="classify_item"
        v-for="(item,index) in LevelOneData"
        :key="index"
        @click="LevelTwo(item,index)"
      >
        <span>{{item.frontName}}</span>
        <span>＞</span>
      </div>
    </div>
    <div class="classify_mask_layer">
      <el-carousel height="560px" class="banner">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="LevelTwo" v-show="isLevelTwoShow">
        <div
          class="LevelTwo_item"
          v-for="(item,index) in LevelTwoData"
          :key="index"
          @click="LevelThree(item,index)"
        >
          <span>{{item.frontName}}</span>
          <span>＞</span>
        </div>
      </div>
      <div class="LevelThree" v-show="isLevelThreeShow" @mouseleave="subclassLeaveHandle()">
        <div
          class="LevelThree_item"
          v-for="(item,index) in LevelThreeData"
          :key="index"
          @click="JumpHandle(item,index)"
        >
          <span>{{item.frontName}}</span>
          <span>＞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadChildListData } from "@/getData.js";
export default {
  name: "banner",
  data() {
    return {
      LevelOneData: [],
      LevelTwoData: [],
      LevelThreeData: [],
      isLevelTwoShow: false,
      isLevelThreeShow: false
    };
  },

  computed: {},

  methods: {
    /**
     * 二级分类
     */
    async LevelTwo(item, index) {
      this.isLevelTwoShow = true;
      const res = await loadChildListData({ parentId: item.id });
      this.LevelTwoData = res.data;
    },
    /**
     * 三级分类
     */
    async LevelThree(item, index) {
      this.isLevelThreeShow = true;
      const res = await loadChildListData({ parentId: item.id });
      this.LevelThreeData = res.data;
    },
    /**
     * 一级分类
     */
    async LevelOne() {
      const res = await loadChildListData({ parentId: 0 });
      this.LevelOneData = res.data;
    },
    /**
     * 鼠标移出
     */
    subclassLeaveHandle() {
      this.isLevelTwoShow = false;
      this.isLevelThreeShow = false;
    },
    JumpHandle(item) {
      this.$router.push({ path: "goodsList", query: { id: item.id } });
    }
  },

  created() {
    this.LevelOne();
  },

  mounted() {},

  components: {}
};
</script>
<style scoped>
.classify_banner {
  width: 1200px;
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.classify_mask_layer {
  width: 970px;
  height: 560px;
  position: relative;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.classify_list {
  width: 960px;
  z-index: 10;
}
.banner {
  z-index: 10;
  width: 960px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.classify {
  width: 230px;
  height: 560px;
  background: #5d7ac4;
  border-left: 1px solid #ffffff;
  padding: 10px 0px;
  box-sizing: border-box;
}

.classify_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 36px;
  font-size: 16px;
  padding: 3px 10px;
  color: white;
}
.classify_item:hover {
  background: #5d5dc1;
  cursor: pointer;
}
.LevelTwo,
.LevelThree {
  position: absolute;
  top: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 230px;
  height: 560px;
  background: #5d7ac4;
  border-left: 1px solid #ffffff;
  padding: 10px 0px;
  box-sizing: border-box;
  z-index: 10;
}
.LevelTwo_item,
.LevelThree_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 36px;
  font-size: 16px;
  padding: 3px 20px 3px 10px;
  color: white;
}
.LevelTwo_item:hover,
.LevelThree_item:hover {
  background: #5d5dc1;
  cursor: pointer;
}
.LevelThree {
  left: 230px;
}
</style>
