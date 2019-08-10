<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-05 11:20:47
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-10 22:14:58
 -->
<template>
  <div class="column_start_center storebarB_box">
    <div class="goods_class">
      <div class="goods_title bg"></div>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="goods_sell_well">
      <div class="goods_sell_well_title"></div>
      <div class="goods_sell_well_body column_start_start">
        <router-link
          class="goods_sell_well_item row_center"
          v-for="(item, index) in sjgtwMallGoodsVOS"
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
            <div class="sell_well_item_name">{{item.goodsName}}</div>
            <div class="sell_well_item_price">¥ {{item.goodsPrice}}</div>
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
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  computed: mapState({
    sjgtwMallGoodsVOS: state => state.storeIndexData.sjgtwMallGoodsVOS,
    img: state => state.img
  }),

  methods: {
    handleNodeClick(data) {
      console.log(data);
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
.sell_well_item_price {
  color: red;
}
</style>
