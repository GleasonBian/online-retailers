<!--  -->
<template>
  <div>
    <headerBox title="修改密码"></headerBox>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="原密码：" prop="oldpass" class="account_from">
        <el-input v-model="ruleForm.oldpass" placeholder="请输入原始密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="pass"  class="account_from">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入新密码" class="account_from_input" ></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码：" prop="checkPass" class="account_from">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  size="small" type="primary" class="account_font" @click="handelEditPassword">修改密码</el-button>
      </el-form-item>
    </el-form>
    <headerBox title="修改手机号"></headerBox>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="原手机号：" prop="oldpass" class="account_from">
        <el-input v-model="ruleForm.oldpass" placeholder="请输入新手机号"></el-input>
      </el-form-item>
      <el-form-item label="新手机号：" prop="pass" class="account_from">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"  placeholder="请输入新手机号"></el-input>
      </el-form-item>
        <el-form-item label="短信验证码：" prop="checkPass" style="margin-left: 0px" class="account_from_else">
          <div style="display: flex">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="margin-left: 0;width: 240px"  placeholder="获取验证码"></el-input>
          <el-button  size="small" type="primary" class="accounet_password">获取验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="account_font" size="small" type="primary" >修改手机号</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
import { editPassword } from "@/getData.js";
export default {
  data() {
    var oldpass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.oldpass !== "") {
          this.$refs.ruleForm.validateField("oldpass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        oldpass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        oldpass: [{ validator: oldpass, trigger: "blur" }]
      }
    };
  },

  computed: {},

  methods: {
    async handelEditPassword(){
      if(this.ruleForm.checkPass==''){
        this.$message({
          message: '请您先确认密码',
          type: 'warning'
        })
      }else{
        var edifPasswordInfo = {
          password:this.ruleForm.oldpass,
          newPassword:this.ruleForm.pass
        }
        const res = await editPassword(edifPasswordInfo);
        if(res.errorCode==0){
          this.$message.success('修改成功')
        }else{
          this.$message.error('修改失败')
        }
      }

    }
  },

  created() {

  },

  mounted() {},
  beforeDestroy(){

  },
  components: {
    headerBox
  }
};
</script>

<style scoped>
.demo-ruleForm {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 610px;
  font-size: 18px;
  margin-left: 70px;
  background: #ffffff;
}
.demo-ruleForm >>> .el-input {
  width: 400px;
  height: 45px;
}
  .account_from >>>.el-form-item__label{
    font-size: 18px;
    color: #666666;
    width: 160px !important;
  }
  .account_from_else>>>.el-form-item__label{
    font-size: 18px;
    color: #666666;
    width: 160px !important;
  }
  .demo-ruleForm >>>.el-form-item{
    width: 580px;

  }
  .account_from_input >>>.el-input{
    width: 400px;
  }
  .account_from_else{
    display: flex;

  }
.account_from_else>>>.el-form-item__content{
  margin-left: 10px !important;
}
  .accounet_password{
    width: 120px;
    height: 41px;
    line-height: 25px;
    margin-left: 40px;
    font-size: 18px;
  }
  .account_font{
    width: 150px;
    height: 41px;
    line-height: 25px;
    font-size: 18px;
  }
</style>
