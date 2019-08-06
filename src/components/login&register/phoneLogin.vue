<!--  -->
<template>
  <div class="login">
    <div class="login_box">
      <h1>验证码登录</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" class="fromClass">
        <el-form-item prop="phone">
          <el-input type="text" placeholder="11位手机号" v-model="ruleForm.phone">
            <el-button slot="prepend">+ 86</el-button>
          </el-input>
        </el-form-item>

        <el-form-item prop="sidentify">
          <el-col :span="15">
            <el-input placeholder="输入图形验证码" v-model="ruleForm.sidentify"></el-input>
          </el-col>
          <el-col :span="6" style="margin-left:10px;" @click.native="sx">
            <!-- <v-sidentify :identifyCode="identifyCode" ref="mychild"></v-sidentify> -->
            <img src="?" alt="" id='imgInit'>
          </el-col>
        </el-form-item>

        <el-form-item prop="phoneSidentify" class="aphoneSidentify">
          <el-col :span="15">
            <el-input type="password" placeholder="请输入验证码" v-model="ruleForm.phoneSidentify"></el-input>
          </el-col>
          <el-col :span="6" style="margin-left:10px;" @click.native="getValid">
            <el-button type="primary">获取验证码</el-button>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button class="elBtn" type="primary" @click="login('ruleForm1')">登录</el-button>
        </el-form-item>
      </el-form>

      <div class="login_foot">
        <el-button style="padding:0;" type="text" @click="toLogin">账号登录</el-button>
        <el-button style="padding:0;" type="text" @click="toRegister">立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { generateImage, getValid, checkCaptcha, checkphoneistrue, loginByPhone } from "@/getData.js";
import vSidentify from "#/login&register/vsidentify.vue";
export default {
  name: "phoneLogin",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (this.ruleForm.phone !== "") {
          this.$refs.ruleForm1.validateField("phone");
        }
        callback();
      }
    };
    var validateSidentify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入图形验证码"));
      } else {
        if (this.ruleForm.sidentify !== "") {
          this.$refs.ruleForm1.validateField("sidentify");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (this.ruleForm.phoneSidentify !== "") {
          this.$refs.ruleForm1.validateField("phoneSidentify");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        /**验证码 */
        identifyCode: "7788",
        phone: "",
        sidentify: "",
        phoneSidentify: ""
      },
      rules: {
        phone: [
          {
            validator: validateAccount,
            trigger: "blur"
          }
        ],
        sidentify: [
          {
            validator: validateSidentify,
            trigger: "blur"
          }
        ],
        phoneSidentify: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ]
      }
    };
  },

  computed: {},

  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loginByPhone();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async loginByPhone() {
      let dataJson = {
        userid:this.ruleForm.phone,
        mcaptcha:this.ruleForm.phoneSidentify
      }
      const res = await loginByPhone(dataJson);
      console.log(res);
      if (res.errorCode === 200) {
      // this.$router.push({
      //   name: "HomePage",
      //   params: {
      //     data: res.data.user
      //   }
      // });
        this.$message.success(res.message);
      } else {
        this.$message.warning(res.message);
      }
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
    sx() {
     document.getElementById('imgInit').src = process.env.VUE_APP_URL + '/generateImage'
    },
    async getValid() {
      console.log(this.ruleForm.phone)
      const res = await getValid({mobile:this.ruleForm.phone})
      console.log(res)
    }
  },

  created() {},

  mounted() {
    this.sx()
  },

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
  height: 415px;
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
  width: 255px;
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
</style>