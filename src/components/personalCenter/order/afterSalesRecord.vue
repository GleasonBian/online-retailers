<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-31 13:36:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-04 09:57:49
 -->
<template>
  <div>
    <ul class="acceptance_title">
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
      <span style="margin-left: 26px">订单编号</span>
      <el-input
        type="text"
        v-model="fromData.returnNumber"
        class="acceptance_input"
        size="small"
        placeholder="请输入供应单验收编号"
      ></el-input>
      <span style="margin-left: 30px">售后状态</span>
      <el-select class="acceptance_input_type" v-model="fromData.processingStateCode" size="small">
        <el-option value="1" label="退货"></el-option>
        <el-option value="2" label="换货"></el-option>
      </el-select>
      <!--<el-input type="text" v-model="fromData.applicaFormCode" class="acceptance_input_type" size="small" placeholder=""></el-input>-->
    </div>
    <div class="after_sale_search">
      <el-button
        type="primary"
        class="my_message_time_search"
        style="margin-left: 620px"
        @click="handelSaleSearch"
      >查询</el-button>
      <el-button
        type="primary"
        class="my_message_time_search"
        style="margin-left: 60px"
        @click="handelSearchNull"
      >重置</el-button>
    </div>
    <ul class="my_message_table">
      <li>
        <p style="width: 60px">序号</p>
        <p style="width: 200px">订单编号</p>
        <p style="width: 195px">创建时间</p>
        <p style="width: 140px">售后类型</p>
        <p style="width: 120px">售后状态</p>
        <p style="width: 110px">售后金额</p>
        <p style="width: 180px;">操作</p>
      </li>
      <li v-for="(item,index) of saleList.rows" :key="index">
        <p style="width: 60px">{{index+1}}</p>
        <p style="width: 200px">{{item.returnNumber}}</p>
        <p style="width: 195px">{{item.createTimeStr}}</p>
        <p style="width: 140px">{{item.returnTypeDisplay}}</p>
        <p style="width: 120px">{{item.processingStateDisplay}}</p>
        <p style="width: 110px">
          <span>{{item.returnFormGoodsVOList[0].utilPrice}}</span>
        </p>
        <p style="width: 180px;" class="my_message_detail">
          <span>
            <font @click="handelSaleDetail(item)">查看详情</font>
          </span>
          <!--:to="{ path: 'goodsDetails', query: {id: item.id}}"-->
        </p>
      </li>
    </ul>
    <el-pagination
      :total="saleList.total"
      :page-count="saleList.pageCount"
      @current-change="handelPageChange"
      class="addresspageClass"
    ></el-pagination>
  </div>
</template>

<script>
import { afterSaleInfo, salesDetail } from "@/getData.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      allList: [{ name: "售后记录", item: "" }],
      allListIndex: 0,
      userId: "",
      saleList: [],
      pageNumber: 1,
      fromData: {
        startTime: "",
        endTime: "",
        processingStateCode: "",
        returnNumber: ""
      }
    };
  },

  computed: mapState(["userInfo"]),
  created() {
    this.userId = this.userInfo.userId;
    this.handelSaleInfo();
  },
  methods: {
    handelAllChange(item, index) {
      //切换验收状态
      this.allListIndex = index;
    },
    async handelSaleInfo() {
      //默认数据
      let paramsInfo = {
        pageNo: this.pageNumber,
        userId:this.userId
      };
      const res = await afterSaleInfo(paramsInfo);
      this.saleList = res;
    },
    async handelSaleSearch() {
      //搜索
      let searchInfo = {
        pageNo: this.pageNumber,
        startTime: this.fromData.startTime,
        endTime: this.fromData.endTime,
        processingStateCode: this.fromData.processingStateCode,
        returnNumber: this.fromData.returnNumber
      };
      const res = await afterSaleInfo(searchInfo);
      this.saleList = res;
    },
    handelSearchNull() {
      //清空
      this.fromData.startTime = null;
      this.fromData.endTime = null;
      this.fromData.processingStateCode = null;
      this.fromData.returnNumber = "";
    },
    handelPageChange(page) {
      //分页
      this.pageNumber = page;
      this.handelSaleInfo();
    },
    async handelSaleDetail(item) {
      const res = await salesDetail({ returnFormId: item.id });
      let detailInfo = [];
      // console.log(res.data.returnFormGoodsVOList)
      res.data.returnFormGoodsVOList.map((item, index) => {
        detailInfo = item;
      });
      sessionStorage.setItem("salesCode", res.data.processingStateCode);
      sessionStorage.setItem("goodsInfo", JSON.stringify(detailInfo));
      this.$router.push({
        path: "/applyAfterSale",
        query: { pid: item.id }
      });
    }
  },
  mounted() {},

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
  width: 140px;
}
.my_message_search > span {
  margin-right: 25px;
}
.after_sale_search {
  width: 100%;
  display: flex;
  align-items: center;
  height: 55px;
  overflow: hidden;
}
>>> .my_message_time_search {
  width: 160px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  line-height: 10px;
}
>>> .acceptance_input {
  width: 200px;
  font-size: 14px;
}
>>> .acceptance_input_type {
  width: 150px;
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
