<!-- 商家入驻 -->
<template>
  <div>
    <headerCom></headerCom>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="法人名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="当前企业名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="企业所在城市：" prop="address">
        <el-cascader :options="options">
          <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf">({{ data.children.length }})</span>
          </template>
        </el-cascader>
      </el-form-item>
      <el-form-item label="店铺名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="法人身份证正面照：" prop="name1">
        <el-upload
          class="upload-demo"
          ref="name1"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
        <img class="upImg" src="./../../assets/logo.png" alt srcset />
      </el-form-item>

      <el-form-item label="法人身份证反面照：" prop="name2">
        <el-upload
          class="upload-demo"
          ref="name2"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
        <img class="upImg" src="./../../assets/logo.png" alt srcset />
      </el-form-item>

      <el-form-item label="法人手持身份证照：" prop="name3">
        <el-upload
          class="upload-demo"
          ref="name3"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
        <img class="upImg" src="./../../assets/logo.png" alt srcset />
      </el-form-item>

      <el-form-item label="营业执照：" prop="name4">
        <el-upload
          class="upload-demo"
          ref="name4"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
        <img class="upImg" src="./../../assets/logo.png" alt srcset />
      </el-form-item>

      <el-form-item label="开户行：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="企业银行账户：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="紧急联系人：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
export default {
  name: "storeJoin",
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
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      province: [], // 省级数据
      cities: [], // 市级数据
      county: [], // 区县数据
      towns: [], // 乡镇数据
      ruleForm: {
        name: "",
        address: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        name1: [{ required: true, message: "请输入上传图片", trigger: "blur" }],
        name2: [{ required: true, message: "请输入上传图片", trigger: "blur" }],
        name3: [{ required: true, message: "请输入上传图片", trigger: "blur" }],
        name4: [{ required: true, message: "请输入上传图片", trigger: "blur" }],
        address: [
          { required: true, message: "请输入选择地区", trigger: "blur" }
        ]
      }
    };
  },

  computed: {},

  methods: {
    submitForm(formName) {
      // this.$alert("这是一段内容", "标题名称", {
      //   confirmButtonText: "确定",
      //   callback: action => {
      //     this.$message({
      //       type: "info",
      //       message: `action: ${action}`
      //     });
      //   }
      // });
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.submitUpload();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    submitUpload() {
      console.log("aaa", this.$refs);
      this.$refs.name1.submit();
      this.$refs.name2.submit();
      this.$refs.name3.submit();
      this.$refs.name4.submit();
    },
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
    headerCom
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
  border: 1px solid #dcdfe6;
  display: flex;
  padding-left: 20px;
  border-radius: 4px;
}
.upImg {
  height: 38px;
  width: 100px;
  margin-left: 30px;
}
</style>
