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
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm.username">
            <el-button slot="prepend" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.password">
            <el-button slot="prepend" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-button style="margin-right:-180px;padding-top:0;" type="text">找回密码</el-button>
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// 引入 接口
import { login } from "@/getData.js";
console.log(login);
export default {
  name: "login",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.username !== "") {
          this.$refs.ruleForm.validateField("username");
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
        username: "",
        password: ""
      },
      rules: {
        account: [
          {
            validator: validateAccount,
            trigger: "blur"
          }
        ],
        pass: [
          {
            validator: validatePass,
            trigger: "blur"
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
          this.getUserInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async getUserInfo() {
      let dataJson = Object.assign(this.ruleForm, { userType: 1 });
      console.log("datajson", dataJson);
      const res = await login(dataJson);
      if (res.errorCode === 200) {
        console.log(res);
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
    toPhoneLogin() {
      this.$router.push({
        name: "phoneLogin"
      });
    },
    toRegister() {
      this.$router.push({
        name: "register"
      });
    }
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
