<!-- 品牌搜索框 -->
<template>
  <div class="brand_search_container row_center">
    <div class="brand_search_box">
      <div class="row_center synthesis_order">综合排序</div>
      <div></div>
      <div class="row_center">价格区间</div>
      <div></div>
      <div class="row_center interval_price">
        <input type="text" />-
        <input type="text" />
      </div>
      <div></div>
      <div class="row_center">品牌</div>
      <div></div>
      <div class="row_center brand_input">
        <input type="text" placeholder="输入品牌进行搜索" />
      </div>
      <div></div>
      <div class="row_center search_button">搜 索</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "brandSearch",
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
.brand_search_container {
  width: 100vw;
}
.brand_search_box {
  height: 50px;
  width: 1200px;
  margin: 24px 0px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 120px 40px 60px 20px 130px 90px 30px 20px 215px 20px 120px auto;
  justify-items: center;
  align-items: center;
}
.interval_price input {
  display: block;
  width: 60px;
  height: 20px;
  border: 1px solid #cccccc;
}
.brand_input input {
  display: block;
  width: 215px;
  height: 20px;
  border: 1px solid #cccccc;
  font-size: 12px;
}
.synthesis_order {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.search_button {
  width: 120px;
  height: 30px;
  background: #1c7cce;
  border-radius: 5px;
  color: #ffffff;
}
.search_button:hover {
  cursor: pointer;
}
</style>
