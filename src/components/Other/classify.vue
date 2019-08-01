<!-- 三级分类 -->
<template>
  <div class="classify_layout column_center">
    <div class="classify_container column_center">
      <div class="selected_classify row_between_center">
        <div>
          <span style="color:#333; font-size:16px;">已选类目</span>&nbsp;＞
          <span class="classify">一级类目</span>&nbsp;＞
          <span class="classify">二级类目</span>&nbsp;＞
          <span class="classify">三级类目</span>
        </div>
        <div class="total_goods">共 121212 件商品</div>
      </div>
      <div class="classify_items">
        <div class="row_between_center classify_items_layout">
          <div class="classify_items_name">一级类目</div>
          <div class="row_between_center classify_items_body">
            <div>类目名称</div>
            <div>类目名称</div>
            <div>类目名称</div>
            <div>类目名称</div>
            <div>类目名称</div>
            <div>类目名称</div>
          </div>
          <div class="classify_items_more" @click="dropDownHandle">更多 ﹀</div>
        </div>
        <transition name="fade">
          <div class="classify_items_drop_down_body row_between_center_wrap" v-show="showdropDown">
            <div class="classify_items_drop_down_body_name"></div>
            <div class="classify_items_drop_down_body_name"></div>
            <div class="classify_items_drop_down_body_name"></div>
            <div class="classify_items_drop_down_body_name"></div>
            <div class="classify_items_drop_down_body_name"></div>
            <div class="classify_items_drop_down_body_name"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      showdropDown: false
    };
  },

  computed: {},

  methods: {
    dropDownHandle() {
      this.showdropDown = !this.showdropDown;
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
/* box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2); */
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
  /* border-bottom: none; */
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
  width: 166px;
  height: 30px;
  line-height: 30px;
  border: 1px solid seagreen;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
