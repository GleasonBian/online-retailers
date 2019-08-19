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
      <el-form-item label="原密码：" prop="oldpass">
        <el-input v-model="ruleForm.oldpass"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码：" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="margin-left: 140px;" size="small" type="primary">修改密码</el-button>
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
      <el-form-item label="原手机号：" prop="oldpass">
        <el-input v-model="ruleForm.oldpass"></el-input>
      </el-form-item>
      <el-form-item label="新手机号：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
        <el-form-item label="短信验证码：" prop="checkPass" style="margin-left: 100px;">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        <el-button style="margin-left:10px" size="small" type="primary">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:140px" size="small" type="primary">获取手机号</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
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

  methods: {},

  created() {},

  mounted() {},

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
  width: 580px;
}
.demo-ruleForm >>> .el-input {
  width: 222px;
}
</style>
