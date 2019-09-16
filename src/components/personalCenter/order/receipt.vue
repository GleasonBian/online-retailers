
<template>
    <div style="background:#f5f5f5">
        <headerCom></headerCom>
        <div class="personal_box">
            <div class="personal_title">
                <div class="receipt_title">
                    <router-link to="/" tag="span">首页</router-link>>
                    <router-link  to="myOrder" tag="span">订单中心</router-link>>
                    <span style="color: blue">供应验收单详情</span>
                </div>
                <div class="receipt_detail">
                    <div class="receipt_detail_title">供应验收单详情</div>
                    <ul class="receipt_detail_main">
                        <li>订单信息</li>
                        <li>
                            <p>供应验收编号:{{this.detailList.applicaFormCode}}</p>
                            <p>创建时间:{{this.detailList.createTimeStr}}</p>
                            <p>验收金额:{{this.detailList.applicaFormAmount}}</p>
                            <p>商品总数:{{this.detailList.goodsCount}}</p>
                            <p>单位:{{this.detailList.unit}}</p>
                        </li>
                    </ul>
                </div>

                <div>
                <div class="receipt_detail">
                    <div class="receipt_detail_title">商品明细</div>
                    <div class="receipt_detail_goods">
                        <div class="receipt_goods_title">
                            <span>店铺名称</span>
                        </div>
                        <div class="receipt_goods_main" v-for="(item,index) of this.goodsDetail.rows" :key="index">
                            <img :src="link+item.goodsImg">
                            <div>
                                <li style="text-align: left">{{item.goodsName}}</li>
                                <li>规格型号:{{item.typeModel}}</li>
                            </div>
                            <p>品牌:{{item.brandName}}</p>
                            <p>单位:{{item.unit}}</p>
                            <p>价格:￥{{item.unitPrice}}</p>
                            <p>采购数量:{{item.applicaNum}}</p>
                            <p>小计:￥<span style="color: red">{{item.goodsTotalPrice}}</span></p>
                            <el-button type="primary" style="margin-left: 20px" @click="handelSaleDetail(item)">申请售后</el-button>
                        </div>
                    </div>
                </div>
                <div class="receipt_goods_mains">
                    合计验收总金额: <span>{{allPrice}}</span>
                </div>
                    <el-button type="primary" @click="handelReceiptShow" v-if="this.detailList.stateStr=='待验收'">确认收货</el-button>
                    <el-pagination
                            :total="goodsDetail.total"
                            :page-count="goodsDetail.pageCount"
                            @current-change="handelPageChange"
                            class="addresspageClass"
                    >
                    </el-pagination>
                </div>
                <el-dialog
                        title="确认收货"
                        :visible.sync="receiptShow"
                        width="30%"
                        class="receipt_modal_detail"
                >
                    <div class="receipt_modal_upload">
                        <span>上传签收单据附件：</span>
                        <el-upload
                           ref="upload"
                           :action="uploadPath"
                           :data="uploadData"
                           :before-upload="handelUploadBefore"
                        >
                            <el-button>点击上传</el-button>
                        </el-upload>
                    </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="receiptShow = false">取 消</el-button>
                    <el-button type="primary" @click="handelGoodsSumbit">确 定</el-button>
                  </span>
                </el-dialog>
            </div>
        </div>
        <div class="footer bg"></div>
    </div>
