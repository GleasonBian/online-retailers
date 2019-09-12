<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-05 13:09:31
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-03 11:40:08
 -->
<template>
  <div class="login">
    <div class="login_box">
      <h1>账号登录</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="fromClass demo-ruleForm"
      >
        <el-form-item prop="auserid">
          <el-input type="text" v-model="ruleForm.userid">
            <el-button slot="prepend" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="apassword">
          <el-input type="password" v-model="ruleForm.password">
            <el-button slot="prepend" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-button
          style="margin-right:-180px;padding-top:0;"
          type="text"
          @click="toFindPassword"
        >找回密码</el-button>
        <el-form-item>
          <el-button class="elBtn" type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="login_foot">
        <el-button style="padding:0;" type="text" @click="toPhoneLogin">手机验证码登录</el-button>
        <el-button style="padding:0;" type="text" @click="toRegister">立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "login",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.userid !== "") {
          this.$refs.ruleForm.validateField("userid");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("password");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        userid: "",
        password: "",
        userType: 10
      },
      rules: {
        auserid: [
          {
            validator: validateAccount,
            trigger: ["blur"]
          }
        ],
        apassword: [
          {
            validator: validatePass,
            trigger: ["blur"]
          }
        ]
      }
    };
  },
  components: {
    // HelloWorld
  },
  created() {},
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loginInfo(this.ruleForm);
        } else {
          return false;
        }
      });
    },
    toPhoneLogin() {
      this.$router.push({
        name: "phoneLogin"
      });
    },
    toRegister() {
      this.$router.push({
        name: "register"
      });
    },
    toFindPassword() {
      this.$router.push({
        name: "findPassword"
      });
    },
    ...mapActions(["loginInfo"])
  },
  computed: mapState(["userInfo"])
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
  height: 360px;
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
</style>
