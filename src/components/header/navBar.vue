<!--
 * @Description: 导航栏
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 14:47:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-11 14:56:24
 -->
<template>
  <div class="navBar">
    <div class="nav_bar_items">
      <div
        class="nav_bar_link"
        @click="jumpHandle(item.to)"
        v-for="(item, index) in navBar"
        :key="index"
        :style="`color:${item.color}`"
      >{{ item.name }}</div>
    </div>
    <div class="phone"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navBar",
  data() {
    return {
      statement: false
    };
  },
  computed: mapState(["navBar", "productParams"]),

  created() {},

  mounted() {},

  methods: {
    jumpHandle(to) {
      if (typeof to === "object") {
        this.productParams.firstFrontClassId = to.query.firstFrontClassId;
        if (this.statement) {
          // this.$store.dispatch("productListData");
          this.productParams = {
            secondFrontClassId: "", // 二级分类
            frontClassId: "", // 三级分类id
            productStatusCode: 0,
            brandName: "", // 品牌名称
            productName: "", // 产品名称
            startPrice: "", // 最小价格
            endPrice: "", //  最大价格
            pageNo: 1,
            pageSize: 12,
            offset: 0
          };
        }
      }

      this.$router.push(to);
    }
  },

  components: {}
};
</script>
<style>
.navBar {
  align-self: flex-end;
  margin-top: 30px;
  width: 968px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.phone {
  width: 130px;
  height: 20px;
  background: url("~assets/mall_tel.png") no-repeat;
  background-size: 100%;
  background-position: center center;
}
.home_page {
  color: #1c7cce;
}
.item,
.home_page:hover {
  cursor: pointer;
}
.nav_bar_items {
  width: 825px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav_bar_link {
  margin-right: 65px;
  cursor: pointer;
}
.nav_bar_link:hover {
  color: #1c7cce;
}
</style>
