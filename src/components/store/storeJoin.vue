<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:56:02
 * @LastEditTime: 2019-09-04 10:41:30
 * @LastEditors: OBKoro1
 -->
<!-- 商家入驻 -->
<template>
  <div>
    <headerCom></headerCom>
    <div class="store_box">
      <div class="store_title">信息提交</div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="storeRuleForm"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-form-item label="法人名称：" prop="corporateRepresentative">
          <el-input
            placeholder="请填写"
            v-model="ruleForm.corporateRepresentative"
            style="width:160px"
          ></el-input>
        </el-form-item>
        <el-form-item label="身份证号：" prop="idCard">
          <el-input placeholder="请填写" v-model="ruleForm.idCard" style="width:222px"></el-input>
        </el-form-item>
        <el-form-item label="当前企业名称：" prop="name">
          <el-input placeholder="请填写" v-model="ruleForm.name" style="width:222px"></el-input>
        </el-form-item>
        <el-form-item label="企业所在城市：" prop="registeredAddressCode">
          <el-cascader
            style="width:260px"
            :options="region"
            v-model="ruleForm.registeredAddressCode"
            :props="address"
            @active-item-change="handelCityChange"
            @change="aaa"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址：" prop="registeredAddressDetail">
          <el-input
            placeholder="请填写"
            v-model="ruleForm.registeredAddressDetail"
            style="width:260px"
          ></el-input>
        </el-form-item>

        <!-- <el-form-item label="店铺名称：" prop="store">
        <el-input v-model="ruleForm.store"></el-input>
        </el-form-item>-->

        <el-form-item label="法人身份证正面照：" prop="cardFront" class="imgStyle">
          <el-upload
            class="upload-demo"
            :action="imgurl"
            :on-success="handlePreview"
            :show-file-list="false"
            name="imageFile"
          >
            <el-button
              slot="trigger"
              style="font-size:12px;padding: 3px 0px;width:80px;"
              size="small"
              type="primary"
            >选取文件</el-button>
            <span class="weiStyle" v-show="ruleForm.cardFront === ''">未选择任何文件</span>
          </el-upload>
          <img
            v-if="ruleForm.cardFront === ''"
            class="upImg"
            src="~assets/positive-icon.png"
            alt
            srcset
          />
          <img v-else class="upImg" :src="ruleForm.cardFront" alt srcset />
        </el-form-item>

        <el-form-item label="法人身份证反面照：" prop="cardBack" class="imgStyle">
          <el-upload
            class="upload-demo"
            :action="imgurl"
            :on-success="handlePreview1"
            :show-file-list="false"
            name="imageFile"
          >
            <el-button
              slot="trigger"
              style="font-size:12px;padding: 3px 0px;width:80px;"
              size="small"
              type="primary"
            >选取文件</el-button>
            <span class="weiStyle" v-show="ruleForm.cardBack === ''">未选择任何文件</span>
          </el-upload>
          <img
            v-if="ruleForm.cardBack === ''"
            class="upImg"
            src="~assets/reverseicon.png"
            alt
            srcset
          />
          <img v-else class="upImg" :src="ruleForm.cardBack" alt srcset />
        </el-form-item>

        <el-form-item label="法人手持身份证照：" prop="holdCard" class="imgStyle">
          <el-upload
            class="upload-demo"
            :action="imgurl"
            :on-success="handlePreview2"
            :show-file-list="false"
            name="imageFile"
          >
            <el-button
              slot="trigger"
              style="font-size:12px;padding: 3px 0px;width:80px;"
              size="small"
              type="primary"
            >选取文件</el-button>
            <span class="weiStyle" v-show="ruleForm.holdCard === ''">未选择任何文件</span>
          </el-upload>
          <img
            v-if="ruleForm.holdCard === ''"
            class="upImg"
            src="~assets/hand-sfz-icon.png"
            alt
            srcset
          />
          <img v-else class="upImg" :src="ruleForm.holdCard" alt srcset />
        </el-form-item>

        <el-form-item label="营业执照：" prop="businessLicense" class="imgStyle">
          <el-upload
            class="upload-demo"
            :action="imgurl"
            :on-success="handlePreview3"
            :show-file-list="false"
            name="imageFile"
          >
            <el-button
              slot="trigger"
              style="font-size:12px;padding: 3px 0px;width:80px;"
              size="small"
              type="primary"
            >选取文件</el-button>
            <span class="weiStyle" v-show="ruleForm.businessLicense === ''">未选择任何文件</span>
          </el-upload>
          <img
            v-if="ruleForm.businessLicense === ''"
            class="upImg"
            src="~assets/license-icon.png"
            alt
            srcset
          />
          <img v-else class="upImg" :src="ruleForm.businessLicense" alt srcset />
        </el-form-item>

        <el-form-item label="企业银行账户：" prop="bankNum">
          <el-input placeholder="请填写" v-model="ruleForm.bankNum" style="width:260px"></el-input>
        </el-form-item>
        <el-form-item label="开户行：" prop="openBank">
          <el-input placeholder="请填写" v-model="ruleForm.openBank" style="width:160px"></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人：" prop="contactsName">
          <el-input placeholder="请填写" v-model="ruleForm.contactsName" style="width:160px"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" prop="contactsPhone">
          <el-input placeholder="请填写" v-model="ruleForm.contactsPhone" style="width:160px"></el-input>
        </el-form-item>

        <el-form-item class="sub_box">
          <el-button class="subStyle" type="primary" @click="submitForm('storeRuleForm')">提交申请</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
      <div class="store_title1"></div>
    </div>
    <div class="footer bg"></div>
    <el-dialog
      title="操作提示"
      :visible.sync="centerDialogVisible"
      width="400px"
      center
      class="tsStyle"
    >
      <div class="dialogTitle">
        <img style="width:67px;" src="~assets/zhifu-img.png" alt />
        <div style="width: 185px;text-align: center;margin-top: 20px;">您的申请已提交，请耐心等待审核，谢谢！</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
