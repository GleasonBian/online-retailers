<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 15:10:30
 * @LastEditTime: 2019-09-02 13:46:58
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div style="background:#fafafa">
    <headerCom></headerCom>
    <div class="personal_box">
      <div class="personal_title">
        <div class="receipt_title">
          <router-link to="/" tag="span">首页</router-link>>
          <router-link to="myOrder" tag="span">订单中心</router-link>>
          <span style="color: blue">订单详情</span>
        </div>

        <div class="receipt_detail">
          <div class="receipt_detail_title">订单详情</div>
          <ul class="receipt_detail_main">
            <li>订单信息</li>
            <li>
              <p>订单编号:{{this.detailList.orderNumber}}</p>
              <p>下单时间:{{this.detailList.createTimeStr}}</p>
              <p>订单金额:¥{{this.detailList.orderAmount}}(含运费)</p>
              <p>应付金额:¥{{this.detailList.orderAmount}}</p>
            </li>
          </ul>
          <ul class="receipt_detail_main">
            <li>收货信息</li>
            <li>
              <p>收货人:{{this.detailList.expressLinkMan}}</p>
              <p>收货人手机号:{{this.detailList.expressLinkManPhone}}</p>
              <p>收货地址:{{this.detailList.expressAddress}}</p>
            </li>
          </ul>
          <ul class="receipt_detail_main">
            <li>发票信息</li>
            <li v-if="this.detailList.invoiceVO">
              <p>发票类型:{{this.detailList.invoiceVO.invoiceTypeString == "" ? '暂无信息' : this.detailList.invoiceVO.invoiceTypeString}}</p>
              <p>单位名称:{{this.detailList.invoiceVO.companyName == "" ? '暂无信息' : this.detailList.invoiceVO.companyName}}</p>
              <p>纳税人识别码:{{this.detailList.invoiceVO.taxpayCode == "" ? '暂无信息' : this.detailList.invoiceVO.taxpayCode}}</p>
              <p>注册地址:{{this.detailList.invoiceVO.registryAddress == "" ? '暂无信息' : this.detailList.invoiceVO.registryAddress}}</p>
              <p>注册电话:{{this.detailList.invoiceVO.registryPhone == "" ? '暂无信息' : this.detailList.invoiceVO.registryPhone}}</p>
              <p>开户银行:{{this.detailList.invoiceVO.openAccount == "" ? '暂无信息' : this.detailList.invoiceVO.openAccount}}</p>
              <p>开户银行账户:{{this.detailList.invoiceVO.accountNumber == "" ? '暂无信息' : this.detailList.invoiceVO.accountNumber}}</p>
              <p>收票人姓名:{{this.detailList.invoiceVO.receiverName == "" ? '暂无信息' : this.detailList.invoiceVO.receiverName}}</p>
              <p>收票人手机:{{this.detailList.invoiceVO.receiverPhone == "" ? '暂无信息' : this.detailList.invoiceVO.receiverPhone}}</p>
            </li>
            <li v-else>
              <p>发票类型:暂无信息</p>
              <p>单位名称:暂无信息</p>
              <p>纳税人识别码:暂无信息</p>
              <p>注册地址:暂无信息</p>
              <p>注册电话:暂无信息</p>
              <p>开户银行:暂无信息</p>
              <p>开户银行账户:暂无信息</p>
              <p>收票人姓名:暂无信息</p>
              <p>收票人手机:暂无信息</p>
            </li>
          </ul>
          <ul class="receipt_detail_main">
            <li>其他</li>
            <li>
              <p>订单备注:{{this.detailList.remark}}</p>
            </li>
          </ul>
        </div>

        <div class="receipt_detail">
          <div class="receipt_detail_title">商品明细</div>
          <div class="sonClass">
            <div class="sonClass_a" v-for="(item,i) in goodsInfoList" :key="i">
              <div class="sonClass_a_b">{{item.enterpriseName}}</div>
              <div style="width:100%;padding:10px 0">
                <div class="sonClass_a_c" v-for="(n,index) in item.orderFromGoodsList" :key="index">
                  <img
                    v-if="n.picturePath"
                    style="border:1px solid #f5f5f5;"
                    :src="link + n.picturePath"
                    alt
                    srcset
                  />
                  <img
                    v-else
                    style="border:1px solid #f5f5f5;"
                    src="components/static/img/222.jpeg"
                    alt
                    srcset
                  />
                  <div>
                    <div>{{n.goodsName}}</div>
                    <div>规格型号：{{n.typeModel}}</div>
                  </div>
                  <div>品牌：{{n.brandName}}</div>
                  <div>单位：{{n.unit}}</div>
                  <div>价格：¥{{n.unitPrice}}</div>
                  <div>采购数量：{{n.goodsCount}}</div>
                  <div style="color:red;">小计：¥{{n.subtotal}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="width:100%;margin-top: 10px;display: flex;align-items: center;justify-content: flex-end;"
        >
          <el-button
            v-show="this.detailList.orderStateCode === 20 ? true : false"
            type="primary"
            @click="toPrice"
          >去支付</el-button>
        </div>

        <!-- <div class="receipt_detail">
          <div class="receipt_detail_title">商品明细</div>
          <div class="receipt_detail_goods" v-for="(item,index) of this.goodsDetail.orderFormVOList"
              :key="index">
            <div class="receipt_goods_title">
              <span>{{item}}</span>
            </div>
            <div
              class="receipt_goods_main"
              v-for="(item,index) of this.goodsDetail.orderFormVOList"
              :key="index"
            >
              <img :src="item.goodsImg" />
              <div>
                <li style="text-align: left">{{item.goodsName}}</li>
                <li>规格型号:{{item.model}}</li>
              </div>
              <p>品牌:{{item.brandName}}</p>
              <p>单位:{{item.unit}}</p>
              <p>价格:{{item.goodsUtilPrice}}</p>
              <p>采购数量:{{item.applicaNum}}</p>
              <p>
                小计:￥
                <span style="color: red">{{item.goodsTotalPrice}}</span>
              </p>
              <el-button type="primary" style="margin-left: 20px">申请售后</el-button>
            </div>
          </div>
        </div>-->
        <!-- <div class="receipt_goods_mains">
          合计验收总金额:
          <span>123</span>
        </div>-->
        <!-- <el-button type="primary" @click="handelReceiptShow">确认收货</el-button> -->
        <!-- <el-pagination
          :total="goodsDetail.total"
          :page-count="goodsDetail.pageCount"
          @current-change="handelPageChange"
          class="addresspageClass"
        ></el-pagination>-->
      </div>
    </div>
    <div class="footer bg"></div>
  </div>
</template>
<script>
import headerCom from "#/header/header.vue";
import navMenu from "#/personalCenter/navMenu.vue";
import { orderAllInfo } from "@/getData";
export default {
  name: "receipt",
  components: {
    headerCom,
    navMenu
  },
  data() {
    return {
      link: process.env.VUE_APP_IMG,
      paramsId: "",
      detailList: {},
      goodsInfoList: []
    };
  },
  created() {
    let baseurl =
      process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
        ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
        : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'
    this.uploadPath = baseurl + "/applicaForm/uploadFile";
    this.paramsId = this.$route.query.id;
  },
  mounted() {
    this.handelList();
  },
  methods: {
    async handelList() {
      const res = await orderAllInfo({ orderId: this.paramsId });
      console.log("detailList", res);
      if (JSON.stringify(res.data) != "{}") {
        this.detailList = res.data;
        this.goodsInfoList = res.data.orderFormVOList;
      } else {
        this.$message.error(res.message);
      }
    },
    // 去支付
    toPrice(item) {
      sessionStorage["downOrders"] = item;
      window.location.href = `${process.env.VUE_APP_URL}alipay/pcPay?outTradeNo=${this.paramsId}`;
    }
  }
};
</script>
<style scoped>
.personal_box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  margin: 24px auto;
}
.personal_title {
  width: 1000px;
  margin-left: 20px;
}
.footer {
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
  margin-top: 0px;
}
.receipt_title {
  display: flex;
  align-items: center;
  height: 30px;
}
.receipt_title span {
  display: block;
  margin-right: 5px;
  cursor: pointer;
}
.receipt_detail {
  width: 100%;
  background: #ffffff;
  margin-top: 20px;
}
.receipt_detail_title {
  width: 100%;
  text-align: left;
  height: 50px;
  border: 1px solid #e3e3e3;
  line-height: 50px;
  text-indent: 20px;
}
.receipt_detail_main {
  display: flex;
  border-bottom: 1px solid #e3e3e3;
}
.receipt_detail_main li:first-child {
  width: 10%;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.receipt_detail_main li:last-child {
  width: 90%;
  border-right: 1px solid #e3e3e3;
  padding: 20px 0;
}
.receipt_detail_main li:last-child p {
  text-align: left;
  margin-left: 50px;
  margin-bottom: 10px;
}
.receipt_detail_main li:last-child p:first-child {
  /*margin-top: 20px;*/
}
.receipt_detail_main li:last-child p:last-child {
  margin-bottom: 0px;
}
.receipt_detail_goods {
  overflow: hidden;
}
.receipt_goods_title {
  text-align: left;
  width: 95%;
  margin: auto;
  margin-top: 15px;
}
.receipt_goods_main {
  display: flex;
  align-items: center;
  width: 95%;
  text-align: left;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
}
.receipt_goods_main div {
  width: 20%;
  margin-left: 15px;
  margin-right: 5px;
}
.receipt_goods_main p {
  width: 10%;
  margin-left: 15px;
}
.receipt_goods_main > img {
  width: 60px;
  height: 60px;
}
.receipt_goods_mains {
  width: 95%;
  margin: auto;
  text-align: right;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.receipt_goods_mains span {
  color: red;
}
.addresspageClass {
  width: 100%;
  margin-top: 20px;
}
>>> .receipt_modal_detail .el-dialog__header {
  text-align: left;
}
.receipt_modal_upload {
  display: flex;
  align-items: center;
}

.contract_title {
  display: inline-block;
  padding: 10px 2px;
  border-bottom: 2px solid #1577fe;
  color: #1577fe;
}
.mr_b10 {
  margin-bottom: 10px;
}

.sonClass {
  border: 1px solid #ddd;
  width: 100%;
}
.sonClass_a_c {
  /* border-bottom: 1px solid #ddd; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.sonClass_a_c:nth-last-of-type(1) {
  border: none;
}
.sonClass_a > div {
  width: 100%;
  margin: 10px auto;
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
  justify-content: flex-end;
}
.sonClass_a_b {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-indent: 20px;
}
</style>