</template>
<script>
    import headerCom from "#/header/header.vue";
    import navMenu from "#/personalCenter/navMenu.vue";
    import {receiptDetail,receiptGoodsDetail,sumbitSalas} from '@/getData'
    export default {
      name:"receipt",
      components: {
          headerCom,
          navMenu
        },
        data(){
          return{
              paramsId:"",
              detailList:[],
              goodsDetail:[],
              pageNumber:1,
              receiptShow:false,
              uploadPath:"",
              uploadData:null,
              allPrice:"",
              salesId:"",
              imgBaseUrl:'',
              link: process.env.VUE_APP_IMG,
          }
        },
        created(){
          let baseurl =
                process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
                    ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
                    : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'
          this.uploadPath = baseurl + "/applicaForm/uploadFile";
          this.paramsId = this.$route.query.id;
          this.imgBaseUrl = baseurl;
          console.log(this.$route.query.id)
        },
        mounted() {
            this.handelList();
            this.handelGoodsDetail()
        },
        methods:{
          async handelList(){//默认
              const res = await receiptDetail({applicaFormId:this.paramsId});
              this.detailList = res.data
          },
          async handelGoodsDetail(){
              const res = await receiptGoodsDetail({applicaFormId:this.paramsId,pageNo:this.pageNumber});
              let a = 0;
              res.rows.map((item,index)=>{
                  a+=Number(item.goodsTotalPrice)
              })
              this.allPrice = a
              this.goodsDetail = res
          },
          handelPageChange(page){
              this.pageNumber = page;
              this.handelGoodsDetail()
          },
          handelReceiptShow(){
              this.receiptShow = true
          },
          async handelGoodsSumbit(){//确认收货
              const res = await sumbitSalas({id:this.paramsId});
              if(res.errorCode==0){
                  // this.$router.push('/supplyCertificate');
                  this.$router.go(-1)
                  this.$message.success('确认收货成功')
              }else{
                  this.$message.error(res.message)
              }
              this.receiptShow = false
            },
            handelUploadBefore(file){
              this.uploadData = {id:this.paramsId};
              let promise  = new Promise((resolve)=>{
                  this.$nextTick(function () {
                      resolve(true)
                  })
              })
                return promise
            },
            handelSaleDetail(item){
              this.$router.push({
                  path:"/applyAfterSale",
                  query:{id:item.id,pid:this.paramsId}
              })
              sessionStorage.setItem('goodsInfo',JSON.stringify(item))
              sessionStorage.setItem('salesCode',1)
            }
        },
    }
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
    .receipt_title{
        display: flex;
        align-items: center;
        height: 30px;
    }
    .receipt_title span{
        display: block;
        margin-right: 5px;
        cursor: pointer;
    }
    .receipt_detail{
        width: 100%;
        background: #ffffff;
        margin-top: 20px;
    }
    .receipt_detail_title{
        width: 100%;
        text-align: left;
        height: 50px;
        border: 1px solid #e3e3e3;
        line-height: 50px;
        text-indent: 20px;
    }
    .receipt_detail_main{
        display: flex;
        border-bottom: 1px solid #e3e3e3;
    }
    .receipt_detail_main li:first-child{
        width: 10%;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        text-align: center;
        line-height: 150px;
    }
    .receipt_detail_main li:last-child{
        width: 90%;
        border-right: 1px solid #e3e3e3;
        padding: 20px 0;
    }
    .receipt_detail_main li:last-child p{
        text-align: left;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .receipt_detail_main li:last-child p:first-child{
        /*margin-top: 20px;*/
    }    .receipt_detail_main li:last-child p:last-child{
        margin-bottom: 0px;
    }
    .receipt_detail_goods{
        overflow: hidden;
    }
    .receipt_goods_title{
        text-align: left;
        width: 95%;
        margin: auto;
        margin-top: 15px;
    }
    .receipt_goods_main{
        display: flex;
        align-items: center;
        width: 95%;
        text-align: left;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 10px;
    }
    .receipt_goods_main div{
        width: 20%;
        margin-left: 15px;
        margin-right: 5px;
    }
    .receipt_goods_main p{
        width: 10%;
        margin-left: 18px;
    }
    .receipt_goods_main>img{
        width: 60px;
        height: 60px;
    }
    .receipt_goods_mains{
        width: 95%;
        margin: auto;
        text-align: right;
        height: 60px;
        line-height: 60px;
        font-size: 20px;
    }
    .receipt_goods_mains span{
        color: red;
    }
    .addresspageClass{
        width: 100%;
        margin-top: 20px;
    }
    >>>.receipt_modal_detail .el-dialog__header{
        text-align: left;
    }
    .receipt_modal_upload{
        display: flex;
        align-items: center;
    }
</style>