import {
  enterpriseApply,
  levelInfo,
  cityInfo,
  isFaultInfo
} from "@/getData.js";
import { mapState } from "vuex";
export default {
  name: "storeJoin",
  data() {
    var validateCorporateRepresentative = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 法人名称"));
      else if (value) {
        if (this.$Validate.username(value)) {
          this.$refs.storeRuleForm.validateField("corporateRepresentative");
        } else {
          callback(new Error("请输入 法人名称"));
        }
      }
    };

    var validateIdCard = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 身份证号"));
      else if (value) {
        if (this.$Validate.identitycode(value)) {
          this.$refs.storeRuleForm.validateField("idCard");
        } else {
          callback(new Error("请输入 身份证号"));
        }
      }
    };

    var validateName = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入企业名称"));
      else if (value) {
        if (this.$Validate.noTitle(value)) {
          // console.log(value);
          this.$refs.storeRuleForm.validateField("name");
          // const res = await checkphoneistrue({ userid: value });
          // if (res) {
          //   callback(new Error("手机号已存在"));
          // } else {
          // }
        } else {
          callback(new Error("请输入正确的企业名称"));
        }
      }
    };

    var validateRegisteredAddress = async (rule, value, callback) => {
      if (!value) return callback(new Error("请选择 注册地址"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("registeredAddressCode");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      } else {
      }
    };
    var validateRegisteredAddressDetail = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 详细地址"));
      else if (value) {
        // if (this.$Validate.username(value)) {
        this.$refs.storeRuleForm.validateField("registeredAddressDetail");
        // } else {
        // callback(new Error("请输入 详细地址"));
        // }
      }
    };

    // var validateStore = async (rule, value, callback) => {
    //   if (!value) return callback(new Error("请输入店铺名称"));
    //   else if (value) {
    //     if (this.$Validate.noTitle(value)) {
    //       // console.log(value);
    //       this.$refs.storeRuleForm.validateField("store");
    //       // const res = await checkphoneistrue({ userid: value });
    //       // if (res) {
    //       //   callback(new Error("手机号已存在"));
    //       // } else {
    //       // }
    //     } else {
    //       callback(new Error("请输入正确的店铺名称"));
    //     }
    //   }
    // };

    var validateCardFront = async (rule, value, callback) => {
      if (!value) return callback(new Error("请上传 法人身份证正面照"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("cardFront");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateCardBack = async (rule, value, callback) => {
      if (!value) return callback(new Error("请上传 法人身份证反面照"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("cardBack");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateHoldCard = async (rule, value, callback) => {
      if (!value) return callback(new Error("请上传 法人手持身份证照"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("holdCard");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateBusinessLicense = async (rule, value, callback) => {
      if (!value) return callback(new Error("请上传 营业执照"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("businessLicense");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateOpenBank = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 开户行"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("openBank");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateBankNum = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 企业银行账户"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("bankNum");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateContactsName = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 紧急联系人"));
      else if (value) {
        this.$refs.storeRuleForm.validateField("contactsName");
        // if (this.$Validate.digits(value)) {
        // } else {
        //   callback(new Error("请输入 注册地址"));
        // }
      }
    };

    var validateContactsPhone = async (rule, value, callback) => {
      if (!value) return callback(new Error("请输入 联系方式"));
      else if (value) {
        if (this.$Validate.mobilephone(value)) {
          this.$refs.storeRuleForm.validateField("contactsPhone");
        } else {
          callback(new Error("请输入 联系方式"));
        }
      }
    };

    return {
      // 图片地址
      baseImg: process.env.VUE_APP_IMG,
      // 表单参数
      ruleForm: {
        corporateRepresentative: "", // 法人名称
        idCard: "", // 身份证号
        name: "", // 企业名称
        registeredAddressCode: "", // 注册地址
        registeredAddressDetail: "", // 详细地址
        // store: "", // 店铺名称
        cardFront: "", // 法人身份证正面照
        cardBack: "", // 法人身份证反面照
        holdCard: "", // 法人手持身份证照
        businessLicense: "", // 营业执照
        openBank: "", // 开户行
        bankNum: "", // 企业银行账户
        contactsName: "", // 紧急联系人
        contactsPhone: "" // 联系方式
      },
      rules: {
        corporateRepresentative: [
          {
            required: true,
            validator: validateCorporateRepresentative,
            trigger: ["blur"]
          }
        ],
        name: [{ required: true, validator: validateName, trigger: ["blur"] }],
        // store: [
        //   { required: true, validator: validateStore, trigger: ["blur"] }
        // ],
        idCard: [
          {
            required: true,
            validator: validateIdCard,
            trigger: ["blur"]
          }
        ],
        registeredAddressCode: [
          {
            required: true,
            validator: validateRegisteredAddress,
            trigger: ["blur"]
          }
        ],
        registeredAddressDetail: [
          {
            required: true,
            validator: validateRegisteredAddressDetail,
            trigger: ["blur"]
          }
        ],
        cardFront: [
          { required: true, validator: validateCardFront, trigger: ["blur"] }
        ],
        cardBack: [
          { required: true, validator: validateCardBack, trigger: ["blur"] }
        ],
        holdCard: [
          { required: true, validator: validateHoldCard, trigger: ["blur"] }
        ],

        businessLicense: [
          {
            required: true,
            validator: validateBusinessLicense,
            trigger: ["blur"]
          }
        ],

        openBank: [
          { required: true, validator: validateOpenBank, trigger: ["blur"] }
        ],
        bankNum: [
          { required: true, validator: validateBankNum, trigger: ["blur"] }
        ],
        contactsName: [
          { required: true, validator: validateContactsName, trigger: ["blur"] }
        ],
        contactsPhone: [
          {
            required: true,
            validator: validateContactsPhone,
            trigger: ["blur"]
          }
        ]
      },
      // 选择地区
      region: [],
      address: {
        value: "id",
        label: "areaName",
        children: "child",
        leaf: true,
        // checkStrictly: true
      },
      // 提示
      centerDialogVisible: false,
      twoRegion:[],
      newRegion:[],
      cityList:[]
    };
  },

  computed: mapState(["userInfo"]),

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitUpload();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async submitUpload() {
      let businessLicense = this.ruleForm.businessLicense;
      let cardBack = this.ruleForm.cardBack;
      let cardFront = this.ruleForm.cardFront;
      let holdCard = this.ruleForm.holdCard;
      let registeredAddressCode = this.ruleForm.registeredAddressCode;
      this.ruleForm.businessLicense = businessLicense.substring(
        businessLicense.indexOf("M") - 1
      );
      this.ruleForm.cardBack = cardBack.substring(cardBack.indexOf("M") - 1);
      this.ruleForm.cardFront = cardFront.substring(cardFront.indexOf("M") - 1);
      this.ruleForm.holdCard = holdCard.substring(holdCard.indexOf("M") - 1);
      this.ruleForm.registeredAddressCode =
        registeredAddressCode[registeredAddressCode.length - 1];
      let userInfo = {
        type: "SUPPLIER",
        createUserId: this.userInfo.userId,
        createUserName: this.userInfo.userName
      };
      let subData = Object.assign(this.ruleForm, userInfo);
      const res = await enterpriseApply(subData);
      if (JSON.stringify(res.data) == "{}") {
        this.$message.warning(res.message);
      } else {
        this.resetForm("storeRuleForm");
        this.centerDialogVisible = true;
        // this.$message.success(res.message);
      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      this.ruleForm.cardFront = this.baseImg + file.data.filePath;
    },
    handlePreview1(file) {
      this.ruleForm.cardBack = this.baseImg + file.data.filePath;
    },
    handlePreview2(file) {
      this.ruleForm.holdCard = this.baseImg + file.data.filePath;
    },
    handlePreview3(file) {
      this.ruleForm.businessLicense = this.baseImg + file.data.filePath;
    },
    async handelAddressLeavel() {
      const res = await levelInfo({});
      this.region = res.data;
      this.region.map((item, index, array) => {
        this.$set(array[index], "child", []);
      });
    },
    async handelCityChange(value) {
      console.log("value", value);
      let parentId;
      if (value.length === 1) {
        parentId = value[0];
        for (let i = 0; i < this.region.length; i++) {
          if (
            this.region[i].id === parentId &&
            this.region[i].child.length === 0
          ) {
            const res = await cityInfo({
              areaId: parentId
            });
            this.$set(this.region[i], "child", res.data);

            if(this.region[i].id===110000||this.region[i].id===120000||this.region[i].id===310000||this.region[i].id===500000||this.region[i].id===460000){
              this.twoRegion = this.region[i].child;
            }else{
              this.region[i].child.map((innerItem, innerIndex) => {
                // 二级分类下必须要设置一个空的child数组，不然点击@active-item-change没反应
                this.$set(this.region[i].child[innerIndex], "child", []);
              });
            }

          }
        }
      } else {
        parentId = value[1];
        for (let i = 0; i < this.region.length; i++) {
          for (let n = 0; n < this.region[i].child.length; n++) {
            if (
              this.region[i].child[n].id === parentId &&
              this.region[i].child[n].child.length === 0
            ) {
              const res = await cityInfo({
                areaId: parentId
              });
              console.log(res);
              this.$set(this.region[i].child[n], "child", res.data);
              console.log("this.region", this.region[i].child[n]);
              this.newRegion = this.region[i].child[n].child;
            }
          }
        }
      }
    },
    async aaa(e) {
      this.newRegion.map(item => {
        if (item.id === e[2]) {
          this.cityList = item;
        }
      });
      this.twoRegion.map(item=>{
        if(item.id===e[1]){//二级城市筛选id
          this.cityList = item
        }
      });
    }
  },

  created() {
    let baseurl =
      process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
        ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
        : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'
    this.imgurl = baseurl + "/system/uploadImage";
    this.handelAddressLeavel(); //省级联动
  },

  mounted() {},

  components: {
    headerCom
  }
};
</script>

<style scoped>
.demo-ruleForm {
  width: 623px;
  /* border: 1px solid #DCDFE6; */
  margin: 48px auto 0;
  /* padding: 20px 0; */
}
.demo-ruleForm >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.upload-demo {
  width: 222px;
  border: 1px solid #dcdfe6;
  display: flex;
  padding-left: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
}
.upImg {
  height: 120px;
  width: 174px;
  margin-left: 50px;
  border: 1px dashed #dcdfe6;
  border-radius: 10px;
}
.store_box {
  width: 1200px;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  margin: 24px auto 0;
}
.store_title {
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  padding: 16px 0 16px 24px;
}
.store_title1 {
  border-top: 1px solid #dcdfe6;
  display: flex;
  padding: 16px 0 16px 24px;
}

.footer {
  height: 192px;
  width: 1921px;
  background: url("~assets/footer.png");
  margin-top: 0px;
}
.imgStyle >>> label {
  height: 122px;
  line-height: 122px;
}
.weiStyle {
  margin-right: 28px;
  font-size: 12px;
  color: #1c7cce;
}
.subStyle {
  font-size: 18px;
  width: 160px;
  height: 40px;
}
.sub_box >>> .el-form-item__content {
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialogTitle {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.tsStyle > div {
  height: 240px;
  border-radius: 10px;
}
a {
  text-decoration: none;
}
</style>
