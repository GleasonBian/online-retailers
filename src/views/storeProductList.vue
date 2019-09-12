<!--
 * @Description: 商家商品列表
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-05 15:50:35
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-10 10:17:47
 -->
<template>
  <div class="layout store_product_list">
    <div class="box_width row_between_start">
      <div>
        <storebarA class="storebarA"></storebarA>
        <storebarB></storebarB>
      </div>
      <div class="prod_list_container">
        <div class="all_product">| &nbsp; 全部商品</div>
        <div class="sort_search_box row_start_center">
          <div class="sort_search_text">排序</div>
          <div class="sort_search_select row_between_start">
            <span
              :class="{
              isActive: active === 1 ? true: false,
              common: true
            }"
              @click="activeHandle(1)"
            >默认排序</span>
            <span
              :class="{
              isActive: active === 2 ? true: false,
              common: true
            }"
              @click="activeHandle(2)"
            >
              销量
              {{
              params.sortPrice === "goodsPrice desc"
              ? '↓'
              : '↑'
              }}
            </span>
            <span
              :class="{
              isActive: active === 3 ? true: false,
              common: true
            }"
              @click="activeHandle(3)"
            >
              价格
              <img src="~assets/Under.png" alt />
            </span>
          </div>
          <div class="price_interval_text">价格区间:</div>
          <div class="row_center interval_price">
            <input
              type="text"
              v-model="params.minPrice"
              @keyup="params.minPrice=minPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
            />-
            <input
              type="text"
              v-model="params.maxPrice"
              @keyup="params.maxPrice=maxPrice.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"
            />
          </div>
          <div class="search_btn" @click="storeSearchHandle">搜&nbsp;索</div>
        </div>
        <div class="prod_list_box row_start_start">
          <router-link
            class="prod_item_box_main column_start_start"
            v-for="(item, index) in data"
            :key="index"
            :to="{path:'/goodsDetails',query:{id:item.productId}}"
          >
            <img class="prod_item_img" :src="img + item.mainImagePath" alt />
            <div class="prod_item_main uts column_between_center">
              <div class="prod_item_title text_left">{{item.goodsName}}</div>
              <div class="prod_item_brand text_left">品牌: {{item.brandName}}</div>
              <div class="prod_item_unit text_left">单位: {{item.unit}}</div>
              <div class="prod_item_spec text_left">型号: {{item.typeModel}}</div>
              <div class="prod_item_spec text_left">销量: {{item.salesVolume}}</div>
              <!--<div class="prod_item_price text_left">¥ &nbsp; {{item.goodsPrice}}</div>-->
              <div class="prod_item_price text_left">¥ &nbsp; {{userMain?'面议':'登录-查看价格'}}</div>
            </div>
          </router-link>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="params.pageNo"
          :page-sizes="[16, 24, 32, 64]"
          :page-size="params.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import storebarA from "#/store/storebarA.vue";
