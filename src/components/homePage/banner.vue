<!-- 分类 与 banner -->
<template>
  <div class="classify_banner">
    <div class="classify">
      <div
        class="classify_item"
        v-for="(item,index) in classify"
        :key="index"
        @mouseenter="subclassHandle(item,index)"
        @mouseleave="subclassLeaveHandle(item,index)"
      >
        <span>{{item.name}}</span>
        <span>＞</span>
      </div>
    </div>
    <div class="banner" v-show="isShowMaskLayer">
      <el-carousel height="560px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div
      class="classify_mask_layer"
      v-show="!isShowMaskLayer"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.3)"
      @mouseenter="subclassHandle()"
      @mouseleave="subclassLeaveHandle()"
    >class</div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      classify: [
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" },
        { name: "工具及配件", id: "123123123" }
      ],
      isShowMaskLayer: true,
      loading: false
    };
  },

  computed: {},

  methods: {
    /**
     * 子类处理
     */
    subclassHandle(item, index) {
      console.log("进入");
      this.isShowMaskLayer = false;
      this.loading = true;
      if (!item) return;
    },
    subclassLeaveHandle(item, index) {
      console.log("离开");
      this.loading = false;
      this.isShowMaskLayer = true;
      if (!item) return;
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>
<style>
.classify_banner {
  width: 1200px;
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.classify {
  width: 230px;
  height: 560px;
  background: #5d7ac4;
  padding: 10px 0px;
}
.banner {
  width: 970px;
  height: 560px;
}
.classify_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 40px;
  font-size: 16px;
  padding: 3px 10px;
  color: white;
}
.classify_item:hover {
  background: #5d5dc1;
  cursor: pointer;
}

.classify_mask_layer {
  width: 970px;
  height: 560px;
  background: #5d5dc1;
  position: relative;
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
</style>
