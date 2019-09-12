<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-31 15:20:10
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-09 14:32:49
 -->
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
      <el-form-item label="原密码：" prop="oldpass" class="account_from" style="margin-top: 50px">
        <el-input v-model="ruleForm.oldpass" placeholder="请输入原始密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="pass" class="account_from">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入新密码"
          class="account_from_input"
        ></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码：" prop="checkPass" class="account_from">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请再次输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" class="account_font" @click="handelEditPassword">修改密码</el-button>
      </el-form-item>
    </el-form>
    <headerBox title="修改手机号"></headerBox>

    <el-form
      :model="fromData"
      ref="fromData"
      label-width="150px"
      class="demo-ruleForm"
      :rules="fromDataRules"
    >
      <el-form-item label="原手机号：" prop="oldPhone" class="account_from" style="margin-top: 50px">
        <el-input v-model="fromData.oldPhone" placeholder="请输入原手机号"></el-input>
      </el-form-item>
      <el-form-item label="新手机号：" prop="newPhone" class="account_from">
        <el-input type="text" v-model="fromData.newPhone" autocomplete="off" placeholder="请输入新手机号"></el-input>
      </el-form-item>
      <el-form-item
        label="短信验证码："
        prop="mcaptcha"
        style="margin-left: 0px"
        class="account_from_else"
      >
        <div style="display: flex">
          <el-input
            type="text"
            v-model="fromData.mcaptcha"
            autocomplete="off"
            style="margin-left: 0;width: 240px"
            placeholder="获取验证码"
          ></el-input>
          <el-button
            size="small"
            type="primary"
            class="accounet_password"
            @click="handelValid"
            v-show="secoundShow"
          >获取验证码</el-button>
          <el-button
            size="small"
            type="info"
            v-show="!secoundShow"
            class="accounet_password"
          >{{this.phoneSecond}}秒后可重发</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="account_font"
          size="small"
          type="primary"
          @click="handelEdit('fromData')"
        >修改手机号</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
import { editPassword, editPhone, getValid } from "@/getData.js";
import { mapState } from "vuex";
export default {
  data() {
    var oldpass = (rule, value, callback) => {
      //验证密码
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
      //验证新密码
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
      //验证二次密码
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var checkedOldPhone = (rule, value, callback) => {
      var phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("号码格式不正确"));
          }
        }
      }, 100);
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
      },
      fromData: {
        oldPhone: "",
        newPhone: "",
        mcaptcha: ""
      },
      fromDataRules: {
        oldPhone: [
          { required: true, validator: checkedOldPhone, trigger: "blur" }
        ],
        newPhone: [
          { required: true, validator: checkedOldPhone, trigger: "blur" }
        ],
        mcaptcha: [{ required: true, message: "不可为空", trigger: "blur" }]
      },
      userInfos: [],
      phoneSecond: 60,
      secoundShow: true
    };
  },

  computed: mapState(["userInfo"]),

  methods: {
    async handelEditPassword() {
      if (this.ruleForm.checkPass == "") {
        this.$message({
          message: "请您先确认密码",
          type: "warning"
        });
      } else {
        var edifPasswordInfo = {
          password: this.ruleForm.oldpass,
          newPassword: this.ruleForm.pass
        };
        const res = await editPassword(edifPasswordInfo);
        if (res.errorCode == 0) {
          this.$message.success("修改成功");
        } else {
          this.$message.error(res.message);
        }
      }
    },
    async handelValid() {
      //获取手机验证码

      if (this.userInfos.userName != this.fromData.oldPhone) {
        this.$message.error("原手机号输入错误");
      } else {
        this.secoundShow = false;
        var secound = setInterval(() => {
          this.phoneSecond--;
          if (this.phoneSecond == 0) {
            this.phoneSecond = 60;
            this.secoundShow = true;
            clearInterval(secound);
          }
        }, 1300);
        const res = await getValid({ mobile: this.fromData.oldPhone });
        if (res.result) this.$message.warning(res.message);
      }
    },
    async handelEdit(fromData) {
      this.$refs[fromData].validate(valid => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
    async handelEditPhone() {
      if (this.userInfos.userName != this.fromData.oldPhone) {
        this.$message.error("原手机号输入错误");
      } else {
        let editPhoneInfo = {
          userid: this.fromData.oldPhone,
          userName: this.fromData.newPhone,
          mcaptcha: this.fromData.mcaptcha
        };
        const res = await editPhone(editPhoneInfo);
        if (res.data) {
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
      }
    }
  },

  created() {
    this.userInfos = this.userInfo;
  },

  mounted() {},
  beforeDestroy() {},
  components: {
    headerBox
  }
};
</script>

<style scoped>
.demo-ruleForm {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1000px;
  font-size: 18px;
  padding-left: 70px;
  margin-left: 20px;
  background: #ffffff;
}
.demo-ruleForm >>> .el-input {
  width: 400px;
  height: 45px;
}
.account_from >>> .el-form-item__label {
  font-size: 18px;
  color: #666666;
  width: 160px !important;
}
.account_from_else >>> .el-form-item__label {
  font-size: 18px;
  color: #666666;
  width: 160px !important;
}
.demo-ruleForm >>> .el-form-item {
  width: 580px;
}
.account_from_input >>> .el-input {
  width: 400px;
}
.account_from_else {
  display: flex;
}
.account_from_else >>> .el-form-item__content {
  margin-left: 10px !important;
}
.accounet_password {
  width: 131px;
  height: 41px;
  line-height: 23px;
  margin-left: 27px;
  font-size: 18px;
  margin-top: 4px;
}
.account_font {
  width: 150px;
  height: 41px;
  line-height: 22px;
  font-size: 18px;
}
</style>