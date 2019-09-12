<!--
 * @Description: 搜索栏
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-05 15:26:12
 -->
<template>
  <div class="searchBar">
    <div class="logo" @click="toHomePageHandle"></div>
    <div></div>
    <div class="searchBar_shearchBox">
      <div class="shearchBox_select">
        <select v-model="selectValue">
          <option :value="1">商品</option>
          <option :value="2">店铺</option>
        </select>
      </div>
      <div class="shearchBox_input">
        <input
          v-if="selectValue === 1"
          placeholder="输入商品名称、规格型号、店铺名称进行搜索"
          class="search_input"
          v-model="productParams.productName"
        />
        <input
          v-else
          placeholder="输入商品名称、规格型号、店铺名称进行搜索"
          class="search_input"
          v-model="storeParams.name"
        />
      </div>
      <div class="shearchBox_button" @click="toProductORStore">搜&nbsp; &nbsp;索</div>
    </div>
    <div></div>
    <div class="searchBar_shopCart">
      <div class="shop_cart" @click="toShoppingCartHandle">
        <img src="~assets/shopCart.png" />
        <span>我的购物车</span>
        <span class="shop_cart_count">{{shopCartCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "searchBar",
  data() {
    return {
      selectValue: 1,
      count: ""
    };
  },
  created() {
    this.showCartInfoHandle();
  },
  components: {},

  computed: mapState([
    "productParams",
    "storeParams",
    "shopCartCount",
    "userInfo"
  ]),

  mounted() {},

  methods: {
    /* 搜索处理 */
    toProductORStore() {
      switch (this.selectValue) {
        case 1:
          this.$router.push({
            name: "productList"
          });
          this.$store.dispatch("productListData");
          break;
        case 2:
          this.$router.push({
            name: "storeList"
          });
          this.$store.dispatch("SearchEnterprise");
          break;
      }
    },
    toShoppingCartHandle() {
      let userInfo = this.userInfo;
      if (userInfo) {
        this.$router.replace({
          path: "/shoppingCart"
        });
      } else {
        this.$message.warning("未登录, 请登录");
        this.$router.push("login");
      }
    },
    toHomePageHandle() {
      this.$router.push("/");
    },
    ...mapMutations(["shopCartCountHandle"]),
    ...mapActions(["showCartInfoHandle"])
  }
};
</script>
<style scoped>
.logo {
  height: 58px;
  width: 110px;
  background: url("~assets/logo.png") no-repeat;
  background-size: 100%;
  background-position: center center;
  cursor: pointer;
}
.searchBar {
  width: 1200px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 152px 74px 798px 26px 150px;
  align-items: center;
  justify-items: center;
}

.searchBar_shearchBox {
  width: 800px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #1c7cce;
  box-sizing: border-box;
}

.shearchBox_select {
  display: inline-block;
  width: 100px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  color: #555;
  text-shadow: none;
  transition: box-shadow 0.25s ease;
  z-index: 2;
}

.shearchBox_select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.shearchBox_select:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}
.shearchBox_select select {
  cursor: pointer;
  padding: 8px 16px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.shearchBox_select select:focus {
  outline: none;
}

.shearchBox_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 38px;
  border: 2px solid #1c7cce;
  border-top: none;
  border-bottom: none;
}
.search_input {
  display: block;
  width: 100%;
  height: 36px;
  border: 0px;
  padding-left: 10px;
}
.shearchBox_button {
  width: 150px;
  height: 38px;
  text-align: center;
  display: inline-block;
  line-height: 38px;
  color: aliceblue;
  background: #1c7cce;
  font-size: 15px;
  text-decoration: none;
}
.shearchBox_button:hover {
  cursor: pointer;
}
.searchBar_shopCart {
  justify-self: center;
}
.shop_cart {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #999999;
  border-radius: 5px;
  color: #333333;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop_cart img {
  margin-right: 5px;
}
.shop_cart:hover {
  cursor: pointer;
}
.shop_cart_count {
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  background: red;
  color: #ffffff;
  font-size: 12px;
}
</style>
