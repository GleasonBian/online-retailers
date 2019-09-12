<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:38:57
 * @LastEditTime: 2019-08-27 14:05:59
 * @LastEditors: Please set LastEditors
 -->
<!--  -->
<template>
  <div>
    <headerBox title="收货地址"></headerBox>
    <!--<el-form :inline="true" :model="formInline" class="demo-form-inline inlieStyle">-->
      <!--<el-form-item label="收货地址" >-->
        <!--<el-input class="ipt" v-model="formInline.user" placeholder="详情地址"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button size="small" type="primary" @click="onSubmit" class="address_search">搜索</el-button>-->
        <!--<el-button size="small" @click="resetForm('ruleForm')" class="address_word">重置</el-button>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
    <div class="addClass">
      <el-button size="small" type="primary" @click="handelUpdateShow(1)">新增收货地址</el-button>
      <span style="margin-left:30px;">您已创建{{this.listNumber.total}}个地址，最多可创建20个。</span>
    </div>
    <div class="addressClass" v-for="(item,index) in list" :key="index">
      <div>
        <div
          style="display:flex;justify-content: flex-start;align-items: center;margin-top: 5px;margin-bottom: 10px;"
        >
          <h4 style="font-size: 20px;">收货人姓名: {{item.recieverName}}</h4>
          <el-button
            v-show="item.flag === 1"
            style="padding: 5px;margin-left: 10px;"
            size="small"
            type="primary"
          >默认地址</el-button>
        </div>
        <el-form :inline="false" label-width="150px" class="addressClass_two">
          <el-form-item label="收货地址：">
            <div>{{item.area?item.area.displayName:""}}</div>
          </el-form-item>
          <el-form-item label="地址：">
            <div>{{item.wholeAddress}}</div>
          </el-form-item>
          <el-form-item label="手机号：">
            <div>{{item.telPhone}}</div>
          </el-form-item>
          <!--<el-form-item label="电子邮箱：">-->
            <!--<div>{{item.zipCode}}</div>-->
          <!--</el-form-item>-->
        </el-form>
      </div>

      <div>
        <el-button v-if="item.isDefault === 1" size="small" type="primary"  @click="handelUpdateShow(2,item)" class="address_search">编 辑</el-button>
        <div v-else class="address_default">
          <el-button type="text" size="small" @click="handelIsDefault(item)">设为默认地址</el-button>
          <el-button type="text" size="small" @click="handelUpdateShow(2,item)">编辑</el-button>
          <el-button type="text" size="small" @click="handelDeleteShow(item)">删除</el-button>
        </div>
      </div>
    </div>
    <el-dialog
       class="addressElDialog"
       :visible.sync="deleteShow"
       width="20%"
       center
    >
      <h5>删除确定?</h5>
      <div class="deleteMain">
        确定要删除当前地址吗?
      </div>
      <div class="delete_upload">
        <button class="cursor" @click="handelDeleteShow1">取消</button>
        <button class="cursor" @click="handelDeleteMin">确定</button>
      </div>
    </el-dialog>

    <!--最多创建提示框-->
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
  <!--  <div class="addClass2">
      <el-button size="small" type="primary" @click="handelUpdateShow(1)">新增收货地址</el-button>
      &lt;!&ndash; <span style="margin-left:30px;">您已创建5个地址，最多可创建20个。</span> &ndash;&gt;
    </div>-->
      <div class="addClass2">
      <el-pagination
        :total="listNumber.total"
        :page-count="listNumber.pageCount"
        @current-change="handelPageChange"
        class="addresspageClass"
      >
      </el-pagination>
      <!-- <span style="margin-left:30px;">您已创建5个地址，最多可创建20个。</span> -->
    </div>

    <el-dialog width="45%" :visible.sync="dialogFormVisible" custom-class="dialogClass">
      <div class="personInfo_modal_title row_between_center_wrap">
        <span class="modal_title_span">{{addInfo}}</span>
        <i class="el-icon-close personinfo_modal_close cursor" @click="handelClearList"></i>
      </div>
      <el-form :model="fromData" class="ruleFormClass" ref="fromData" :label-width="labelWidth" :rules="rules">
        <el-form-item label="收货人姓名：" prop="recieverName" >
          <el-input v-model="fromData.recieverName" class="address_update_inp"></el-input>
        </el-form-item>

        <el-form-item label="手机号：" prop="telPhone" >
          <el-input v-model="fromData.telPhone" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item label="所在地区：" prop="leveList" :rules="leveListCules">
          <el-cascader
                  :options="region"
                  v-model="fromData.leveList"
                  :props="address"
                  @active-item-change="handelCityChange"
                  @visible-change="handelCityAndShow"
                  :placeholder="cityDisplay"
                  @change="handelCityAddChange" class="address_update_inp address_update_input">
          </el-cascader>
        </el-form-item>
        <!--@active-item-change="handelCityChange"-->
        <el-form-item label="默认地址：" prop="isDefault">
          <el-radio-group v-model="fromData.isDefault">
            <el-radio :label="0" size="medium" border>否</el-radio>
            <el-radio :label="1" size="medium" border>是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详细地址：" prop="address" >
          <el-input v-model="fromData.address" class="address_update_inp"></el-input>
        </el-form-item>
        <el-form-item class="dialog-footer">
          <el-button type="primary" @click="saveAddress('fromData')" class="address_btn">确认</el-button>
          <el-button @click="handelClearList" class="address_btn1">关闭</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>

