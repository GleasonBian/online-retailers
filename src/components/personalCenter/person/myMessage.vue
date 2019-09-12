<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-30 21:06:21
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-04 10:18:18
 -->
<template>
  <div style="overflow: hidden">
    <header-box title="我的消息"></header-box>
    <ul class="my_message">
      <li
        v-for="(item,index) of messageIndex"
        :class="{my_message_active:index==messageActive}"
        @click="handelMessageIndex(index)"
        :key="index"
      >{{item.name}}</li>
    </ul>
    <div class="my_message_search">
      <el-select
        v-model="allMessage"
        class="my_messeage_select"
        size="small"
        @change="handelAllMessage"
      >
        <el-option value label="全部消息"></el-option>
        <el-option value="1" label="已读消息"></el-option>
        <el-option value="0" label="未读消息"></el-option>
      </el-select>
      <span>创建时间</span>
      <el-date-picker
        v-model="fromData.startTime"
        size="small"
        type="datetime"
        class="my_messeage_dataTime"
        value-format="yyyy-MM-dd"
        placeholder="开始日期"
      ></el-date-picker>
      <p>&nbsp;</p>
      <el-date-picker
        v-model="fromData.endTime"
        size="small"
        type="datetime"
        class="my_messeage_dataTime"
        value-format="yyyy-MM-dd"
        placeholder="结束日期"
      ></el-date-picker>
      <el-button type="primary " class="my_message_time_search" @click="handelMessageSearch">搜索</el-button>
    </div>
    <div class="my_message_delete">
      <el-button class="my_message_active" @click="handelRead">标记已读</el-button>
      <el-button class="my_message_active" @click="handelDelete">批量删除</el-button>
    </div>
    <ul class="my_message_table">
      <li>
        <p style="width: 60px">
          <el-checkbox v-model="checkAll" @change="handelCheckedAll"></el-checkbox>
        </p>
        <p style="width: 100px">序号</p>
        <p style="width: 135px">标题</p>
        <p style="width: 180px">时间</p>
        <p style="width: 130px">状态</p>
        <p style="width: 190px">消息概览</p>
        <p style="width: 180px;">操作</p>
      </li>
      <li v-for="(item,index) of messageList.rows" :key="index">
        <p style="width: 60px">
          <el-checkbox-group v-model="message_checked" @change="handelCheckBoxChange">
            <el-checkbox :label="item.id" size="medium" class="my_message_table_checkbox"></el-checkbox>
          </el-checkbox-group>
        </p>
        <p style="width: 100px">{{index+1}}</p>
        <p style="width: 135px">{{item.title}}</p>
        <p style="width: 180px">{{item.createTimeStr}}</p>
        <p style="width: 130px">{{item.stateStr}}</p>
        <p style="width: 190px" class="uts">{{item.content}}</p>
        <p style="width: 180px;" class="my_message_detail">
          <span>
            <font @click="handelMessageSee(item)">查看</font>
            <font @click="myMessageDeleteShow(item)">删除</font>
          </span>
        </p>
      </li>
    </ul>
    <el-dialog title="消息通知" :visible.sync="seeMessageShow" width="40%" custom-class="dialogClass">
      <div class="personInfo_modal_title row_between_center_wrap">
        <span class="modal_title_span">消息通知</span>
        <i class="el-icon-close personinfo_modal_close cursor" @click="handelMessageLoad"></i>
      </div>
      <div class="mymessage_min_margin">
        <div class="message_title">{{this.detailList.title}}({{this.detailList.createTimeStr}})</div>
        <div class="message_content">{{this.detailList.content}}</div>
      </div>
    </el-dialog>
    <el-pagination
      :total="messageList.total"
      :page-count="messageList.pageCount"
      @current-change="handelPageChange"
      class="addresspageClass"
    ></el-pagination>

    <el-dialog class="addressElDialog" :visible.sync="deleteShow" width="20%" top="300px" center>
      <h5>删除确定?</h5>
      <div class="deleteMain">确定要删除当前订单吗?</div>
      <div class="delete_upload">
        <button class="cursor" @click="handelDeleteShow1">取消</button>
        <button class="cursor" @click="handelMessageDelete">确定</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeaderBox from "./headerBox";
