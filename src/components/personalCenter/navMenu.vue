<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:13:08
 * @LastEditTime: 2019-08-28 10:32:39
 * @LastEditors: Please set LastEditors
 -->
<!-- 侧边导航 -->
<template>
  <div style="width:180px;">
    <el-menu
      router
      :default-active="this.$router.path"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu v-for="(item,i) in navList" :key="i" :index="item.name" style="padding:0;">
        <template slot="title">
          <i class="el-icon-user" style="color: #1c7cce" v-if="item.name=='个人中心'"></i>
          <i class="el-icon-tickets" style="color: #1c7cce" v-else></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            style="padding:0;min-width:180px;"
            v-for="(ite,index) in item.child"
            :key="index"
            :index="ite.name"
          >{{ite.navItem}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openeds: ["个人中心", "订单中心"],
      navList: [
        {
          name: "个人中心",
          child: [
            { name: "/personInfo", navItem: "个人信息" },
            { name: "/accountSecurity", navItem: "账户安全" },
            { name: "/receiverAddress", navItem: "收货地址" },
            { name: "/invoiceManagement", navItem: "发票管理" },
            { name: "/myMessage", navItem: "我的消息" }
          ]
        },
        {
          name: "订单中心",
          child: [
            { name: "/myOrder", navItem: "我的订单" },
            { name: "/supplyCertificate", navItem: "供应验收单" },
            { name: "/afterSalesRecord", navItem: "售后记录" }
          ]
        }
      ]
    };
  },

  computed: {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped></style>