<script>
import headerBox from "#/personalCenter/person/headerBox.vue";
import {addressInfo,editSaveInfo,levelInfo,cityInfo,isFaultInfo,deleteAddress} from '@/getData.js'
export default {
  data() {
    var checkedOldPhone = (rule,value,callback)=>{//手机号验证
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
    }
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
      rules:{
        recieverName:[
          {required:true,message:'姓名不能为空',trigger:'blur'},
          {min:1,max:9,message:'请输入长度3到9',trigger:'blur'},
        ],
        telPhone:[
          {required:true,validator:checkedOldPhone,trigger:'blur'}
        ],
        leveList:[

        ],
        address:[
          {required:true,message:'详细地址不能为空',trigger:'blur'},
        ],
      },
      leveListCules:[{required:true,message:'地址不能为空',trigger:'blur'}],
      list:[],
      saveType:'1',
      addInfo:"新建地址",
      userId:"",
      listNumber:"",
      // leveList:['黑龙江省','哈尔滨市','南岗区'],
      region:[],
      address:{
        value:"id",
        label:"areaName",
        children:'child',
        // checkStrictly:true
      },
      cltyList:[],
      newRegion:[],
      twoRegion:[],
      fromData:{
        recieverName:'',
        areaId:'',
        areaName:'',
        address:'',
        telPhone:'',
        zipCode:'',
        isDefault:"",
        leveList:[]
      },
      cityList:[],
      editItem:[],
      pageNumber:1,
      deleteShow:false,
      deleteItem:[],
      addShow:false,
      cityDisplay:''
    };
  },

  computed: {},


  created() {
    let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
    this.userId = loginInfo.userId;
    // this.region = region
  },
  mounted() {
    this.handelAddressList();
    this.handelAddressLeavel();//省级联动
  },
  methods: {
    handelClearList(){//清空编辑数据
      this.fromData.recieverName = "";
      this.fromData.address = "";
      this.fromData.telPhone = "";
      this.fromData.isDefault = "";
      this.cityList.id = "";
      this.cityList.displayName = "";
      this.cityDisplay ='请选择';
      this.dialogFormVisible = false
    },
    handelDeleteShow(item){//删除提示
      this.deleteShow  = true;
      this.deleteItem = item
    },
    handelDeleteShow1(){
      this.deleteShow  = false
    },
    async handelDeleteMin(){//删除地址
      const res = deleteAddress({ids:this.deleteItem.id});
      setTimeout(()=>{
        this.handelAddressList();
        this.deleteShow  = false
      },100)
    },
    async handelIsDefault(item){//设置默认地址
      const res = isFaultInfo({id:item.id});
      this.handelAddressList();
      window.location.reload()
    },
    onSubmit() {

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handelUpdateShow(type,item){//改变状态
      if(type==1){
        this.addInfo = '新建地址';
        if(this.listNumber.total==20){
          this.addShow = true
        }else{
          this.saveType = 1;
          this.dialogFormVisible = true
        }
        this.leveListCules=[{required:true,message:'地址不能为空',trigger:'blur'}]
      }else{
        this.addInfo = "编辑地址";
        this.saveType = 2;
        this.editItem = item;
        this.fromData.recieverName = item.recieverName;
        this.fromData.address = item.address
        this.fromData.telPhone = item.telPhone;
        this.fromData.isDefault = item.isDefault;
        this.cityList.id = item.areaId;
        this.cityList.displayName = item.displayName;
        this.cityDisplay = item.displayName;
        this.dialogFormVisible = true;
        this.leveListCules = []
      }
    },
    async handelAddressList(){//默认数据
      const res = await addressInfo({userId:this.userId,pageNo:this.pageNumber});
      this.listNumber = res
      this.list = res.rows
    },
    async saveAddress(fromData){//新建地址和修改地址验证

      this.$refs[fromData].validate((valid)=>{
        if(valid){
          this.handelSaveAddress()
        }else{
          return false
        }
      })
    },
    async handelSaveAddress(){
      this.dialogFormVisible = false;
      let saveInfo;
      if(this.saveType==1){
        saveInfo = {
          recieverName:this.fromData.recieverName,
          areaId:this.cityList.id,
          areaName:this.cityList.displayName,
          address:this.fromData.address,
          telPhone:this.fromData.telPhone,
          isDefault:this.fromData.isDefault
        }
      }else{
        saveInfo = {
          id:this.editItem.id,
          recieverName:this.fromData.recieverName,
          areaId:this.cityList.id,
          areaName:this.cityList.displayName,
          address:this.fromData.address,
          telPhone:this.fromData.telPhone,
          isDefault:this.fromData.isDefault
        }
      }
      const res = await editSaveInfo(saveInfo);
      if(res.errorCode==0){
        this.$message.success('成功')
      }else{
        this.$message.error('失败')
      }
      this.handelClearList()
      this.handelAddressList();
    },
    async handelAddressLeavel(){//一级分类
      const res = await levelInfo({});
      this.region = res.data;
      this.region.map((item,index,array)=>{
        this.$set(array[index],'child', [])
      })
    },
    async handelCityChange(value){//二级分类和三级分类
      let parentId;
      if(value.length === 1){
        parentId = value[0];
        for (let i=0; i<this.region.length; i++){
          if (this.region[i].id === parentId && this.region[i].child.length === 0){
            const res = await cityInfo({
              areaId:parentId
            });
            // console.log(res,2)
            this.$set(this.region[i], 'child', res.data);
            //判断城市id 是否显示县级城市
            if(this.region[i].id===110000||this.region[i].id===120000||this.region[i].id===310000||this.region[i].id===500000||this.region[i].id===460000){
              this.twoRegion = this.region[i].child;
            }else{
              this.region[i].child.map((innerItem, innerIndex) => {
                // 二级分类下必须要设置一个空的child数组，不然点击@active-item-change没反应
                this.$set(this.region[i].child[innerIndex], 'child', []);
              })
            }
          }
        }
      }else{
        parentId = value[1];
        for (let i=0; i<this.region.length; i++){
          for (let n=0; n<this.region[i].child.length; n++){
            if (this.region[i].child[n].id === parentId && this.region[i].child[n].child.length === 0){
              const res = await cityInfo({
                areaId:parentId
              });
/*              if(res.data.length==0){
                Lthis.cityList.id = this.region[i].child[n].id;
                this.cityist.displayName = this.region[i].child[n].displayName
              }else{}*/
              this.$set(this.region[i].child[n], 'child', res.data);
              this.newRegion = this.region[i].child[n].child;
            }
          }
        }
      }
    },
      handelPageChange(page){//分页
        this.pageNumber = page;
        this.handelAddressList()
      },
    async handelCityAddChange(e){
      this.newRegion.map(item =>{
        if (item.id === e[2]){//三级城市筛选id
          this.cityList = item
        }
      });
      this.twoRegion.map(item=>{
        if(item.id===e[1]){//二级城市筛选id
          this.cityList = item
        }
      });
    },
    handelCityAndShow(val){

    }
  },

  components: {
    headerBox
  }
};
</script>

