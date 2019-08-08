import Vue from "vue";
import Vuex from "vuex";

import * as fun from "@/getData.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      productStatusCode: 0,
      brandName: "", // 品牌名称
      productName: "", // 产品名称
      frontClassId: "", // 三级分类id
      startPrice: "", // 最小价格
      endPrice: "", //  最大价格
      limit: 12,
      offset: 0
    },
    // 分页总条数
    total: 0
  },
  mutations: {
    gotData(state, res) {
      state.floor = res.data;
    },
    classifyHandle(state, payload) {
      // classify 没有元素直接 将 payload 添加到数组
      state.classify.length === 0 && state.classify.push(payload);
      // 遍历 函数
      const ret = item => {
        return payload.level === item.level;
      };
      // 存在同一级 返回 true
      let arr = [];
      state.classify.forEach(element => {
        if (payload.level === element.level) arr.push(1);
      });

      // 如果存在 同一级
      if (arr.length > 0) {
        // 找到 该 元素位置
        let idx = state.classify.findIndex(ret);
        // 替换 该 元素
        state.classify.splice(idx, 1, payload);
      } else state.classify.push(payload); // 不存在 直接添加 元素
    },
    levelThreeHandle(state, payload) {
      state.productParams.frontClassId = payload.id;
    },
    productListHandle(state, payload) {
      state.productData = payload.rows;
      state.total = payload.total;
    },
    productDetailsHandle(state, payload) {
      state.productDetails = payload.data;
    },
    // 分页处理
    pagination(state, payload) {
      state[payload.param][payload.field] = payload.value;
    }
  },
  actions: {
    async handle({ commit }) {
      commit("gotData", await fun.floorGoods());
    },
    async productListData({ commit, state }) {
      commit(
        "productListHandle",
        await fun.productListData(state.productParams)
      );
    },
    async productGetProduct({ commit }, { productId }) {
      commit(
        "productDetailsHandle",
        await fun.productGetProduct({
          productId: productId
        })
      );
    }
  }
});