import {
  myMessageInfo,
  myMessageDetail,
  myMessageDelete,
  myMessageRead
} from "@/getData";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userId: "",
      deleteShow: false,
      messageIndex: [
        { name: "系统消息" }
        // {name:"对话消息"},
      ],
      messageActive: 0,
      allMessage: "",
      fromData: {
        startTime: "",
        endTime: ""
      },
      messageList: [],
      pageNumber: 1,
      seeMessageShow: false,
      detailList: [],
      checkAll: false,
      message_checked: [],
      deleteList: []
    };
  },
  filter: {},
  computed: mapState(["userInfo"]),
  created() {
    this.userId = this.userInfo.userId;
    this.handelMessgaeList();
  },
  methods: {
    handelMessageIndex(index) {
      this.messageActive = index;
    },
    async handelMessgaeList() {
      //默认获取数据
      const res = await myMessageInfo({
        receiverUserId: this.userId,
        pageNo: this.pageNumber
      });
      this.messageList = res;
    },
    handelPageChange(page) {
      //分页
      this.pageNumber = page;
      this.handelMessgaeList();
    },
    handelAllMessage(val) {
      console.log(val);
    },
    async handelMessageSearch() {
      //搜索
      const res = await myMessageInfo({
        receiverUserId: this.userId,
        startTime: this.fromData.startTime,
        endTime: this.fromData.endTime,
        state: this.allMessage
      });
      this.messageList = res;
    },
    async handelMessageSee(item) {
      //查看消息
      this.seeMessageShow = true;
      const res = await myMessageDetail({
        id: item.id,
        state: 1
      });
      const res1 = await myMessageRead({ids:item.id});
      this.detailList = res.data;
    },
    handelMessageLoad() {
      this.seeMessageShow = false;
      this.messageList = [];
      this.handelMessgaeList();
    },
    myMessageDeleteShow(item) {
      this.deleteList = item;
      this.deleteShow = true;
    },
    async handelMessageDelete() {
      //删除
      const res = await myMessageDelete({ ids: this.deleteList.id });
      this.deleteShow = false;
      this.handelMessgaeList();
    },
    handelCheckBoxChange(val) {
      this.message_checked = val;
    },
    async handelRead() {
      //只读
      this.messageList = [];
      let checkedInfo = this.message_checked.join(",");
      const res = await myMessageRead({ ids: checkedInfo });
      if (res.errorCode == 0) {
        this.$message.success(res.message);
      } else {
        this.$message.error("删除失败");
      }
      this.message_checked = [];
      this.handelMessgaeList();
    },
    async handelDelete() {
      //批量删除
      this.messageList = [];
      let checkedInfo = this.message_checked.join(",");
      const res = await myMessageDelete({ ids: checkedInfo });
      if (res.errorCode == 0) {
        this.$message.success(res.message);
      } else {
        this.$message.error("删除失败");
      }
      this.message_checked = [];
      this.handelMessgaeList();
    },
    handelCheckedAll(val) {
      //全选
      if (val == true) {
        this.messageList.rows.map(item => {
          this.message_checked.push(item.id);
        });
      } else {
        this.message_checked = [];
        console.log(this.message_checked);
      }
    },
    handelDeleteShow1() {
      this.deleteShow = false;
    }
  },
  mounted() {},
  components: { HeaderBox }
};
</script>

<style scoped>
.my_message {
  display: flex;
  width: 320px;
  margin-left: 25px;
}
.my_message_active {
  background: #409eff !important;
  color: white;
}
.my_message li {
  width: 160px;
  height: 40px;
  background: #cccccc;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  margin: 15px 0;
}
.my_message li:first-child {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.my_message li:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.my_message_search {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
}
>>> .my_messeage_select {
  margin-left: 25px;
  width: 160px;
}
.my_message_search > p {
  width: 60px;
  border-top: 1px solid #000000;
  margin-top: 19px;
  margin-left: 10px;
  margin-right: 10px;
}
>>> .my_messeage_dataTime {
  width: 150px;
}
.my_message_search > span {
  margin-left: 100px;
  margin-right: 25px;
}
.my_message_time_search {
  width: 160px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  margin-left: 86px;
}
.my_message_table {
  width: 98%;
  overflow: hidden;
  margin-left: 25px;
  background: #ffffff;
  margin-top: 10px;
}
.my_message_table li {
  display: flex;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.my_message_table li:first-child {
  background: #409eff;
  color: white;
}
.my_message_table li:last-child {
  border-bottom: 1px solid lightgray;
}
.my_message_table li p {
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
}
.my_message_table li p:last-child {
  border-right: 1px solid lightgray;
}
>>> .my_message_table_checkbox .el-checkbox__label {
  display: none;
}
.my_message_detail span {
  width: 100%;
  display: block;
}
.my_message_detail span font {
  color: #1c7cce;
  margin: 0 15px;
  cursor: pointer;
}
.my_message_checkbox {
  width: 20px;
  height: 20px;
}
.addresspageClass {
  margin-top: 20px;
  margin-bottom: 10px;
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
  font-size: 23px;
  font-family: "微软雅黑 Light";
  margin-left: 10px;
  font-weight: bold;
}
.personinfo_modal_close {
  font-size: 30px;
  margin-right: 20px;
}
.mymessage_min_margin {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  font-size: 17px;
  padding-bottom: 20px;
}
.message_title {
  height: 50px;
  line-height: 50px;
}
.message_appContent {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}
.message_content {
  margin-top: 20px;
  overflow: hidden;
}
.my_message_delete {
  margin-left: 25px;
  margin-top: 10px;
  display: flex;
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
  border-right: none;
  color: blue;
}
</style>