<style scoped>
  >>>.dialogClass>.el-dialog__header,.addressElDialog.el-dialog__header{
    display: none;
  }
  >>>.dialogClass .el-dialog__body{
    padding-top: 0 !important;
  }
  .personinfo_modal_close{
    font-size: 30px;
    margin-right: 20px;
  }
  .personInfo_modal_title{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #CCCCCC;
    color: #000000;
    border-bottom: 1px solid #CCCCCC;
  }
  .personInfo_modal_title span{
    font-size: 25px;
    font-family: '微软雅黑 Light';
    margin-left: 10px;
  }
  .address_search{
    width: 120px;
    height: 40px;
    border-radius:5px;
    background: #1c7cce;
    color: white;
    font-size: 18px;
  }
  .address_word{
    width: 120px;
    height: 43px;
    border-radius:5px;
    background: #e6e6e6;
    font-size: 18px;
  }
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
  padding: 30px;
  margin-top: 10px;
  position: relative;
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
  margin-top: 30px;
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
  .address_default{
    position: absolute;
    bottom:30px;
    right: 20px;
  }
  .address_btn{
    width: 160px;
    height: 40px;
    color: white;
    border-radius: 5px;
    font-size: 18px;
  }
  .address_btn1{
    width: 160px;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
    background: #E6E6E6E6;
    float: right;
  }
  .address_update_inp{
    width: 400px;
  }
  >>>.address_update_inp .el-input__inner::-webkit-input-placeholder{
    color: #606266;
  }
    >>>.addresspageClass{
        margin:  0 auto;

    }
    >>>.addressElDialog .el-dialog__body{
      padding: 0 !important;
    }
    >>>.addressElDialog h5{
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      font-size: 25px
    }
    >>>.addressElDialog .deleteMain{
      width: 100%;
      height: 120px;
      text-align: center;
      line-height: 120px;
      font-size: 20px;
    }
    >>>.addressElDialog .delete_upload{
      width: 100%;
      height: 47px;
      display: flex;
    }
    >>>.addressElDialog .delete_upload button{
      width: 50%;
      height: 74px;
      line-height: 74px;
      border-top: 1px solid #cccccc;
      text-align: center;
      background: #ffffff;
      border-right: 1px solid #cccccc;
      font-size: 20px;
    }
    .delete_upload button:last-child{
      border-right: none;
      color: blue;
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
    margin-left: 28%;
    margin-bottom: 20px;
  }
  .dialog-footer{
    position: absolute;
    right: 5%;
  }
</style>
