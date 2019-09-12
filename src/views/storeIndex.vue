<!--
 * @Description: 店铺首页
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-04 13:21:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-06 12:00:38
 -->
<template>
  <div class="layout store_main">
    <div class="row_between_start box_width">
      <storebarA></storebarA>
      <div class="store_banner">
        <el-carousel height="560px">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img :src="item" alt style="width:100%;height:100%;" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="box_width new_hot"></div>
    <div class="row_between_start box_width">
      <storebarB></storebarB>
      <div class="product_list_box row_start_start">
        <router-link
          :to="{
          path: '/goodsDetails',
          query:{
            id: item.productId
          }
        }"
          class="list_item_box column_between_start"
          v-for="(item,index) in tjGoodsVOS"
          :key="index"
        >
          <img class="list_item_img" :src="img + item.mainImagePath" alt />
          <div class="list_item_info_box column_center">
            <div class="item_info_title item_info_main uts">{{item.goodsName}}</div>
            <div class="item_info_brand item_info_main uts">{{item.brandName}}</div>
            <!--<div class="item_info_price item_info_main uts">¥ {{item.goodsPrice}}</div>-->
            <div class="item_info_price item_info_main uts">¥ {{userInfo?'面议':'登录-查看价格'}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import storebarA from "#/store/storebarA.vue";
import storebarB from "#/store/storebarB.vue";
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "storeIndex",
  data() {
    return {
      imgList: [
        "http://file.dev.mall.sjgtw/M00/00/01/wKgBH11pI0OEV9FaAAAAAP1uPkM404.jpg",
        "http://file.dev.mall.sjgtw/M00/00/01/wKgBH11pI1WEIpu2AAAAAJgByoY933.jpg",
        "http://file.dev.mall.sjgtw/M00/00/01/wKgBH11pI1yEbBHvAAAAAEUDOm8994.jpg"
      ]
    };
  },

  computed: mapState({
    tjGoodsVOS: state => state.storeIndexData.tjGoodsVOS,
    img: state => state.img,
    navBar: state => state.navBar,
    userInfo:state=>state.userInfo
  }),

  methods: {
    ...mapActions(["storeIndexDetails", "ClassForEnterprise"]),
    ...mapMutations(["navBarHandle"]),
    /**
     * 设置 导航栏
     */
    setNavBarHandle() {
      this.navBarHandle([
        {
          to: "/",
          name: "返回商城",
          color: ""
        },
        {
          to: {
            path: "/storeProductList",
            query: {
              supplierId: this.$route.query.supplierId,
              frontClassId: this.$route.query.frontClassId
            }
          },
          name: "商品列表",
          color: ""
        }
      ]);
    }
  },

  created() {
    this.storeIndexDetails({
      id: this.$route.query.supplierId
    });
    this.ClassForEnterprise({
      id: this.$route.query.supplierId
    });
    this.setNavBarHandle();
  },

  mounted() {},
  updated() {
    this.setNavBarHandle();
  },

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
.product_list_box {
  width: 946px;
}
.list_item_box {
  width: 210px;
  height: 260px;
  box-sizing: border-box;
  background: #ffffff;
  cursor: pointer;
  margin-right: 35px;
  margin-bottom: 30px;
}
.product_list_box > .list_item_box:nth-child(4n) {
  margin-right: 0px;
}
.list_item_box:hover {
  box-shadow: rgba(51, 51, 51, 0.2) 5px 3px 10px;
}
.list_item_img {
  width: 100%;
  height: 170px;
}
.list_item_info_box {
  width: 100%;
  height: 90px;
}
.item_info_title {
  color: #666666;
  font-size: 14px;
}
.item_info_title:hover {
  color: #1c7cce;
}
.item_info_brand {
  color: #999999;
  font-size: 12px;
}
.item_info_price {
  color: #e40838;
  font-size: 14px;
}
.item_info_main {
  height: 25px;
  line-height: 25px;
  width: 90%;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
