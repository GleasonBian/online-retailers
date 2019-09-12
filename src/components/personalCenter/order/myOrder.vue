<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 14:03:24
 * @LastEditTime: 2019-09-02 14:23:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <el-tabs v-model="activeName" class="tabsStyle" :stretch="true">
      <el-tab-pane label="全部订单" name="1">
        <allOrder></allOrder>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="2">
        <obligationPage></obligationPage>
      </el-tab-pane>
      <el-tab-pane label="待收货" name="3">
        <receivingPage></receivingPage>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="4">
        <completedPage></completedPage>
      </el-tab-pane>
      <el-tab-pane label="已关闭" name="5">
        <closedPage></closedPage>
      </el-tab-pane>
    </el-tabs>-->

    <div class="menuList">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="item.id"
          :class="{active:dataJson.orderStateCode==item.code}"
          @click="getNum(item)"
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="tabCon">
      <!-- <div v-for="(itemCon,index) in tabContents" v-show="index == num"> -->
      <el-form :inline="true" :model="formInline" ref="formOrder" class="demo-form-inline">
        <el-form-item label="创建时间:">
          <el-date-picker
            v-model="formInline.region"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="订单编号:">
          <el-input v-model="formInline.orderNumber" placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>

      <div class="sonClass">
        <div class="sonClass_a" v-for="(item,i) in orderList" :key="i">
          <div class="fb">
            <img v-show="item.orderStateCode === 20" src="~assets/待付款.png" alt />
            <img v-show="item.orderStateCode === 30" src="~assets/待收货.png" alt />
            <img v-show="item.orderStateCode === 32" src="~assets/已发货.png" alt />
            <img v-show="item.orderStateCode === 60" src="~assets/已完成.png" alt />
            <img v-show="item.orderStateCode === 100" src="~assets/已关闭.png" alt />
          </div>
          <div class="sonClass_a_div_a">
            <div class="sonClass_a_div_b">
              <div class="sonClass_a_a">
                <div>订单编号：{{item.orderNumber}}</div>
                <div>下单时间：{{item.createTimeStr}}</div>
                <div>订单总额：¥{{item.orderAmount}}(含运费)</div>
              </div>
            </div>

            <div
              v-if="item.orderFormGoodsOneVO != null"
              style="display: flex;width:100%;height:215px;"
            >
              <div
                style="padding:10px 0;width:866px;display: flex;align-items: center;justify-content: center;"
              >
                <div class="sonClass_a_c">
                  <img
                    :src="link + item.orderFormGoodsOneVO.picturePath"
                    style="border:1px solid #f5f5f5"
                    alt
                  />
                  <div>
                    <div>{{item.orderFormGoodsOneVO.goodsName}}</div>
                    <div>规格型号：{{item.orderFormGoodsOneVO.typeModel}}</div>
                  </div>
                  <div>品牌：¥{{item.orderFormGoodsOneVO.brandName}}</div>
                  <div>单位：{{item.orderFormGoodsOneVO.unit}}</div>
                  <div>价格：¥{{item.orderFormGoodsOneVO.unitPrice}}</div>
                  <div>数量：{{item.orderFormGoodsOneVO.goodsCount}}</div>
                  <div style="color:red;">小计：¥{{item.orderFormGoodsOneVO.subtotal}}</div>
                </div>
              </div>
              <div class="btnStyle" v-show="item.orderStateCode === 20">
                <el-button type="text" @click="toOrderDetails(item)">查看详情</el-button>
                <el-button type="text" @click="toPrice(item)">去付款</el-button>
                <el-button type="text" @click="candelOrder(item)">取消订单</el-button>
              </div>

              <div class="btnStyle" v-show="item.orderStateCode === 30">
                <el-button type="text" @click="toSupplyCertificate(item)">查看供应验收单</el-button>
                <el-button type="text" @click="toOrderDetails(item)">查看详情</el-button>
                <el-button type="text" @click="toLogistics(item)">查看物流</el-button>
              </div>

              <div class="btnStyle" v-show="item.orderStateCode === 32">
                <el-button type="text" @click="toSupplyCertificate(item)">查看供应验收单</el-button>
                <el-button type="text" @click="toOrderDetails(item)">查看详情</el-button>
                <el-button type="text" @click="toLogistics(item)">查看物流</el-button>
              </div>

              <div class="btnStyle" v-show="item.orderStateCode === 60">
                <el-button type="text" @click="toOrderDetails(item)">查看详情</el-button>
                <el-button type="text" @click="toSupplyCertificate(item)">查看供应验收单</el-button>
                <el-button type="text" @click="toLogistics(item)">查看物流</el-button>
              </div>

              <div class="btnStyle" v-show="item.orderStateCode === 100">
                <el-button type="text" @click="toOrderDetails(item)">查看详情</el-button>
              </div>
            </div>

            <div v-else style="display: flex;width:100%;height:215px;">
              <div
                style="padding:10px 0;width:1000px;display: flex;align-items: center;justify-content: center;"
              >暂无商品</div>
            </div>
            <!-- <div class="contract_end">共1种</div> -->
          </div>
        </div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="dataJson.pageNo"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { loadListData, candelOrder } from "@/getData.js";
