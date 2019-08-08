<!-- 商家入驻 -->
<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="个人头像：" prop="name1">
        <img class="upImg" src="~assets/logo.png" alt srcset />
        <el-upload
          class="upload-demo"
          ref="name1"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
        
      </el-form-item>
      <el-form-item label="真实姓名：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="登录账户：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="所属企业：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
    };
  },

  computed: {},

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },

  created() {},

  mounted() {},

  components: {
    
  }
};
</script>

<style scoped>
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
  height: 38px;
  width: 100px;
  margin-right: 30px;
}
</style>
