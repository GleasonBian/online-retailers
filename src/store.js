import Vue from "vue";
import Vuex from "vuex";

import * as fun from "@/getData.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 首页 楼层
    floor: []
  },
  mutations: {
    gotData(state, res) {
      state.floor = res.data;
    }
  },
  actions: {
    async handle({ commit }) {
      commit("gotData", await fun.floorGoods());
    }
  }
});
