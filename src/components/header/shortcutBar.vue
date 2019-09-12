<!--
 * @Description: 快捷栏
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-26 09:26:38
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-09 11:30:09
 -->
<template>
  <div class="container_layout">
    <div class="shortcutBar_user_name">
      <div class="name">{{ userInfo ? userInfo.name : "未登录" }}</div>
      <div class="user_name"></div>
    </div>
    <div></div>
    <div class="shortcutBar_entrance row_end_center">
      <router-link to="/personInfo" v-show="userInfo">个人中心</router-link>
      <span v-show="userInfo">|</span>
      <router-link to="/myOrder" v-show="userInfo">我的订单</router-link>
      <span v-show="userInfo">|</span>
      <router-link to="/myMessage" v-show="userInfo">我的消息({{messageNum}})</router-link>
      <span v-show="userInfo">|</span>
      <span @click="loginOutHandle" class="loginOut" v-if="userInfo">退出登录</span>
      <router-link to="/login" v-else>登录</router-link>
      <span>|</span>
      <router-link to="/storeJoin">商家入驻</router-link>
    </div>
    <div class="recommends-content-item">
      <span>下载客户端</span>
      <div class="recommends-content-item__info"></div>
    </div>
  </div>
</template>

<script>
import { logout } from "@/getData.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "shortcutBar",
  data() {
    return {};
  },

  created() {
    this.loginInfoHandle();
  },
  components: {},

  computed: mapState(["userInfo", "messageNum"]),

  mounted() {},

  methods: {
    async loginOutHandle() {
      await logout();
      sessionStorage.removeItem("loginInfo");
      this.$message.success("退出登录成功");
      this.$router.replace({ path: "/" });
      this.loginInfoHandle();
      this.showCartInfoHandle();
    },
    ...mapActions(["showCartInfoHandle"]),
    ...mapMutations(["loginInfoHandle"])
  }
};
</script>
<style>
/* 整体布局 */
.container_layout {
  width: 1200px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 180px 382px 528px 110px;
  align-items: center;
  height: 50px;
  font-size: 14px;
}

/* 用户名称 */
.shortcutBar_user_name {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shortcutBar_user_name > .name {
  min-width: 65px;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}

.shortcutBar_entrance > span {
  margin: 0px 15px;
}

.user_name {
  width: 11px;
  height: 7px;
  background: url("~assets/Under.png") no-repeat;
  background-size: 100%;
  background-position: center center;
}

.recommends-content-item {
  width: 100%;
  height: 20px;
  position: relative;
  top: 2px;
  text-align: right;
}

.recommends-content-item:hover {
  cursor: pointer;
}

.recommends-content-item:hover .recommends-content-item__info {
  height: 94px;
}

.recommends-content-item__info {
  position: absolute;
  top: 35px;
  left: 30px;
  width: 94px;
  height: 0px;
  background: url("~assets/Qr_code.png");
  background-size: 100%;
  background-position: center center;
  box-sizing: border-box;
  transition: 0.3s;
}

.loginOut {
  padding: 0px;
  margin: 0px;
  cursor: pointer;
}
</style>
