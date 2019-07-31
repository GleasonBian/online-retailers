<!-- 快捷栏 -->
<template>
  <div class="container">
    <div class="shortcutBar_welcome">
      <span>世界高铁网</span>
      <span>欢迎您！</span>
    </div>
    <div></div>
    <div class="shortcutBar_user_name">
      <div class="name">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</div>
      <div class="user_name"></div>
    </div>
    <div></div>
    <div class="shortcutBar_entrance">
      <router-link to="/personalCenter">个人中心</router-link>
      <span>|</span>
      <router-link to="/myOrder">我的订单</router-link>
      <span>|</span>
      <router-link to="/myNews">
        我的消息
        <span>(2)</span>
      </router-link>
      <span>|</span>
      <router-link to="/login">登录/退出登录</router-link>
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
export default {
  name: "shortcutBar",
  data() {
    return {};
  },

  created() {},
  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style>
/* 整体布局 */
.container {
  width: 1410px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 130px 185px 180px 330px 475px 110px;
  align-items: center;
  height: 50px;
  font-size: 14px;
}
/* 欢迎框 */
.shortcutBar_welcome {
  text-align: right;
}
/* 用户名称 */
.shortcutBar_user_name {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shortcutBar_user_name > .name {
  width: 150px;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 入口框 */
.shortcutBar_entrance {
  display: flex;
  justify-content: space-around;
  align-items: center;
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
}
.recommends-content-item span:hover {
  cursor: pointer;
}
.recommends-content-item:hover .recommends-content-item__info {
  height: 94px;
}
.recommends-content-item__info {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 94px;
  height: 0px;
  background: url("~assets/Qr_code.png");
  background-size: 100%;
  background-position: center center;
  box-sizing: border-box;
  transition: 0.3s;
}
</style>
