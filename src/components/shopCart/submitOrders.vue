<!--
 * @Description: 提交订单
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-15 18:25:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-04 10:39:22
 -->
<template>
  <div class="shop_cart_submit_order column_start_start box_width">
    <div class="column_start_start common box_width">
      <div class="text">选择收货地址</div>
      <div class="row_center box_width select_address_box">
        <div class="address_add_box row_start_center">
          <div
            :class="{
            address_item_box:true,
            address_border: item.sexType !== null
          }"
            v-for="(item, index) in addressList"
            :key="index"
            v-show="index <= 3"
            @click="currentAddressHandle(item, index)"
          >
            <div
              class="default_address"
              @click="setDefaultAddress(item.id)"
            >{{item.isDefault == 0 ? "设为默认地址" : "默认地址" }}</div>
            <div class="address_item">
              <div class="address_item_add">
                <span>地址:&nbsp;</span>
                <span>{{item.wholeAddress}}</span>
              </div>
              <div class="address_item_add">
                <span>姓名:&nbsp;</span>
                <span>{{item.recieverName}}</span>
              </div>
              <div class="address_item_add">
                <span>电话:&nbsp;</span>
                <span>{{item.telPhone}}</span>
              </div>
            </div>
            <div
              :class="{
            corner_mark:item.sexType !== null,
             bg: item.sexType !== null
          }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="column_start_start common box_width">
      <div class="text">订单信息</div>
      <div class="column_start_start box_width" v-for="(item,index) in orderInfo" :key="index">
        <div class="order_info_title">
          <div class="order_title_box row_between_center">
            <div class="order_store_name">{{item.enterpriseName}}</div>
            <div class="order_concat_stroe">
              <router-link
                :to="{
                path:'storeIndex',
                query: {
                  supplierId:item.enterpriseId
                }
              }"
              >进入店铺</router-link>
            </div>
          </div>
          <div class="order_nav_bar row_start_center">
            <div>商品信息</div>
            <div>规格型号</div>
            <div>价格</div>
            <div>数量</div>
            <div>金额</div>
          </div>
        </div>
        <div class="order_info_body" v-for="(each,index) in item.shoppingCartVOList" :key="index">
          <div class="order_info_item row_start_center box_width">
            <img :src="img + each.mainImagePath" class="order_info_item_img" />
            <div class="order_info_item_name row_start_center_wrap">{{each.goodsName}}</div>
            <div class="order_info_item_spec row_start_center_wrap">{{each.typeModel}}</div>
            <div class="order_info_item_price row_center">¥&nbsp;{{each.unitPrice}}</div>
            <div class="order_info_item_count row_center">
              <el-input-number v-model="each.buyCount" :min="1" :max="99999" size="small"></el-input-number>
            </div>
            <div
              class="order_info_item_amount row_center"
            >¥&nbsp;{{ (each.buyCount * each.unitPrice).toFixed(2) }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="column_center common box_width">
      <div class="text">备注</div>
      <div class="remark_box">
        <el-input
          class="remark"
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="submitData.remark"
        ></el-input>
      </div>
    </div>
    <div class="column_center common box_width">
      <div class="text">发票信息</div>
      <div class="invoice_box column_start_start">
        <div class="row_start_center" style="margin-top: 24px;">
          <span style="color:#1c7cce; font-size:16px">是否需要发票&nbsp;&nbsp;&nbsp;</span>
          <div>
            <el-radio v-model="submitData.isInvoice" :label="1">是</el-radio>
            <el-radio v-model="submitData.isInvoice" :label="0">否</el-radio>
          </div>
        </div>
        <!-- <span style="color:#1c7cce; font-size:16px; padding:10px 0px;">选择发票</span> -->
        <div class="invoice_type" v-show="submitData.isInvoice === 1">
          <table>
            <thead>
              <td>发票类型</td>
              <td>单位名称</td>
              <td>纳税人识别码</td>
              <td>注册地址</td>
              <td>注册电话</td>
              <td>开户银行</td>
              <td>开户行账号</td>
              <td>收票人姓名</td>
              <td>收票人手机</td>
              <td>操作</td>
            </thead>
            <tbody>
              <tr v-for="(item,index) in invoiceList" :key="index">
                <td>{{ item.invoiceTypeString }}</td>
                <td>{{ item.companyName }}</td>
                <td>{{ item.taxpayCode }}</td>
                <td>{{ item.registryAddress }}</td>
                <td>{{ item.registryPhone }}</td>
                <td>{{ item.openAccount }}</td>
                <td>{{ item.accountNumber }}</td>
                <td>{{ item.receiverName }}</td>
                <td>{{ item.receiverPhone }}</td>
                <td @click="selectInvoiceHandle(item)" class="invoice_select">选择</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="box_width row_center">
      <span style="font-size:20px;">共</span>
      <span
        style="font-size:20px; color:#227FCF; font-weight:bold;"
      >&nbsp;&nbsp;{{selectCount}}&nbsp;&nbsp;</span>
      <span style="font-size:20px;">件商品,总计:</span>
      <span
        style="font-size:20px; color:#E40838; font-weight:bold;"
      >&nbsp;&nbsp;{{totalAmount}}&nbsp;&nbsp;</span>
      <span style="font-size:20px;">元</span>
      <div class="submit_order" @click="submitOrderHandle">提交订单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
  loadAddressListJson,
  becomeDefaultAddress,
  findInvoiceByPage,
  saveCatOrder
} from "@/getData.js";
export default {
  name: "submitOrders",
  data() {
    return {
      addressList: [],
      orderInfo: JSON.parse(sessionStorage.getItem("orderInfo")),
      invoiceList: [],
      invoice: {},
      submitData: {
        addressId: "",
        invoiceId: "",
        remark: "",
        isInvoice: 0,
        orderGoodsVOJson: [],
        cartIdsJson: []
      }
    };
  },

  computed: {
    ...mapState(["img", "userInfo"]),
    selectCount() {
      let count = 0;
      this.orderInfo.forEach(element => {
        element["shoppingCartVOList"].forEach(item => {
          count++;
        });
      });
      return count;
    },
    totalAmount() {
      let result = 0;
      this.orderInfo.forEach(element => {
        element.shoppingCartVOList.forEach(item => {
          item.total = item.buyCount * item.unitPrice;
          if (item.check) {
            result += parseFloat(item.total);
          }
        });
      });
      return result.toFixed(2);
    }
  },

  methods: {
    async submitOrderHandle() {
      // 未选择地址 处理
      if (this.submitData.addressId === "") {
        this.$message.warning("请选择收货地址!");
        return;
      }
      if (this.submitData.isInvoice === 1) {
        if (this.submitData.invoiceId === "") {
          this.$message.warning("请选择发票");
          return;
        }
      }
      // 筛选数据
      let cartIdsJson = [];
      this.orderInfo.forEach(element => {
        delete element.checkAll;
        delete element.enterpriseGoodsMoneyAmount;
        delete element.userId;
        element.shoppingCartVOList.forEach(item => {
          delete item.addBuyKind;
          delete item.check;
          delete item.createTime;
          delete item.enterpriseName;
          delete item.goodsProviderVO;
          delete item.goodsTotalMoney;
          delete item.userId;
          delete item.enterpriseId;
          delete item.total;
          cartIdsJson.push(item.id);
        });
      });

      // 整合数据
      this.submitData.orderGoodsVOJson = JSON.stringify(this.orderInfo);
      this.submitData.cartIdsJson = JSON.stringify(cartIdsJson);

      // 发送请求
      const res = await saveCatOrder(this.submitData);
      // 响应消息提示
      this.$message.success(res.message);

      // 保存响应数据
      sessionStorage["downOrders"] = JSON.stringify(res.data);
      this.showCartInfoHandle();
      // 页面跳转
      this.$router.push("downOrders");
    },
    /* 获取收货地址 */
    async loadAddressListJsonHandle() {
      const res = await loadAddressListJson();
      if (!res.result) {
        this.$router.replice("/login");
      }
      this.addressList = res.data;
    },
    async setDefaultAddress(id) {
      await becomeDefaultAddress({
        id: id
      });
      this.loadAddressListJsonHandle();
    },
    /* 发票地址 */
    async findInvoiceByPageHandle() {
      const res = await findInvoiceByPage({
        userId: this.userInfo.id
      });
      this.invoiceList = res.rows;
    },
    selectInvoiceHandle(item) {
      this.$message.success("已选择: " + item.receiverName);
      this.invoice = item;
      this.submitData.invoiceId = item.id;
    },
    /* 选择当前地址 */
    currentAddressHandle(item, index) {
      this.addressList.forEach(element => {
        element.sexType = null;
      });
      item.sexType = true;
      this.addressList.splice(index, 1, item);
      this.submitData.addressId = item.id;
    },
    ...mapActions(["showCartInfoHandle"])
  },

  created() {
    this.loadAddressListJsonHandle();
    this.findInvoiceByPageHandle();
  },

  mounted() {},
  watch: {
    "submitData.isInvoice": function(val, oldVal) {
      if (this.invoice.id) {
        val === 1 ? (this.submitData.invoiceId = this.invoice.id) : "";
      }
    }
  },
  components: {}
};
</script>

