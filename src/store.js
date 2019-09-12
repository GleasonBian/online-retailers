/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-07-30 19:27:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-10 14:56:14
 */
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import * as fun from "@/getData.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 导航栏
    navBar: [
      {
        to: "/",
        name: "首页",
        color: ""
      },
      {
        to: {
          path: "/goodsList",
          query: {
            id: 123123
          }
        },
        name: "通讯设备",
        color: ""
      },
      {
        to: "/",
        name: "梁场物料",
        color: ""
      },
      {
        to: "/",
        name: "货车配件",
        color: ""
      },
      {
        to: "/brand",
        name: "企业品牌",
        color: ""
      }
    ],
    // 图片前缀
    img: process.env.VUE_APP_IMG,
    // 首页 楼层
    floor: [],
    // 已选分类
    classify: [],
    // 产品列表
    productData: [],
    // 产品详情
    productDetails: {},
    // 产品获取传参
    productParams: {
      firstFrontClassId: "", // 一级分类
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
    },
    // 店铺列表 传参
    storeParams: {
      name: "",
      sortSale: "",
      timeSort: "",
      limit: 12,
      offset: 0
    },
    // 店铺列表数据
    storeListData: [],
    // 店铺主页
    storeIndexData: {},
    // 商家主页
    classifyList: [],
    // 购物车主页
    shopCartData: {},
    // 分页总条数
    total: 0,
    // 购物车 商品数量
    shopCartCount: 0,
    // 我的 消息 数量
    messageNum: 0,
    // 登录 用户信息
    userInfo: false
  },
  getters: {
    checkedCount: state => {
      let count = 0;
      if ("shoppingCartEnterpriseVOS" in state.shopCartData) {
        state.shopCartData.shoppingCartEnterpriseVOS.forEach(element => {
          count += element.selectedArray.length;
        });
      }
      return count;
    }
  },
  mutations: {
    gotData(state, res) {
      let color = [
        {
          img: "floor1",
          hover: "floor_1"
        },
        {
          img: "floor2",
          hover: "floor_2"
        },
        {
          img: "floor3",
          hover: "floor_3"
        },
        {
          img: "floor4",
          hover: "floor_4"
        },
        {
          img: "floor5",
          hover: "floor_5"
        },
        {
          img: "floor6",
          hover: "floor_6"
        },
        {
          img: "floor7",
          hover: "floor_7"
        },
        {
          img: "floor8",
          hover: "floor_8"
        },
        {
          img: "floor9",
          hover: "floor_9"
        },
        {
          img: "floor10",
          hover: "floor_10"
        }
      ];
      let count = 0;
      res.data.forEach((element, index) => {
        if (count < 10) {
          element.floor = color[count++];
        } else {
          count = 0;
          element.floor = color[count++];
        }
      });
      state.floor = res.data;
    },
    classifyHandle(state, payload) {
      // console.log("TCL: classifyHandle -> payload", payload);
    },
    // 分类
    levelThreeHandle(state, payload) {
      state.productParams.frontClassId = payload.id;
    },
    // 商品列表
    productListHandle(state, payload) {
      state.productData = payload.rows;
      state.total = payload.total;
    },
    // 商品搜索参数重置
    productParamsReset(state) {
      state.productParams = {
        firstFrontClassId: "", // 一级分类
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
    },
    // 商品详情
    productDetailsHandle(state, payload) {
      state.productDetails = payload.data;
    },
    // 店铺列表
    SearchEnterpriseHandle(state, payload) {
      state.storeListData = payload.rows;
      state.total = payload.total;
    },
    // 店铺列表 参数处理
    storeParamsHandle({ storeParams }, payload) {
      switch (payload) {
        case "order_count":
          {
            storeParams.sortSale = payload;
            storeParams.timeSort = "";
          }
          break;
        case "create_time":
          {
            storeParams.sortSale = "";
            storeParams.timeSort = payload;
            ``;
          }
          break;
        default:
          {
            storeParams.sortSale = "";
            storeParams.timeSort = "";
          }
          break;
      }
    },
    // 商家主页
    storeIndexHandle(state, payload) {
      state.storeIndexData = payload.data;
    },
    // 分类处理
    classifyListHandle(state, payload) {
      state.classifyList = payload.data;
    },
    // 分页处理
    pagination(state, payload) {
      state[payload.param][payload.field] = payload.value;
    },
    // 导航栏处理
    navBarHandle(state, payload) {
      state.navBar = payload;
    },
    // 购物车
    userCartHandle(state, payload) {
      if ("shoppingCartEnterpriseVOS" in payload.data) {
        payload.data.shoppingCartEnterpriseVOS.forEach(item => {
          item.isIndeterminate = false;
          item.selectedArray = [];
        });
        state.shopCartData = payload.data;
      }
    },
    // 单条订单删除
    shopCartdeleteOrderHandle(state, { index, idx }) {
      let array = state.shopCartData.shoppingCartEnterpriseVOS;
      array[index].shoppingCartVOList.splice(idx, 1);
      if (array[index].shoppingCartVOList.length === 0) {
        array.splice(index, 1);
      }
    },
    // 修改购物车 数量
    shopCartCountHandle(state, param) {
      if (param !== "") {
        state.shopCartCount = param.data.count;
        state.messageNum = param.data.num;
      } else {
        state.messageNum = 0;
        state.shopCartCount = 0;
      }
    },
    // 登录
    loginInfoHandle(state) {
      let user = sessionStorage["loginInfo"];
      if (user) state.userInfo = JSON.parse(user);
      else state.userInfo = false;
    }
  },
  actions: {
    async handle({ commit }) {
      commit("gotData", await fun.floorGoods());
    },
    // 商品列表
    async productListData({ commit, state }) {
      commit(
        "productListHandle",
        await fun.productListData(state.productParams)
      );
    },
    // 商品 详情
    async productGetProduct({ commit }, { productId }) {
      commit(
        "productDetailsHandle",
        await fun.productGetProduct({
          productId: productId
        })
      );
    },
    // 商家 列表
    async SearchEnterprise({ commit, state }) {
      commit(
        "SearchEnterpriseHandle",
        await fun.enterpriseSearchEnterprise(state.storeParams)
      );
    },
    // 商家 主页
    async storeIndexDetails({ commit }, id) {
      commit("storeIndexHandle", await fun.enterpriseEnterPriseDetial(id));
    },
    // 商家 分类
    async ClassForEnterprise({ commit }, id) {
      commit("classifyListHandle", await fun.getFrontClassForEnterprise(id));
    },
    // 购物车
    async shopCartHandle({ commit }) {
      commit("userCartHandle", await fun.userCart());
    },
    // 购物车 小图标
    async showCartInfoHandle({ commit }) {
      commit("shopCartCountHandle", await fun.showCartInfo());
    },
    // 登录处理
    async loginInfo({ commit }, loginPrams) {
      const res = await fun.login(loginPrams);
      if (res.errorCode === 0) {
        sessionStorage["loginInfo"] = JSON.stringify(res.data);
        router.push({
          name: "homePage",
          params: {
            data: res.data
          }
        });
        window.location.href = "/";
        Vue.prototype.$message.success(res.message);
      } else {
        sessionStorage["loginInfo"] = false;
        Vue.prototype.$message.warning(res.message);
      }
      commit("loginInfoHandle");
    }
  }
});
