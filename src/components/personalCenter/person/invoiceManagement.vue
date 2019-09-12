<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:04:02
 * @LastEditTime: 2019-09-04 10:15:43
 * @LastEditors: OBKoro1
 -->
<!--  -->
<template>
  <div>
    <headerBox title="发票管理"></headerBox>
    <div class="addClass">
      <el-button size="small" type="primary" @click="handelAddManage(1)" class="add_manage">新增发票</el-button>
      <span style="margin-left:30px;">您已创建{{this.mangeListInfo.total}}个发票，最多可创建20个。</span>
    </div>
    <div class="addressClass" v-for="(item,index) in this.mangeListInfo.rows" :key="index">
      <div>
        <el-form :inline="false" label-width="150px" class="addressClass_two">
          <el-form-item label="单位名称："><div>{{item.companyName}}</div></el-form-item>
          <el-form-item label="纳税人识别号："><div>{{item.taxpayCode}}</div></el-form-item>
          <el-form-item label="注册地址："><div>{{item.registryAddress}}</div></el-form-item>
          <el-form-item label="注册电话："><div>{{item.registryPhone}}</div></el-form-item>
          <el-form-item label="开户银行："><div>{{item.openAccount}}</div></el-form-item>
          <el-form-item label="开户银行账户："><div>{{item.accountNumber}}</div></el-form-item>
          <el-form-item label="收票人姓名："><div>{{item.receiverName}}</div></el-form-item>
          <el-form-item label="收票人手机号："><div>{{item.receiverPhone}}</div></el-form-item>
          <el-form-item label="发票邮寄地址："><div>{{item.receiverAddr}}</div></el-form-item>
        </el-form>
      </div>
      <div style="position: relative">
        <el-button
          size="small"
          type="primary"
          @click="handelAddManage(2,item)"
          class="address_search"
        >编辑</el-button>
        <i class="el-icon-close addressClass_close" @click="handelMangeClose(item)"></i>
        <!-- <div v-else>
          <el-button type="text" size="small">设为默认地址</el-button>
          <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
        </div>-->
      </div>
    </div>
      <div class="addClass2">
      <el-pagination
              :total="mangeListInfo.total"
              :page-count="manageInfo.pageCount"
              @current-change="handelPageChange"
              class="addresspageClass"
      >
      </el-pagination>
    </div>

    <el-dialog
      width="45%"
      title="地址编辑"
      :visible.sync="dialogFormVisible"
      custom-class="dialogClass"
    >
      <div class="personInfo_modal_title row_between_center_wrap">
        <span class="modal_title_span">{{manageInfo}}</span>
        <i class="el-icon-close personinfo_modal_close cursor" @click="dialogFormVisible=false"></i>
      </div>

      <el-form class="ruleFormClass" :label-width="labelWidth" :model="fromData" ref="fromData" :rules="rules">
        <el-form-item
          label="单位名称："
          prop="companyName"
          class="mange_from_label"
        >
          <el-input v-model="fromData.companyName" class="address_update_inp" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="纳税人识别号："
          prop="taxpayCode"
          class="mange_from_label">
          <el-input v-model="fromData.taxpayCode" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="注册地址："
          prop="registryAddress"
          class="mange_from_label"
        >
          <el-input
            v-model="fromData.registryAddress"
            type="textarea"
            minlength="30"
            :rows="4"
            class="address_update_inp"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="注册电话："
          prop="registryPhone"
          class="mange_from_label"
        >
          <el-input v-model="fromData.registryPhone" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="开户银行："
          prop="openAccount"
          class="mange_from_label"
        >
          <el-input v-model="fromData.openAccount" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="开户银行账户："
          prop="accountNumber"
          class="mange_from_label"
        >
          <el-input v-model="fromData.accountNumber" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="收票人姓名："
          prop="receiverName"
          class="mange_from_label"
        >
          <el-input v-model="fromData.receiverName" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="收票人手机："
          prop="receiverPhone"
          class="mange_from_label"
        >
          <el-input v-model="fromData.receiverPhone" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item
          label="发票邮寄地址："
          prop="receiverAddr"
          class="mange_from_label"
        >
          <el-input v-model="fromData.receiverAddr" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item  class="address_item_box">
            <el-button type="primary" @click="handelListSumbit('fromData')" class="address_btn">保存发票信息</el-button>
        </el-form-item>
        <div class="address_btn"></div>
      </el-form>

    </el-dialog>

    <el-dialog class="addressElDialog" :visible.sync="deleteShow" width="20%" center>
      <h5>删除确定?</h5>
      <div class="deleteMain">确定要删除当前地址吗?</div>
      <div class="delete_upload">
        <button class="cursor" @click="handelDeleteShow1">取消</button>
        <button class="cursor" @click="handelMangeDelete">确定</button>
      </div>
    </el-dialog>

    <el-dialog
            class="addressElDialog"
            :visible.sync="addShow"
            width="20%"
            center
    >
      <h5>提示</h5>
      <div class="addMain">
        您创建的发票信息数量已达上限（20），请对已有发票信息进行修改、或者删除之后可新建发票。
      </div>
      <div>
        <el-button type="primary"  class="add_main_btn" @click="addShow=false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