<style scoped>
.address_add_box {
  width: 1056px;
}
.invoice_type {
  margin-top: 24px;
}
thead td,
tbody tr td {
  border: 1px solid #ececec;
  min-width: 100px;
  height: 50px;
  vertical-align: middle;
  padding: 0px 5px;
}
thead td {
  background: #fafafa;
}
.invoice_select {
  cursor: pointer;
  color: #1c7cce;
}
.remark_box {
  width: 1000px;
  padding-bottom: 24px;
}
.invoice_box {
  margin-top: 24px;
  min-width: 1124px;
  padding: 24px 0px;
  min-height: 206px;
}
.remark {
  margin-top: 24px;
}
.submit_order {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  margin-left: 50px;
  background: #1c7cce;
  font-size: 20px;
  font-weight: bold;
  color: #e6e6e6;
  margin-right: 50px;
  cursor: pointer;
}
.order_info_item {
  border: 1px solid #fafafa;
  border-left: none;
  border-right: none;
  margin-bottom: 14px;
}
.order_info_item_img {
  width: 150px;
  height: 150px;
  margin: 0px 18px;
}
.order_info_item_spec {
  width: 230px;
  height: 184px;
  text-align: left;
  padding: 0px 10px;
}
.order_info_item_price {
  width: 143px;
  height: 184px;
  text-align: center;
  color: #e40838;
  font-size: 20px;
}
.order_info_item_count {
  width: 180px;
  height: 184px;
  text-align: center;
}
.order_info_item_name {
  width: 260px;
  height: 184px;
  text-align: left;
  margin-right: 10px;
}
.order_info_item_amount {
  width: 172px;
  height: 184px;
  text-align: center;
  color: #e40838;
  font-size: 20px;
}
.shop_cart_submit_order {
  min-height: 409px;
}
.common > .text {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding: 12px 0px 24px 24px;
  border-bottom: 1px solid #e5e5e5;
  text-align: left;
}
.common {
  background: #ffffff;
  margin: 12px 0px;
}
.address_item_box {
  width: 240px;
  height: 214px;
  background: #fafafa;
  margin: 12px;
  position: relative;
  cursor: pointer;
}
.address_item {
  padding: 30px 20px 34px 20px;
}
.address_item_add {
  text-align: left;
  font-size: 16px;
  color: #999999;
}
.address_item_add span:first-child {
  color: #000000;
  font-size: 18px;
  font-weight: bold;
}
.address_item_add span:last-child {
  font-size: 16px;
  color: #999999;
  line-height: 2;
}
.corner_mark {
  background: url("~assets/for-icon.png");
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.default_address {
  position: absolute;
  top: 8px;
  right: 10px;
  color: #1c7cce;
  cursor: default;
}
.address_border {
  border-top: 2px solid #1c7cce;
}
.order_info_title {
  height: 90px;
  border: 1px solid #eaeaea;
  width: 100%;
  margin-top: 24px;
}

.order_title_box {
  background: #bad7f0;
  height: 40px;
}
.order_concat_stroe,
.order_store_name {
  margin: 0px 24px;
}
.order_store_name {
  font-size: 18px;
  font-weight: bold;
}
.order_nav_bar {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
}
.order_nav_bar div {
  height: 100%;
  line-height: 50px;
}
.order_nav_bar div:nth-child(1) {
  margin-left: 186px;
  width: 260px;
  margin-right: 10px;
}
.order_nav_bar div:nth-child(2) {
  width: 230px;
}
.order_nav_bar div:nth-child(3) {
  width: 143px;
}
.order_nav_bar div:nth-child(4) {
  width: 180px;
}
.order_nav_bar div:nth-child(5) {
  width: 172px;
}

.order_info_body {
}
.order_concat_stroe {
}
.select_address_box {
}
</style>
