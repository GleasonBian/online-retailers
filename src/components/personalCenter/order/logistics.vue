<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 20:20:35
 * @LastEditTime: 2019-09-05 14:12:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="background:#f5f5f5">
    <headerCom></headerCom>
    <div class="personal_box">
      <div class="personal_title">
        <div class="receipt_title">
          <router-link to="/" tag="span">首页</router-link>>
          <router-link to="myOrder" tag="span">订单中心</router-link>>
          <span style="color: blue">订单详情</span>
        </div>

        <div class="receipt_detail">
          <div class="receipt_detail_title">包裹信息</div>
          <ul class="receipt_detail_main">
            <!-- <li style="border-right: 1px solid #e3e3e3;width:10%;">订单信息</li> -->
            <li>
              <div style="width: 1120px;">
                <div class="bg-white" v-for="(n,index) in logisticsList" :key="index">
                  <div
                    style="display: flex;align-items: center;justify-content: flex-start;height:40px;"
                  >{{n.applicateState}}</div>
                  <!-- style="width: 92%; margin-left: 4%;margin: auto;padding-left: 15px;padding-right: 15px;" -->
                  <div style="background:#f5f5f5;padding:15px 0px;">
                    <div class="track-rcol" style="margin:0px 20px;">
                      <div class="track-list">
                        <ul class="ul_div">
                          <div v-for="(item,index) in n.logisticsInfoVOS" :key="index">
                            <li class="finall" v-if="index===0">
                              <div></div>
                              <i class="node-icon"></i>
                              <span class="txt">{{item.acceptTime | formatDate}}</span>
                              <span class="time">{{item.acceptStation}}</span>
                            </li>
                            <!-- <div class="line"></div> -->
                            <li v-if="index > 0 && index !== n.logisticsInfoVOS.length-1">
                              <i class="node-icon"></i>
                              <span class="txt">{{item.acceptTime | formatDate}}</span>
                              <span class="time">{{item.acceptStation}}</span>
                            </li>
                            <!-- <div class="line"></div> -->
                            <li v-if="index === n.logisticsInfoVOS.length-1" class="first finall">
                              <i class="div-spilander"></i>
                              <i class="node-icon"></i>
                              <span class="txt">{{item.acceptTime | formatDate}}</span>
                              <span class="time">{{item.acceptStation}}</span>
                            </li>
                            <div class="line"></div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="logOrderStyle">
                    <div>运单号码:{{n.expressCode}}</div>
                    <div>物流公司:{{n.expressCompanyName}}</div>
                    <div>收货地址:{{n.address}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- <div class="div-bg bg-white">
          <div style="height: 0.5rem;width: 100%;background-color:#f7f7f7"></div>
        </div>-->
      </div>
    </div>
    <div class="footer bg"></div>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
import { findLogisticsList } from "@/getData";
export default {
  name: "Logistics",
  data() {
    return {
      logisticsList: [],
      paramsId: ""
    };
  },
  methods: {
    async getLofistics() {
      const res = await findLogisticsList({ parentOrderId: this.paramsId });
      console.log("123", res);
      let logData = JSON.parse(JSON.stringify(res.data));
      this.logisticsList = logData;
      console.log(this.logisticsList);
    }
  },
  mounted() {},
  created() {
    this.paramsId = this.$route.query.id;
    this.getLofistics();
  },
  components: {
    headerCom
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>
<style scoped>
.message-text {
  font-family: MicrosoftYaHei;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 3rem;
  letter-spacing: 0rem;
  color: #333333;
  width: 50%;
}
.fontblack {
  color: #666666;
}
.img2 {
  width: 0.81rem;
  height: 0.8rem;
  float: right;
}
.addressshow2 {
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  width: 75%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
}
.addressshow1 {
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  width: 75%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
}
.orderTitle {
  font-size: 1rem;
  color: #333333;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  height: 2.5rem;
}
.orderDetail {
  font-size: 0.8rem;
  color: #666666;
  text-align: left;
}
.border-ceter {
  width: 92%;
  padding-left: 15px;
  padding-right: 15px;
}
.pay-button {
  width: 88%;
  height: 2.6rem;
  position: relative;
  background-color: #1c7cce;
  color: white;
  margin-left: 6%;
}
ul li {
  list-style: none;
  font-size: 1rem;
}
/* ul {
  padding-left: 1.5rem;
} */
.track-rcol {
}
.track-list {
  position: relative;
}
.track-list li {
  position: relative;
  /* padding: 0px 0 1.5rem 25px;
  line-height: 1rem;
  border-left: 1px solid #d9d9d9; */
  color: #999;
}
.track-list li.first {
  color: #1c7cce;
  padding-top: 0;
  width: 100%;
  /* text-align: left; */
  /* border-left: 1px solid #d9d9d9; */
}
.track-list li .node-icon {
  position: absolute;
  left: -7px;
  border-radius: 0.5rem;
  width: 1rem;
  height: 1rem;
  background-color: #666666;
}
.track-list li.first .node-icon {
  background-color: #1c7cce;
  position: absolute;
  left: -7px;
  border-radius: 0.5rem;
  width: 1rem;
  height: 1rem;
  /* background-color: #666666; */
}
.track-list li .time {
  /* margin-right: 20px; */
  position: relative;
  /* top: 4px; */
  display: inline-block;
  vertical-align: middle;
  color: #666666;
  width: 100%;
  text-align: left;
}
.track-list li .txt {
  position: relative;
  display: inline-block;
  vertical-align: top;
  color: #333333;
  width: 225px;
  margin-left: 10px;
}
.track-list li.first .time {
  text-align: left;
  width: 100%;
  color: #1c7cce;
}
.track-list li.first .txt {
  color: #1c7cce;
  /* text-align: left;
  width: 94%; */
}
.track-list li.finall {
  position: relative;
  /* padding: 0px 0 1.5rem 25px; */
  line-height: 18px;
  border-color: white;
  /* border-left: 1px solid #ffffff; */
  color: #999;
}
.track-list li.finall .div-spilander {
  width: 1px;
  position: absolute;
  position: absolute;
  left: -1.5px;
  height: 0.5rem;
  background-color: #d9d9d9;
}

.footer {
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
  margin-top: 0px;
}

.personal_box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  margin: 24px auto;
}
.personal_title {
  width: 1200px;
  /* margin-left: 20px; */
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
  /* height: 500px; */
}
.receipt_detail_main li:first-child {
  width: 100%;
  /* border-left: 1px solid #e3e3e3; */
  /* border-right: 1px solid #e3e3e3; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.receipt_detail_main li:last-child {
  width: 100%;
  /* border-right: 1px solid #e3e3e3; */
  /* padding: 20px 0; */
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
.line {
  height: 10px;
  border-left: 1px solid #666666;
}
.ul_div li {
  font-size: 18px;
}
.ul_div div:last-child .line {
  display: none;
}
.logOrderStyle {
  display: flex;
  margin: 10px 0;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #f5f5f5;
}
.logOrderStyle div {
  margin: 10px 0;
}
</style>