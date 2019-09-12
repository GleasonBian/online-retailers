<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 13:49:59
 * @LastEditTime: 2019-09-04 10:10:15
 * @LastEditors: OBKoro1
 -->
<template>
  <div>
    <ul class="acceptance_title">
      <!--<li class="active">全部验收单</li>-->
      <!--<li>待验收</li>-->
      <!--<li>已验收</li>-->
      <li
        v-for="(item,index) of allList"
        :class="{active:index==allListIndex}"
        @click="handelAllChange(item,index)"
      >{{item.name}}</li>
    </ul>
    <div class="my_message_search">
      <span>创建时间</span>
      <el-date-picker
        v-model="fromData.startTime"
        size="small"
        type="datetime"
        class="my_messeage_dataTime"
        value-format="yyyy-MM-dd"
        placeholder="开始日期"
      ></el-date-picker>
      <p>&nbsp;</p>
      <el-date-picker
        v-model="fromData.endTime"
        size="small"
        type="datetime"
        class="my_messeage_dataTime"
        value-format="yyyy-MM-dd"
        placeholder="结束日期"
      ></el-date-picker>
      <span style="margin-left: 28px">供应单编号</span>
      <el-input
        type="text"
        v-model="fromData.applicaFormCode"
        class="acceptance_input"
        size="small"
        placeholder="请输入供应单验收编号"
      ></el-input>
      <el-button type="primary" class="my_message_time_search" @click="handelSupplySearch">搜索</el-button>
    </div>
    <ul class="my_message_table">
      <li>
        <p style="width: 60px">序号</p>
        <p style="width: 180px">供应单编号</p>
        <p style="width: 135px">创建时间</p>
        <p style="width: 160px">供应验收单状态</p>
        <p style="width: 120px">商品总数</p>
        <p style="width: 80px">单位</p>
        <p style="width: 110px">验收金额</p>
        <p style="width: 180px;">操作</p>
      </li>
      <li v-for="(item,index) of applicaList.rows" :key="index">
        <p style="width: 60px">{{index+1}}</p>
        <p style="width: 180px">{{item.orderNumber}}</p>
        <p style="width: 135px">{{item.createTimeStr}}</p>
        <p style="width: 160px">{{item.stateStr}}</p>
        <p style="width: 120px">{{item.goodsCount}}</p>
        <p style="width: 80px">{{item.applicaFormGoodsVO.unit}}</p>
        <p style="width: 110px">{{item.applicaFormAmount}}</p>
        <p style="width: 180px;" class="my_message_detail">
          <span>
            <router-link
              :to="{path:'receipt',query:{id:item.id}}"
              tag="font"
              v-if="item.stateStr=='待验收'"
            >确认收货</router-link>
            <router-link :to="{path:'receipt',query:{id:item.id}}" tag="font" v-else>查看详情</router-link>
          </span>
          <!--:to="{ path: 'goodsDetails', query: {id: item.id}}"-->
        </p>
      </li>
    </ul>
    <el-pagination
      :total="applicaList.total"
      :page-count="applicaList.pageCount"
      @current-change="handelPageChange"
      class="addresspageClass"
    ></el-pagination>
  </div>
</template>

<script>
import { applicaInfo } from "@/getData.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      allList: [
        { name: "全部验收单", item: "" },
        { name: "待验收", item: "10" },
        { name: "已验收", item: "20" }
      ],
      allListIndex: 0,
      value1: "",
      value2: "",
      checkAll: [],
      userId: "",
      applicaList: [],
      pageNumber: 1,
      fromData: {
        stateCode: "",
        startTime: "",
        endTime: "",
        applicaFormCode: ""
      },
      orderJson: "",
      objData: {}
    };
  },

  computed: mapState(["userInfo"]),

  created() {
    if (this.$route.query.id) {
      this.orderJson = this.$route.query.id;
    } else {
      this.orderJson = "";
    }
    this.userId = this.userInfo.userId;
    this.handelList();
  },
  mounted() {},

  methods: {
    async handelList() {
      let objData;
      if (JSON.stringify(this.orderJson) == "{}") {
        objData = {
          userId: this.userId,
          pageNo: this.pageNumber,
          stateCode: this.fromData.stateCode,
          type: 2
        };
        console.log(this.orderJson,1)
      } else {
        objData = {
          userId: this.userId,
          pageNo: this.pageNumber,
          stateCode: this.fromData.stateCode,
          parentOrderId: this.orderJson,
          type: 2
        };
      }
      // orderNumber
      const res = await applicaInfo(objData);
      this.applicaList = res;
    },
    handelPageChange(page) {
      //分页
      this.pageNumber = page;
      this.handelList();
    },
    handelAllChange(item, index) {
      //切换验收状态
      this.allListIndex = index;
      this.fromData.stateCode = item.item;
      this.applicaList = [];
      this.handelList();
    },
    async handelSupplySearch() {
      //搜索
      let searchInfo = {
        userId: this.userId,
        pageNo: this.pageNumber,
        stateCode: this.fromData.stateCode,
        applicaFormCode: this.fromData.applicaFormCode,
        startTime: this.fromData.startTime,
        endTime: this.fromData.endTime
      };
      const res = await applicaInfo(searchInfo);
      this.applicaList = res;
    }
  },
  components: {}
};
</script>

<style scoped>
.acceptance_title {
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background: white;
}
.acceptance_title li {
  width: 13%;
  text-align: center;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid #409eff;
  font-weight: bold;
  color: #409eff;
}
.my_message_search {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
}
.my_message_search > p {
  width: 40px;
  border-top: 1px solid #000000;
  margin-top: 19px;
}
>>> .my_messeage_dataTime {
  width: 150px;
}
.my_message_search > span {
  margin-right: 25px;
}
.my_message_time_search {
  width: 160px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  margin-left: 86px;
}
>>> .acceptance_input {
  width: 200px;
  font-size: 14px;
}
.my_message_table {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  margin-top: 10px;
}
.my_message_table li {
  display: flex;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.my_message_table li:first-child {
  background: #409eff;
  color: white;
}
.my_message_table li:last-child {
  border-bottom: 1px solid lightgray;
}
.my_message_table li p {
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  overflow: hidden;
}
.my_message_table li p:last-child {
  border-right: 1px solid lightgray;
}
.my_message_detail span {
  width: 100%;
  display: block;
}
.my_message_detail span font {
  color: #1c7cce;
  margin: 0 10px;
  cursor: pointer;
}
.addresspageClass {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
