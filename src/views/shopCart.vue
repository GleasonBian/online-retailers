<!-- 购物车 -->
<template>
  <div class="layout">
    <div class="box_width column_center">
      <div class="article_steps bg"></div>
      <div class>
        <div>购物车</div>
        <div>
          <span>已选 &nbsp; 2 &nbsp; 件商品</span>
          <div>结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
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
.article_steps {
  margin: 24px;
  width: 826px;
  height: 45px;
  background: url("~assets/con-4.png");
}
</style>
