<!--  -->
<template>
  <div class="login">
    <div class="login_box">
      <h1>注册</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" class="fromClass">
        <el-form-item prop="acompanyName" class="acompanyName" style="border:1px solid red;">
          <div style="width:100px;">公司名称:</div>
          <el-input type="text" placeholder="不能包含非法字符，如* # / ～等" v-model="ruleForm.companyName">
            <!-- <el-button slot="prepend">+ 86</el-button> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="aphone">
          <el-input type="text" placeholder="11位手机号" v-model="ruleForm.phone">
            <el-button slot="prepend">+ 86</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="asidentify">
          <el-col :span="15">
            <el-input placeholder="输入图形验证码" v-model="ruleForm.sidentify"></el-input>
          </el-col>
          <el-col :span="6" style="margin-left:10px;" @click.native="sx">
            <v-sidentify :identifyCode="identifyCode" ref="mychild"></v-sidentify>
          </el-col>
        </el-form-item>
        <el-form-item prop="aphoneSidentify" class="aphoneSidentify">
          <el-col :span="15">
            <el-input type="password" placeholder="请输入验证码" v-model="ruleForm.phoneSidentify"></el-input>
          </el-col>
          <el-col :span="6" style="margin-left:10px;" @click.native="sx">
            <el-button type="primary">获取验证码</el-button>
          </el-col>
        </el-form-item>

        <el-form-item prop="apass">
          <el-input
            placeholder="设置6 - 16位密码，区分大小写"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="acheckPass">
          <el-input
            placeholder="确认密码"
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="checked"></el-checkbox>
        <span>
          我已阅读并同意
          <span style="color:red;text-decoration:underline;">用户协议</span>和
          <span style="color:red;text-decoration:underline;">隐私政策</span>
        </span>
        <el-form-item style="margin-top:20px;">
          <el-button class="elBtn" type="primary" @click="register('ruleForm2')">注册</el-button>
          <el-button class="elBtn" type="text" @click="toLogin">使用已有账户登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { login } from "@/getData.js";
import vSidentify from "#/Other/vsidentify.vue";
export default {
  name: "register",
  data() {
    var validateCompanyName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入公司名称"));
      } else {
        if (this.ruleForm.companyName !== "") {
          this.$refs.ruleForm.validateField("companyName");
        }
        callback();
      }
    };
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (this.ruleForm.phone !== "") {
          this.$refs.ruleForm.validateField("phone");
        }
        callback();
      }
    };
    var validateSidentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入图形验证码"));
      } else {
        if (this.ruleForm.sidentify !== "") {
          this.$refs.ruleForm.validateField("sidentify");
        }
        callback();
      }
    };
    var phoneSidentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (this.ruleForm.phoneSidentify !== "") {
          this.$refs.ruleForm.validateField("phoneSidentify");
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
      /**验证码 */
      identifyCode: "7788",
      /**选中 我已阅读并同意用户协议和隐私政策 */
      checked: true,
      /**注册表单 */
      ruleForm: {
        /**公司名称 */
        companyName: "",
        /**手机号 */
        phone: "",
        /**图形验证码 */
        sidentify: "",
        /**手机验证码 */
        phoneSidentify: "",
        /**密码 */
        pass: "",
        /**确认密码 */
        checkPass: ""
      },
      rules: {
        /**公司名称 */
        companyName: [
          {
            validator: validateCompanyName,
            trigger: "blur"
          }
        ],
        /**手机号 */
        phone: [
          {
            validator: validateAccount,
            trigger: "blur"
          }
        ],
        /**图形验证码 */
        sidentify: [
          {
            validator: validateSidentify,
            trigger: "blur"
          }
        ],
        /**手机验证码 */
        phoneSidentify: [
          {
            validator: phoneSidentify,
            trigger: "blur"
          }
        ],
        /**密码 */
        pass: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        /**确认密码 */
        checkPass: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },

  computed: {},

  methods: {
    /** 注册验证按钮 */
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getUserInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async getUserInfo() {
      let dataJson = Object.assign(this.ruleForm);
      console.log("datajson", dataJson);
      // const res = await login(dataJson);
      // if (res.errorCode === 200) {
      // console.log(res);
      // this.$router.push({
      //   name: "HomePage",
      //   params: {
      //     data: res.data.user
      //   }
      // });
      //   this.$message.success(res.message);
      // } else {
      //   this.$message.warning(res.message);
      // }
    },
    /**跳转 登录页 */
    toLogin() {
      this.$router.push({ name: "login" });
    },
    /**获取验证码 */
    sx() {
      this.$refs.mychild.drawPic();
    }
  },

  created() {},

  mounted() {},

  components: {
    vSidentify
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100vw;
  background: url("~assets/background.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  /* border: 1px solid red; */
  width: 500px;
  height: 630px;
  margin-top: -155px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 10px 5px #ffffff;
}
.login_box > h1 {
  margin-bottom: 35px;
}
.elBtn {
  width: 155px;
}
.fromClass >>> input {
  background: #c6e2ff;
}
.login_foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid gray;
  width: 95%;
  height: 45px;
}
.aphoneSidentify >>> .el-form-item__content {
  display: flex;
  align-items: center;
}
.acompanyName >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>