import { manageMentInfo, manageEditInfo, manageDeleteInfo } from "@/getData.js";
import { mapState } from "vuex";
export default {
  data() {
    var checkedPhone = (rule,value,callback)=>{//手机号验证
      var phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
      if(!value){
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(()=>{
        if(!Number.isInteger(+value)){
          callback(new Error('请输入'))
        }else{
          if(phoneReg.test(value)){
            callback()
          }else{
            callback(new Error('号码格式不正确'))
          }
        }
      },100)
    };
    return {
      userId: "",
      labelWidth: "200px",
      rules:{
        companyName:[
          { required: true, message: "请输入单名名称",trigger:'blur'}
        ],
        taxpayCode:[
          { required: true, message: "请输入纳税人识别号",trigger:'blur'},
          {min:15,max:20,message:'输入15位到20位的字符',trigger:'blur'}
        ],
        registryAddress:[
          { required: true, message: "请输入纳税人注册地址",trigger:'blur'},
          {min:1,max:30,message:'请输入1到30位的字符',trigger:'blur'}
        ],
        registryPhone:[
          { required: true, validator:checkedPhone,trigger:'blur'}
        ],
        openAccount:[
          { required: true, message: "请输入纳开户银行",trigger:'blur'}
        ],
        accountNumber:[
          { required: true, message: "请输入开户银行账户",trigger:'blur'},
        ],
        receiverName:[
          { required: true, message: "请输入收票人姓名",trigger:'blur'},
          {min:1,max:20,message:'请输入1到20位的字符',trigger:'blur'}
        ],
        receiverPhone:[
          { required: true, validator:checkedPhone,trigger:'blur'},
        ],
        receiverAddr:[
          { required: true, message: "请输入邮寄地址",trigger:'blur'}
        ]
      },
      dialogFormVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "120px",
      formInline: {
        user: ""
      },
      ruleForm: {
        name: "",
        address: "",
        resource: ""
      },
      mangeListInfo: [],
      pageNumber: 1,
      manageInfo: "添加发票信息",
      saveType: 1,
      fromData: {
        id: "",
        companyName: "",
        taxpayCode: "",
        registryAddress: "",
        registryPhone: "",
        openAccount: "",
        accountNumber: "",
        receiverName: "",
        receiverPhone: "",
        receiverAddr: ""
      },
      deleteShow: false,
      deleteItem: [],
      fromList: {
        name: ""
      },
      numberValidateForm: {
        age: ""
      },
      addShow:false
    };
  },

  computed: mapState(["userInfo"]),

  created() {
    this.userId = this.userInfo.userId;
    this.handelMangeList();
  },
  methods: {
    async handelMangeList() {
      //加载发票信息
      const res = await manageMentInfo({
        userId: this.userId,
        pageNo: this.pageNumber
      });
      this.mangeListInfo = res;
    },
    handelAddManage(type, item) {
      //添加修改切换状态
      if (type == 1) {
        this.manageInfo = "添加发票信息";
        if(this.mangeListInfo.total==20){
          this.addShow = true
        }else{
          this.saveType = type;
          this.dialogFormVisible = true
        }
      } else {
        this.manageInfo = "修改发票信息";
        this.saveType = type;
        this.fromData.id = item.id;
        this.fromData.companyName = item.companyName;
        this.fromData.taxpayCode = item.taxpayCode;
        this.fromData.registryAddress = item.registryAddress;
        this.fromData.registryPhone = item.registryPhone;
        this.fromData.registryPhone = item.registryPhone;
        this.fromData.openAccount = item.openAccount;
        this.fromData.accountNumber = item.accountNumber;
        this.fromData.receiverName = item.receiverName;
        this.fromData.receiverPhone = item.receiverPhone;
        this.fromData.receiverAddr = item.receiverAddr;
        this.dialogFormVisible = true;
      }
    },
    async handelListSumbit(fromData) {
      //添加修改发票信息
      this.$refs[fromData].validate(valid => {
        if (valid) {
          this.handelEditList();
        } else {
          return false;
        }
      });
    },
    async handelEditList() {//根据状态改变 添加和编辑
      let manageInfo = {};
      if (this.saveType == 1) {//添加状态
        manageInfo = {
          companyName: this.fromData.companyName,
          taxpayCode: this.fromData.taxpayCode,
          registryAddress: this.fromData.registryAddress,
          registryPhone: this.fromData.registryPhone,
          openAccount: this.fromData.openAccount,
          accountNumber: this.fromData.accountNumber,
          receiverName: this.fromData.receiverName,
          receiverPhone: this.fromData.receiverPhone,
          receiverAddr: this.fromData.receiverAddr
        };
        const res = await manageEditInfo(manageInfo);
        this.handelMangeList();
        this.handelAllNull();
      } else {//编辑状态
        manageInfo = {
          id: this.fromData.id,
          companyName: this.fromData.companyName,
          taxpayCode: this.fromData.taxpayCode,
          registryAddress: this.fromData.registryAddress,
          registryPhone: this.fromData.registryPhone,
          openAccount: this.fromData.openAccount,
          accountNumber: this.fromData.accountNumber,
          receiverName: this.fromData.receiverName,
          receiverPhone: this.fromData.receiverPhone,
          receiverAddr: this.fromData.receiverAddr
        };
        const res = await manageEditInfo(manageInfo);
        this.handelMangeList();
        this.handelAllNull();
      }
      this.dialogFormVisible = false;
    },
    handelDeleteShow1() {
      this.deleteShow = false;
    },
    handelMangeClose(item) {
      this.deleteShow = true;
      this.deleteItem = item;
    },
    async handelMangeDelete() {
      //删除发票地址
      const res = await manageDeleteInfo({ ids: this.deleteItem.id });
      this.handelMangeList();
      this.deleteShow = false;
    },
    handelPageChange(page) {
      //分页
      this.pageNumber = page;
      this.handelMangeList();
    },
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handelAllNull() {//编辑之后清空
      this.fromData.companyName = "";
      this.fromData.taxpayCode = "";
      this.fromData.registryAddress = "";
      this.fromData.registryPhone = "";
      this.fromData.registryPhone = "";
      this.fromData.openAccount = "";
      this.fromData.accountNumber = "";
      this.fromData.receiverName = "";
      this.fromData.receiverPhone = "";
      this.fromData.receiverAddr = "";
    }
  },

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
  background: white;
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
  position: relative;
  overflow: hidden;
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
.ruleFormClass {
  /* border: 1px solid red; */
}
.ruleFormClass >>> .el-form-item {
  /* width: 200px; */
  display: flex;
}
.ruleFormClass >>> .el-form-item__content {
  margin-left: 0px !important;
}
.dialogClass >>> .el-dialog__header {
  display: flex;
}
>>> .address_search {
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background: #1c7cce;
  color: white;
  font-size: 18px;
}
.add_manage {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  width: 160px;
  height: 40px;
  line-height: 24px;
}
>>> .dialogClass .el-dialog__body {
  padding-top: 0 !important;
}
>>> .dialogClass .el-dialog__header {
  display: none;
}
.personInfo_modal_title {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cccccc;
  color: #000000;
  border-bottom: 1px solid #cccccc;
}
.personInfo_modal_title span {
  font-size: 25px;
  font-family: "微软雅黑 Light";
  margin-left: 10px;
}
.personinfo_modal_close {
  font-size: 30px;
  margin-right: 20px;
}
.address_btn {
  width: 160px;
  height: 40px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
}
.address_update_inp {
  width: 400px;
}
.mange_from_label {
  margin-top: 20px;
}
.mange_from_label >>> label {
  font-size: 18px;
}
>>> .addressElDialog.el-dialog__header {
  display: none;
}
>>> .addressClass_close {
  position: absolute;
  top: -144px;
  right: -33px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
}
>>> .addressElDialog .el-dialog__body {
  padding: 0 !important;
}
>>> .addressElDialog h5 {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
}
>>> .addressElDialog .deleteMain {
  width: 100%;
  height: 120px;
  text-align: center;
  line-height: 120px;
  font-size: 20px;
}
>>> .addressElDialog .delete_upload {
  width: 100%;
  height: 47px;
  display: flex;
}
>>> .addressElDialog .delete_upload button {
  width: 50%;
  height: 74px;
  line-height: 74px;
  border-top: 1px solid #cccccc;
  text-align: center;
  background: #ffffff;
  border-right: 1px solid #cccccc;
  font-size: 20px;
}
.delete_upload button:last-child {
  border-right: nond;
  color: blue;
}
>>> .addresspageClass {
  margin: 0 auto;
}
.dialog-footer {
}
.addMain{
  font-size: 20px;
  padding: 30px;
  letter-spacing: 3px;
}
.add_main_btn{
  width: 160px;
  height: 40px;
  margin:  auto;
  margin-left: 29%;
  margin-bottom: 20px;
}
  .address_item_box{
    position: absolute;right: 0;
    height: 40px;
    width: 200px
  }
</style>