export default {
  data() {
    return {
      link: process.env.VUE_APP_IMG,
      form: "formOrder",
      activeName: "1",
      num: "",
      list: [
        { title: "全部订单", code: "" },
        { title: "待付款", code: 20 },
        { title: "待收货", code: 30 },
        { title: "已完成", code: 60 },
        { title: "已关闭", code: 100 }
      ],
      orderList: [],
      formInline: {
        orderNumber: "",
        region: ""
      },
      dataJson: {},
      currentPage: 1,
      pageSize: 5,
      total: 0
    };
  },

  computed: {},

  methods: {
    // tab
    getNum(item) {
      // this.num = item.code;
      this.dataJson.orderStateCode = item.code;
      this.formInline.region = [];
      this.formInline.orderNumber = "";
      this.dataJson.startTime = "";
      this.dataJson.endTime = "";
      this.dataJson.orderNumber = "";
      this.getOrderList();
    },
    // 订单列表
    async getOrderList() {
      const res = await loadListData(this.dataJson);
      console.log("订单列表", res);
      this.orderList = res.rows;
      this.total = res.total;
    },
    // 查询按钮
    onSubmit() {
      (this.dataJson.startTime = this.formInline.region[0]
        ? this.formInline.region[0] + " 00:00:00"
        : ""),
        (this.dataJson.endTime = this.formInline.region[1]
          ? this.formInline.region[1] + " 23:59:59"
          : "");
      this.dataJson.orderNumber = this.formInline.orderNumber;

      console.log("submit!", this.dataJson);
      this.getOrderList();
    },
    // 重置
    resetForm(formName) {
      this.formInline.region = [];
      this.formInline.orderNumber = "";
      this.dataJson.startTime = "";
      this.dataJson.endTime = "";
      this.dataJson.orderNumber = "";
      this.getOrderList();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.dataJson.pageSize = val;
      this.dataJson.pageNo = 1;
      this.getOrderList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.dataJson.pageNo = val;
      this.getOrderList();
    },
    // 查看供应验收单
    toSupplyCertificate(item) {
      this.$router.push({ path: "/supplyCertificate", query: { id: item.id } });
    },
    // 查看订单详情
    toOrderDetails(item) {
      this.$router.push({ path: "/myOrderDetails", query: { id: item.id } });
    },
    // 查看物流
    toLogistics(item) {
      this.$router.push({ path: "/logistics", query: { id: item.id } });
    },
    // 去支付
    toPrice(item) {
      window.location.href = `${process.env.VUE_APP_URL}alipay/pcPay?outTradeNo=${item.id}`;
    },
    // 取消订单
    async candelOrder(item) {
      const res = await candelOrder({ orderId: item.id });
      console.log("23", res);
      if (res.data) {
        this.$message.success(res.message);
      } else {
        this.$message.error(res.message);
      }
      this.getOrderList();
    }
  },

  created() {
    this.dataJson.userId = JSON.parse(
      sessionStorage.getItem("loginInfo")
    ).userId;
    this.dataJson.orderStateCode = "";
    this.dataJson.pageSize = this.pageSize;
    this.dataJson.pageNo = 1;
    this.getOrderList();
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.tabsStyle {
  border: 1px solid #f5f5f5;
  background: white;
}
.tabsStyle >>> .el-tabs__header {
  margin: 0;
}

.active {
  color: #1c7cce;
  border-bottom: 2px solid #1c7cce;
  width: 140px;
}

#app {
  width: 800px;
  height: 400px;
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.menuList {
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #717181;
  font-size: 16px;
  line-height: 78px;
  background: #fff;
}

ul li {
  text-align: center;
  cursor: pointer;
  width: 140px;
  font-size: 20px;
}

.tabCon {
}

.demo-form-inline {
  display: flex;
  background: #f5f5f5;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 0;
}
.demo-form-inline .el-form-item {
  margin-bottom: 0px;
}
.sonClass {
  width: 100%;
  background: #f5f5f5;
}
.sonClass .sonClass_a:nth-last-child(1) {
  border: none;
}
.sonClass_a_c {
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 98%;
  margin: 0 auto;
}
.sonClass_a_c:nth-last-of-type(1) {
  border: none;
}
.sonClass_a {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  background: white;
  position: relative;
}
.fb {
  position: absolute;
  /* border: 1px solid red; */
  top: 0px;
  right: 0;
}
.sonClass_a_div_a {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 256px;
}
.sonClass_a_div_b {
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  display: flex;
}
.sonClass_a_a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.sonClass_a_c img {
  width: 50px;
  height: 50px;
}
.sonClass_a_c > div {
  /* border: 1px solid skyblue; */
  /* width: 15%; */
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.contract_end {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
}
.btnStyle {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #f5f5f5;
  width: 134px;
  align-items: center;
  justify-content: space-around;
}
.btnStyle >>> .el-button {
  margin-left: 0px;
  font-size: 14px;
}
</style>
