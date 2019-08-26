<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 17:09:50
 * @LastEditTime: 2019-08-23 17:40:42
 * @LastEditors: Please set LastEditors
 -->
<!-- 商家入驻 -->
<template>
  <div>
    <!-- <div class="header_box">
      <div></div>个人资料
    </div> -->
    <headerBox title="个人资料"></headerBox>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="个人头像：" prop="name1">
        <img class="upImg" :src="userInfo.headPortrait" alt srcset />
        <el-upload
          class="upload-demo"
          :action="imgurl"
          :data="uploadData"
          :before-upload="handelUploadBefore"
          :on-success="handlePreview"
          :show-file-list="false"
          name="imageFile"
        >
          <!---->
          <el-button slot="trigger" size="small" type="primary" class="uoload_btn" >上传头像</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="name">
        <!-- <el-input v-model="ruleForm.name"></el-input> -->
        <div class="personinfo_min_name" style="color:#1c7cce">{{userInfo.name}}</div>
      </el-form-item>
      <el-form-item label="登录账户：" prop="name">
        <!-- <el-input v-model="ruleForm.name"></el-input> -->
        <div class="personinfo_min_name">{{userInfo.userName}}</div>
      </el-form-item>
      <el-form-item label="电子邮箱：" prop="name">
        <!-- <el-input v-model="ruleForm.name"></el-input> -->
        <div class="personinfo_min_name" style="color: #1c7cce;">{{userInfo.mail}}</div>
        <el-button style="margin-left:80px;" type="text" @click="mailShow = true">修改></el-button>
      </el-form-item>
      <!--<el-form-item label="所属企业：" prop="name">-->
        <!--&lt;!&ndash; <el-input v-model="ruleForm.name"></el-input> &ndash;&gt;-->
        <!--<div class="personinfo_min_name">第五梁场</div>-->
        <!--<el-button  class="personinfo_min_btn"  plain @click="handelOpen">关联企业</el-button>-->
      <!--</el-form-item>-->
    </el-form>

    <el-dialog
      title="修改邮箱"
      :visible.sync="mailShow"
      width="500px"
      top="230px"
      custom-class="personinfoClassName"
    >
      <div>
        <div class="personInfo_modal_title row_between_center_wrap">
          <span>修改邮箱</span>
          <i class="el-icon-close personinfo_modal_close cursor" @click="mailShow=false"></i>
        </div>
        <el-input type="text" v-model="mailInfo" class="personInfo_mail_edit" placeholder="请输入您的邮箱"></el-input>
          <br/>
        <el-button type="primary" @click="handelMailSumbit" class="personInfo_mail_submit">确 定</el-button>
      </div>

    </el-dialog>

   <!-- <el-dialog
    title="关联企业"
    :visible.sync="isshow"
    width="1000px"
    top="230px"
    custom-class="personinfoClassName"
    >
      <div class="personInfo_modal_title row_between_center_wrap">
        <span>关联企业</span>
        <i class="el-icon-close personinfo_modal_close cursor" @click="handelModalClose"></i>
      </div>
      <div class="personInfo_modal_min">
        <div class="personInfo_modal_form row_between_center">
          <p>企业名称:</p>
          <el-input type="text" class="personInfo_modal_input" placeholder="请输入企业名称"></el-input>
        </div>
        <div class="personInfo_modal_form row_between_center">
          <p>本人职位:</p>
          <el-input type="text" class="personInfo_modal_input" placeholder="请输入职位"></el-input>
        </div>
        <div class="personInfo_modal_form row_between_center">
          <p>备注:</p>
          <el-input type="textarea" class="personInfo_modal_input" minlength="30" :rows="4"></el-input>
        </div>
      </div>
      <el-button class="personInfo_modal_btn">关联企业</el-button>
    </el-dialog>-->
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
import {userInfo,editUserInfo} from '@/getData'
export default {
  name: "personInfo",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      ruleForm: {
        name: "",
        address: ""
      },
      mailShow:false,
      mailInfo:"",
      isshow:false,
      userId:"",
      userInfo:{},
      uploadData:{},
      imgurl:"",
      baseImg: process.env.VUE_APP_IMG
    };
  },

  computed: {},
  created() {
    let baseurl =
    process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
      ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
      : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'
    this.imgurl = baseurl+"/system/uploadImage"
    let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
    this.userId = loginInfo.userId
    this.adminInfo()
    },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(response, file, fileList) {
      console.log(response)
      this.handelImgSumbit(response)
    },
    handelUploadBefore(response, file, fileList){

    },
    handelOpen(){
      this.isshow = true;
    },
    handelModalClose(){
      this.isshow = false;
    },
    async adminInfo(){
      const res = await userInfo({id:this.userId});
      console.log(res);
      this.userInfo = JSON.parse(JSON.stringify(res))
      this.userInfo.headPortrait = this.baseImg + this.userInfo.headPortrait

    },
    async handelImgSumbit(response){
      console.log(response)
      const res = await editUserInfo({id:this.userId,headPortrait:response.data.filePath})
    },
    async handelMailSumbit(){
      if(this.mailInfo==""){
        this.$message.warning('请您输入新的邮箱')
      }else{
        const res = await editUserInfo({id:this.userId,mail:this.mailInfo})
        if(res.errorCode==0){
          this.adminInfo()
          this.$message.success('修改成功')
          this.mailShow = false
        }else{
          this.$message.error('修改失败')
        }
      }
    }
  },

  mounted() {},

  components: {
    headerBox
  }
};
</script>

