<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:38:54
 * @LastEditTime: 2019-09-06 11:12:11
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div>
    <div style="background:#f5f5f5">
      <headerCom></headerCom>
      <div class="personal_box">
        <div class="apply_box">
          <div class="receipt_title">
            <router-link to="/" tag="span">首页</router-link>/
            <router-link to="myOrder" tag="span">订单中心</router-link>/
            <span style="color: blue">订单详情</span>
          </div>
          <ul class="apply_title">
            <!--<li :class="salesType==1?'sales_active':''">买家申请售后</li>-->
            <!--<li :class="salesType==10?'sales_active':''">卖家处理申请</li>-->
            <!--<li :class="salesType==20?'sales_active':''">买家退货</li>-->
            <!--<li :class="salesType==40?'sales_active':''">退款完毕</li>-->
            <li :class="salesType==1?'sales_active':''">
              <div class="apply_title_d3">买家申请售后</div>
              <p class="d4"><span></span></p>
            </li>
            <li :class="salesType==10?'sales_active':''">
              <div class="apply_title_d3">买家处理申请</div>
              <p class="d4"><span></span></p>
            </li>
            <li :class="salesType==20?'sales_active':''">
              <div class="apply_title_d3">买家退货</div>
              <p class="d4"><span></span></p>
            </li>
            <li :class="salesType==40?'sales_active':''">
              <div class="apply_title_d3">退款完毕</div>
              <p class="d4"><span></span></p>
            </li>
          </ul>
          <div class="apply_main" style="background:#fafafa">
            <div class="apply_left" v-if="salesType==1">
              <el-form ref="ruleForm" label-width="150px" class="apply_from">
                <el-form-item label="售后商品：" prop class="apply_from_item" style>
                  <img class="apply_from_img" :src="link+salesList1.goodsImg" alt srcset />
                </el-form-item>
                <el-form-item label="售后类型：" class="apply_from_item" style>
                  <el-select class="apply_from_input" v-model="fromData.returnTypeCode">
                    <el-option label="退货" value="1"></el-option>
                    <el-option label="换货" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="售后原因：" prop class="apply_from_item" style>
                  <el-input
                    type="textarea"
                    minlength="30"
                    :rows="4"
                    class="apply_from_input"
                    v-model="fromData.returnReason"
                  ></el-input>
                </el-form-item>
                <el-form-item label="售后数量：" prop class="apply_from_item" style>
                  <el-input class="apply_from_input" v-model="fromData.returnCount"></el-input>
                </el-form-item>
                <el-form-item label="售后说明：" prop class="apply_from_item" style>
                  <el-input
                    type="textarea"
                    minlength="30"
                    :rows="4"
                    class="apply_from_input"
                    v-model="fromData.remark"
                  ></el-input>
                </el-form-item>
                <el-form-item label="上传图片：" prop class="apply_from_item" style>
                  <el-upload
                    class="apply_avatar_uploader"
                    :action="imgurl"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-success="handelImgFileSuccess"
                    :before-upload="handelUploadBefore"
                    name="file"
                    :data="uploadData"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                </el-form-item>
                <el-button type="primary" class="apply_from_submit" @click="handelSalesSumit">提交</el-button>
              </el-form>
            </div>

            <div class="apply_left left_sales_type2" v-if="salesType==10">
              <p class="left_sales_type2_p">请等待商家处理</p>
              <p class="left_sales_type2_p">您已成功发起退款申请，请等待商家处理</p>
              <el-button
                type="primary"
                class="apply_from_submit sales_sumbit_btn"
                @click="handelEditSales"
              >修改申请</el-button>
            </div>

            <div class="apply_left" v-if="salesType==20">
              <el-form ref="ruleForm" label-width="150px" class="apply_from">
                <el-form-item label="物流公司：" class="apply_from_item" style>
                  <el-select class="apply_from_input" v-model="expressInfo">
                    <el-option
                      v-for="(item,index) of this.expressList"
                      :label="item.name"
                      :value="item.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="物流单号：" prop class="apply_from_item" style>
                  <el-input type="text" v-model="expressInfoList" class="apply_from_input"></el-input>
                </el-form-item>
                <el-button
                  type="primary"
                  class="apply_from_submit"
                  @click="handelSalesTypeSumbit"
                >提交</el-button>
              </el-form>
            </div>

            <div class="apply_left left_sales_type2" v-if="salesType==40">
              <p class="left_sales_type2_p">您的售后申请已处理完毕。</p>
              <p class="left_sales_type2_p">您的退款已受理，请查看支付账户到账情况。</p>
            </div>

            <div class="apply_left left_sales_type2" v-if="salesType==30">
              <p class="left_sales_type2_p">申请失败。</p>
            </div>
            <div class="apply_right">
              <p>验收单详情</p>
              <div>
                <img class="apply_from_img" :src="link+salesList1.goodsImg" alt srcset />
                <div>
                  <p>商品名称:{{this.salesList1.goodsName}}</p>
                  <p style="margin: 15px 0">商品品牌:{{this.salesList1.brandName}}</p>
                  <p>商品型号:{{this.salesList1.typeModel}}</p>
                </div>
              </div>
              <p>卖家：{{this.salesList.enterpriseName}}</p>
              <p>联系电话：{{this.salesList.expressLinkManPhone}}</p>
              <p>订单编号：{{this.salesList1.goodsId}}</p>
              <p>单价：￥{{this.salesList1.unitPrice?this.salesList1.unitPrice:this.salesList1.utilPrice}}</p>
              <p>数量：{{this.salesList1.applicaNum?this.salesList1.applicaNum:1}}</p>
              <p>总价：￥{{this.salesList1.unitPrice * this.salesList1.applicaNum}}</p>
            </div>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="footer bg"></div>
    </div>
  </div>
