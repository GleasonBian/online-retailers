<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-05 11:20:47
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-05 09:47:01
 -->
<template>
  <div class="column_start_center storebarB_box">
    <div class="goods_class">
      <div class="goods_title bg"></div>
      <el-tree :data="classifyList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="goods_sell_well">
      <div class="goods_sell_well_title"></div>
      <div class="goods_sell_well_body column_start_start">
        <router-link
          class="goods_sell_well_item row_center"
          v-for="(item, index) in sjgtwMallGoodsVOS"
          :key="index"
          :to="{
            path: '/goodsDetails',
            query:{
              id: item.productId
            }
          }"
        >
          <div class="sell_well_item_index">{{index+1}}</div>
          <img class="sell_well_item_img" :src="img + item.mainImagePath" alt />
          <div class="sell_well_item_box column_between_center">
            <div class="sell_well_item_name">{{ item.goodsName }}</div>
            <!--<div class="sell_well_item_price">¥ {{ item.goodsPrice }}</div>-->
            <div class="sell_well_item_price">¥ {{ userInfo?'面议':'登录-查看价格' }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "frontName"
      }
    };
  },

  computed: mapState({
    sjgtwMallGoodsVOS: state => state.storeIndexData.sjgtwMallGoodsVOS,
    img: state => state.img,
    classifyList: state => state.classifyList,
    userInfo:state=>state.userInfo
  }),

  methods: {
    handleNodeClick(data) {
      if (data.level === 3) {
        this.$router.push({
          path: "/storeProductList",
          query: {
            frontClassId: data.id,
            supplierId: this.$route.query.supplierId
          }
        });
        this.$parent.params.frontClassId = data.id;
        this.$parent.getEnterpriseGoodsHandle();
      }
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.storebarB_box {
  width: 230px;
}
.goods_class {
  width: 230px;
  min-height: 415px;
  background: #ffffff;
}
.goods_title {
  width: 100%;
  height: 40px;
  background: url("~assets/goods_classify.png");
}
.goods_sell_well {
  width: 230px;
  margin-top: 24px;
  background: #ffffff;
  min-height: 684px;
}
.goods_sell_well_title {
  width: 230px;
  height: 40px;
  background: url("~assets/sell_well.png");
}
.goods_sell_well_body {
  padding: 15px 0px 15px 0px;
}
.goods_sell_well_item {
  width: 100%;
  height: 100px;
  margin-bottom: 24px;
}
.sell_well_item_index {
  width: 20px;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  font-weight: 500;
}
.sell_well_item_img {
  width: 100px;
  height: 100px;
}

.sell_well_item_box {
  height: 95px;
  width: 90px;
  padding: 8px 0px;
}
.sell_well_item_name {
  width: 100%;
  height: 60px;
  overflow: hidden;
  display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.sell_well_item_name:hover {
  color: #1c7cce;
}
.sell_well_item_price {
  color: red;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