<style scoped>
/* .header_box {
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: flex-start;
}
.header_box > div {
  width: 4px;
  height: 26px;
  background: skyblue;
  margin-left: 15px;
  margin-right: 15px;
} */
.demo-ruleForm {
  width: 855px;
  /* border: 1px solid red; */
  margin: 20px auto;
  padding: 20px 0;
}
.demo-ruleForm >>> .el-input {
  width: 388px;
}
.demo-ruleForm >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.upload-demo {
  width: 388px;
  /* border: 1px solid #dcdfe6; */
  display: flex;
  padding-left: 20px;
  border-radius: 4px;
}
.upImg {
  height: 60px;
  width: 100px;
  margin-right: 50px;
  margin-left: 12px;
}
.uoload_btn{
  width: 120px;
  height: 30px;
  border: 1px solid #1c7cce;
  background: white;
  color: #000000;
  border-radius: 5px;
  line-height: 13px;
}
.personinfo_min_name{
  margin-left: 12px;
}
.personinfo_min_btn{
  margin-left:80px;
  width: 120px;
  height: 30px;
  border: 1px solid #1c7cce;
  background: white;
  color: #000000;
  border-radius: 5px;
  line-height: 7px;
}
>>>.personinfoClassName{

}
>>>.personinfoClassName .el-dialog__body{
  padding: 0 !important;
}
>>>.personinfoClassName .el-dialog__header{
  display: none;
  }
.personInfo_modal_title{
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #CCCCCC;
  color: #000000;
  font-weight: bold;
  border-bottom: 1px solid #CCCCCC;
}
  .personInfo_modal_title span{
    font-size: 25px;
    font-family: '微软雅黑 Light';
    margin-left: 40px;
  }
  .personinfo_modal_close{
    font-size: 30px;
    margin-right: 40px;
  }
  .personInfo_modal_min{
    width: 598px;
    margin: 0 auto;
    margin-top: 40px;
  }
  .personInfo_modal_form{
    width: 100%;
    margin-bottom: 20px;
  }
  .personInfo_modal_form>p{
    font-size: 18px;
    font-weight: bold;
  }
  >>>.personInfo_modal_input{
    width: 500px;
    height: 40px;
    font-size: 18px;
  }
  >>>.personInfo_modal_btn{
    margin-top: 80px;
    width: 160px;
    height: 40px;
    background: #1c7cce;
    color: white;
    font-size: 17px;
    line-height: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  >>>.personInfo_mail_edit{
    width: 400px;
    margin-top: 50px;
  }
  .personInfo_mail_submit{
    margin-top: 30px;
    margin-bottom:30px;
  }
</style>
