<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 11:02:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-20 14:01:47
 -->
<template>
  <div class="layout">
    <div class="box_width column_center">
      <div
        :class="{
        article_steps: true,
        bg: true,
        one: shopCartStep === 1,
        two: shopCartStep === 2,
        three: shopCartStep === 3,
        four: shopCartStep === 4
      }"
      ></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "shoppingCart",
  data() {
    return {
      steps: 1
    };
  },

  computed: mapState({
    shopCartStep: state => state.shopCartStep
  }),

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
}
.one {
  background: url("~assets/con-4.png");
}
.two {
  background: url("~assets/con-3.png");
}
.three {
  background: url("~assets/con-2.png");
}
.four {
  background: url("~assets/con-1.png");
}
</style>
