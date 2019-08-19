<!--  -->
<template>
  <div>
    <headerBox title="收货地址"></headerBox>
    <el-form :inline="true" :model="formInline" class="demo-form-inline inlieStyle">
      <el-form-item label="收货地址：" style="margin-right:185px;">
        <el-input class="ipt" v-model="formInline.user" placeholder="详情地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit">搜索</el-button>
        <el-button size="small" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="addClass">
      <el-button size="small" type="primary" @click="dialogFormVisible = true">新增收货地址</el-button>
      <span style="margin-left:30px;">您已创建5个地址，最多可创建20个。</span>
    </div>
    <div class="addressClass" v-for="(item,index) in list" :key="index">
      <div>
        <div
          style="display:flex;justify-content: flex-start;align-items: center;margin-top: 5px;margin-bottom: 10px;"
        >
          <h4>收货人姓名{{item.name}}</h4>
          <el-button
            v-show="item.flag === 1"
            style="padding: 5px;margin-left: 10px;"
            size="small"
            type="primary"
          >默认地址</el-button>
        </div>
        <el-form :inline="false" label-width="150px" class="addressClass_two">
          <el-form-item label="收货地址：">
            <div>{{item.addresas}}</div>
          </el-form-item>
          <el-form-item label="地址：">
            <div>{{item.add}}</div>
          </el-form-item>
          <el-form-item label="手机号：">
            <div>{{item.phone}}</div>
          </el-form-item>
          <el-form-item label="电子邮箱：">
            <div>{{item.mail}}</div>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button v-if="item.flag === 1" size="small" type="primary"  @click="dialogFormVisible = true">编辑</el-button>
        <div v-else>
          <el-button type="text" size="small">设为默认地址</el-button>
          <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
        </div>
      </div>
    </div>
    <div class="addClass2">
      <el-button size="small" type="primary" @click="dialogFormVisible = true">新增收货地址</el-button>
      <!-- <span style="margin-left:30px;">您已创建5个地址，最多可创建20个。</span> -->
    </div>

    <el-dialog width="45%" title="地址编辑" :visible.sync="dialogFormVisible" class="dialogClass">
      <el-form :model="ruleForm" class="ruleFormClass" :label-width="labelWidth">
        <el-form-item label="收货人姓名：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="手机号：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="收回区域：" prop="address">
          <el-cascader :options="options">
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf">({{ data.children.length }})</span>
            </template>
          </el-cascader>
        </el-form-item>
        
        <el-form-item label="默认地址：" prop="name">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="否"></el-radio>
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详细地址：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
export default {
  data() {
    return {
      labelWidth:"200px",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
      },
      formLabelWidth: "120px",
      formInline: {
        user: ""
      },
      ruleForm: {
        name: "",
        address: "",
        resource: '',
      },
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
      list: [
        {
          name: "11111",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 1
        },
        {
          name: "22222",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "33333",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "44444",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "55555",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "66666",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "77777",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "88888",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "99999",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "00000",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "99999",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "88888",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "77777",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "66666",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "55555",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "44444",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "33333",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "22222",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "11111",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        },
        {
          name: "00000",
          addresas: "北京市海淀区",
          add: "北京市海淀区金鑫大厦",
          phone: "18911112222",
          mail: "18911112222@sjgtw.com",
          flag: 0
        }
      ]
    };
  },

  computed: {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },

  created() {},

  mounted() {},

  components: {
    headerBox
  }
};
</script>

<style scoped>
.inlieStyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
}
.addClass {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.ipt >>> input {
  width: 500px;
}
.addressClass {
  display: flex;
  align-items: center;
  margin-left: 50px;
  border: 1px solid #dcdfe6;
  padding: 10px;
  margin-top: 10px;
}
.addressClass:hover {
  background: skyblue;
}
.addressClass > :nth-of-type(1) {
  width: 70%;
}
.addressClass > :nth-of-type(2) {
  margin: 0 auto;
}
.addressClass_two {
  display: flex;
  flex-direction: column;
}
.addressClass_two >>> .el-form-item {
  margin: 0px;
}
.addressClass_two >>> .el-form-item__content {
  display: flex;
}
.addClass2 {
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 10px;
}
.ruleFormClass{
  /* border: 1px solid red; */
}
.ruleFormClass >>> .el-form-item {
  /* width: 200px; */
  display: flex;
}
.ruleFormClass >>> .el-form-item__content {
  margin-left: 0px !important;
}
.dialogClass >>> .el-dialog__header{
  display: flex;
}
</style>