</template>
<script>
import headerCom from "#/header/header.vue";
import {
  receiptDetail,
  expressDetail,
  saveSales,
  editSales,
} from "@/getData.js";
export default {
  name: "applyAfterSale",
  components: {
    headerCom
  },
  data() {
    return {
      imageUrl: "",
      dialogVisible: false,
      pid: "",
      id: "",
      dialogImageUrl: "",
      salesType: 10,
      salesList: [],
      salesList1: [],
      uploadData: null,
      imgurl: "",
      expressList: [],
      fromData: {
        applicaFormGoodsId: "",
        returnTypeCode: "",
        returnReason: "",
        remark: "",
        returnCount: "",
        fileImg: ""
      },
      expressInfo: "",
      expressInfoList:"",
      returnGoods:1,
      link:process.env.VUE_APP_IMG
    };
  },
  created() {
    this.pid = this.$route.query.pid;//商品id 如果从售后记录进入此页面 pid就是供应单id
    this.id = this.$route.query.id;//供应单id
    let goodInfo = sessionStorage.getItem("goodsInfo");
    this.salesList1 = JSON.parse(goodInfo);
    let baseurl =
      process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
        ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
        : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'
    this.imgurl = baseurl + "/returnForm/uploadFile";
    this.salesType = sessionStorage.getItem("salesCode");
    this.handelApplyList();
  },
  mounted() {
    this.handelExpressList();
  },
  updated() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(this.dialogImageUrl);
    },
    async handelApplyList() {
      //获取数据 f发货单详情
      const res = await receiptDetail({ applicaFormId: this.pid });
      this.salesList = res.data;
    },
    handelImgFileSuccess(file) {
      //头像上传成功
      this.fromData.fileImg = file.data.filePath;
      console.log(this.fromData.fileImg);
    },
    async handelSalesSumit() {
      //售后提交
      if(this.returnGoods==1){
        let saveSalesInfo = {
          applicaFormGoodsId: this.id,
          returnTypeCode: this.fromData.returnTypeCode,
          returnReasont: this.fromData.returnReason,
          remark: this.fromData.remark,
          returnCount: this.fromData.returnCount
        };
        const res = await saveSales(saveSalesInfo);editSales
        if (res.errorCode == 0) {
          this.salesType = 10;
        } else {
          this.$message.error("提交失败");
        }
      }else{//售后修改
        let saveSalesInfo = {
          id: this.pid,
          returnTypeCode: this.fromData.returnTypeCode,
          returnReasont: this.fromData.returnReason,
          remark: this.fromData.remark,
          returnCount: this.fromData.returnCount
        };
        const res = await editSales(saveSalesInfo);
        if (res.errorCode == 0) {
          this.$message.success('修改成功')
        } else {
          this.$message.error("修改失败");
        }
      }
    },
    handelUploadBefore(file) {
      this.uploadData = { id: this.id };
      let promise = new Promise(resolve => {
        this.$nextTick(function() {
          resolve(true);
        });
      });
      return promise;
    },
    handelEditSales() {
      //修改申请
      this.salesType = 1;
      this.returnGoods = 2
    },
    async handelSalesTypeSumbit() {
      //提交物流
      let editInfo = {
        id: this.pid,
        wayBillCompany: this.expressInfo,
        wayBillNumber: this.expressInfoList
      };
      const res = await editSales(editInfo);
      if (res.errorCode == 0) {
        this.$message.success("提交成功");
      } else {
        this.$message.error("修改失败");
      }
    },
    async handelExpressList() {
      //物流获取
      const res = await expressDetail();
      this.expressList = res.data;
    }
  },
  beforeDestroy() {
    this.salesType = 1;
    sessionStorage.setItem("salesCode", 1);
    // alert(1)/
  }
};
</script>
<style scoped>
.sales_active {
  border-bottom: 1px solid #409eff;
}
.sales_active .d4 span{
  border-color: transparent transparent transparent #409eff;
}