import storebarB from "#/store/storebarB.vue";
import { getEnterpriseGoods } from "@/getData.js";
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "storeProductList",
  data() {
    return {
      active: 1,
      data: [],
      params: {
        sortSale: "salesVolume desc", // 销量
        sortPrice: "goodsPrice desc", // 价格 高=>底  goodsPrice desc  低=>高 goodsPrice desc
        supplierId: this.$route.query.supplierId, // 商家id
        frontClassId: this.$route.query.frontClassId
          ? this.$route.query.frontClassId
          : "",
        minPrice: "", // 最小价格
        maxPrice: "", // 最大价格
        pageNo: 1,
        pageSize: 16,
        offset: 0
      },
      currentPage: 1,
      total: 0,
      userMain:[]
    };
  },

  computed: mapState({
    img: state => state.img,
  })
  ,

  created() {
    let userInfoList  = JSON.parse(sessionStorage.getItem('loginInfo'))
    this.userMain = userInfoList
    console.log(this.userMain)
    this.setNavBarHandle();
    this.getEnterpriseGoodsHandle();
    this.storeIndexDetails({
      id: this.$route.query.supplierId
    });
    this.ClassForEnterprise({
      id: this.$route.query.supplierId
    });
  },
  methods: {
    async getEnterpriseGoodsHandle() {
      const res = await getEnterpriseGoods(this.params);
      this.data = res.rows;
      this.total = res.total;
    },
    activeHandle(val) {
      this.active = val;
      if (val === 2) {
        this.params.sortPrice === "goodsPrice desc"
          ? (this.params.sortPrice = "goodsPrice asc")
          : (this.params.sortPrice = "goodsPrice desc");
      }
      this.getEnterpriseGoodsHandle();
    },
    handleSizeChange(val) {
      this.params.pageSize = this.params.offset * val;
      this.getEnterpriseGoodsHandle();
    },
    handleCurrentChange(val) {
      this.params.pageNo = val;
      this.params.offset = (this.params.pageNo - 1) * this.params.pageSize;
      this.getEnterpriseGoodsHandle();
    },
    /**
     * 商家列表 导航条
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
            path: "/storeIndex",
            query: {
              supplierId: this.$route.query.supplierId,
              frontClassId: this.$route.query.frontClassId
            }
          },
          name: "店铺主页",
          color: ""
        }
      ]);
    },
    /**
     * 店铺列表搜索
     */
    storeSearchHandle() {
      this.getEnterpriseGoodsHandle();
    },
    ...mapActions(["storeIndexDetails", "ClassForEnterprise"]),
    ...mapMutations(["navBarHandle"])
  },

  updated() {
    this.setNavBarHandle();
  },
  mounted() {},

  components: {
    storebarA,
    storebarB
  },
  watch: {}
};
</script>

<style scoped>
.common {
  cursor: pointer;
}
.isActive {
  color: #1c7cce;
}
.store_product_list {
  margin-top: 24px;
}
.storebarA {
  margin-bottom: 24px;
}
.prod_list_container {
  width: 946px;
}
.prod_list_box {
  width: 946px;
  padding-top: 24px;
  min-height: 1496px;
}
.all_product {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  text-align: left;
  color: #1c7cce;
  margin-bottom: 24px;
}
.sort_search_box {
  width: 100%;
  height: 60px;
  background: #ffffff;
  font-size: 18px;
}
.prod_item_box_main {
  width: 212px;
  height: 350px;
  background: #ffffff;
  margin-right: 32px;
  margin-bottom: 18px;
}
.prod_list_box > .prod_item_box_main:nth-child(4n) {
  margin-right: 0px;
}
/* .prod_item_box_main :hover {
  border-top: 2px solid #1c7cce;
} */
.sort_search_text {
  padding: 0px 24px;
  color: #666666;
}
.sort_search_select {
  border: 1px solid #e6e6e6;
  width: 300px;
  height: 30px;
  padding: 3px 10px;
  font-size: 15px;
}
.interval_price input {
  display: block;
  width: 60px;
  height: 24px;
  border: 1px solid #cccccc;
  color: #1c7cce;
}
.price_interval_text {
  color: #666666;
  margin: 0px 24px 0px 60px;
}
.search_btn {
  width: 120px;
  height: 40px;
  border-radius: 8px;
  background: #1c7cce;
  line-height: 40px;
  color: #ffffff;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 600;
}
.search_btn:hover {
  cursor: pointer;
}
.prod_item_img {
  width: 100%;
  height: 170px;
}
.prod_item_main {
  width: 200px;
  height: 170px;
}
.prod_item_main div {
  width: 85%;
}

.text_left {
  text-align: left;
}
.prod_item_title {
  font-size: 16px;
  font-weight: 600;
}
.prod_item_brand,
.prod_item_unit,
.prod_item_spec {
  color: #808080;
}
.prod_item_price {
  color: red;
  font-size: 16px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
.prod_item_box_main:hover {
  box-shadow: rgba(51, 51, 51, 0.2) 1px 1px 1px;
  border-top: 2px solid #1c7cce;
}
</style>
