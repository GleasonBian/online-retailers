<!-- 店铺首页 -->
<template>
  <div class="layout store_main">
    <div class="row_between_center box_width">
      <storebarA></storebarA>
      <div class="store_banner">
        <el-carousel height="560px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="box_width new_hot"></div>
    <div class="row_between_center box_width">
      <storebarB></storebarB>
    </div>
  </div>
</template>

<script>
import storebarA from "#/store/storebarA.vue";
import storebarB from "#/store/storebarB.vue";
export default {
  name: "",
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {
    storebarA,
    storebarB
  }
};
</script>

<style scoped>
.store_main {
  margin-top: 24px;
}
.store_banner {
  width: 946px;
  height: 560px;
  background: #fc7272;
}
.new_hot {
  height: 114px;
  background: url("~assets/tit-new.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
}
</style>