.sales_active .apply_title_d3{
  background: #409eff;
  color: #ffffff;
}
.d4{
  width:0;
  height:0;
  border-width:24px 0px 29px 74px;
  border-style:solid;
  border-color:transparent transparent transparent #CCCCCC;/*透明 透明 透明 灰*/
  position: absolute;
  top: -0px;
  right: -74px;
  z-index: 20;
}
.d4 span{
  display:block;
  width: 0;
  height: 0;
  border-width: 22px 0px 28px 73px;
  border-style: solid;
  border-color: transparent transparent transparent white;
  position: absolute;
  top: -22px;
  left: -76px;
}
.apply_title_d3{
  border: 1px solid #CCCCCC;
}
.personal_box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  margin: 24px auto;
  overflow: hidden;
}
.footer {
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
  margin-top: 0px;
}
.apply_box {
  width: 1200px;
}
.receipt_title {
  width: 1200px;
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
}
.receipt_title span {
  display: block;
  margin-right: 5px;
  cursor: pointer;
}
.apply_title {
  width: 80%;
  margin: auto;
  display: flex;
  height: 52px;
  background: #ffffff;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 18px;
}
.apply_title li {
  width: 25%;
  text-align: center;
  line-height: 52px;
  height: 52px;
  border-right: 1px solid #e3e3e3;
  position: relative;
  text-indent:30px;
}
.apply_main {
  display: flex;
}
.apply_left {
  width: 800px;
  border-right: 1px solid #cccccc;
}
.apply_right {
  width: 400px;
  text-align: left;
}
.apply_from {
  width: 100%;
  margin-top: 40px;
  font-size: 18px;
}
.apply_from_item {
  display: flex;
  align-items: center;
}
.apply_from >>> .el-form-item__content {
  margin-left: 0 !important;
}
.apply_from_img {
  width: 120px;
  height: 120px;
  text-align: left;
  float: left;
}
>>> .apply_from_input {
  width: 400px;
}
.apply_avatar_uploader >>> .el-upload--picture-card {
  /*width: 120px;*/
  /*height: 120px;*/
}
.apply_avatar_uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.apply_avatar_uploader .el-upload:hover {
  border-color: #409eff;
}
.apply_from_submit {
  width: 160px;
  height: 40px;
}
.apply_right > p {
  text-align: left;
  width: 100%;
  margin-left: 25px;
  margin-top: 25px;
}
.apply_right > p:first-child {
  margin-top: 40px;
}
.apply_right > div {
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;
  margin-left: 25px;
}
.apply_right > div > div {
  margin-left: 20px;
}
.apply_right img {
  width: 120px;
  height: 120px;
  display: block;
}
.left_sales_type2 {
  text-align: left;
}
.left_sales_type2_p {
  width: 100%;
  margin-top: 40px;
  margin-left: 40px;
  font-size: 18px;
}
.sales_sumbit_btn {
  margin-left: 60px;
  margin-top: 40px;
}
</style>