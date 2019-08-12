<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-02 16:19:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-11 11:09:33
 -->
<!-- 商城介绍  规格参数 包装售后 -->
<template>
  <div class="layout">
    <div class="box_width row_between_start">
      <div class="store_info">
        <div class="store_title_bg"></div>
        <div class="stroe_Box column_between_center">
          <div class="stroe_name uts">{{name}}</div>
          <div class="row_between_start store_avatar_box">
            <img :src="logo" class="store_avatar" alt />
            <router-link
              :to="{ path: 'storeIndex', query: { id:id }}"
              style="margin-top:10px;color:#1C7CCE"
            >进入店铺</router-link>
          </div>
          <div>联系电话: {{phone}}</div>
        </div>
      </div>
      <div class="product_intro column_start_start">
        <el-tabs type="border-card" class="options_btn_box">
          <el-tab-pane label="商品介绍">
            <div class="introduce" v-html="pcDescription"></div>
          </el-tab-pane>
          <el-tab-pane label="规格参数">
            <table>
              <tr>
                <td>产品名称</td>
                <td>{{productName}}</td>
              </tr>
              <tr>
                <td>品牌</td>
                <td>{{brandName}}</td>
              </tr>
              <tr>
                <td>规格型号</td>
                <td>
                  <table class="table_attr">
                    <tr class="table_tr">
                      <td class="table_title">属性名称</td>
                      <td class="table_title">属性值</td>
                    </tr>
                    <tr v-for="(each, index) in attributes" :key="index">
                      <td style="color:#333333" class="table_body">{{each.attrName}}</td>
                      <td style="color:#333333" class="table_body">{{each.attrValue}}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>材质</td>
                <td>
                  <table class="table_attr">
                    <tr class="table_tr">
                      <td class="table_title">属性名称</td>
                      <td class="table_title">属性值</td>
                    </tr>
                    <tr v-for="(each, index) in attributeList" :key="index">
                      <td style="color:#333333" class="table_body">{{each.attrName}}</td>
                      <td style="color:#333333" class="table_body">{{each.attrValue}}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>其他参数</td>
                <td>无</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="包装售后">
            <!-- <div class="after_sales">
              <div class="pack_list">包装清单</div>
              <div class="instructions">{{"暂无字段"}}</div>
            </div>-->
            <div class="after_sales">
              <div class="pack_list">售后保障</div>
              <div class="instructions">{{afterSaleService}}</div>
            </div>
            <div class="after_sales">
              <div class="pack_list">运费说明</div>
              <div class="instructions">{{dispatchExplain}}</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "storeMain",
  data() {
    return {
      name: "",
      logo: "",
      phone: "",
      id: ""
    };
  },

  computed: {
    ...mapState({
      productName: state => state.productDetails.productName,
      brandName: state => state.productDetails.brandName,
      pcDescription: state => state.productDetails.pcDescription,
      enterpriseVO: state => state.productDetails.enterpriseVO,
      attributeList: state => state.productDetails.attributeList, //关键属性
      attributes: state => state.productDetails.attributes, // 规格型号
      afterSaleService: state => state.productDetails.afterSaleService,
      dispatchExplain: state => state.productDetails.dispatchExplain
    })
  },

  methods: {},

  created() {},

  mounted() {},
  updated() {
    this.name = this.enterpriseVO.name;
    this.logo = this.enterpriseVO.logo;
    this.phone = this.enterpriseVO.phone;
    this.id = this.enterpriseVO.id;
  },
  components: {}
};
</script>

<style scoped>
.stroe_Box {
  padding: 15px;
  border: 1px solid #dcdfe6;
}
.store_avatar_box {
  width: 90%;
  margin: 15px 0px;
}
.store_avatar {
  width: 100px;
  height: 100px;
}
.stroe_name {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 20px;
}
.store_info {
  width: 230px;
  height: 230px;
}
.store_title_bg {
  width: 230px;
  height: 40px;
  background: url("~assets/tit-lianxi.png");
}
.product_intro {
  width: 950px;
}

.options_btn_box {
  width: 100%;
}
.introduce {
  width: 100%;
}
table {
  width: 100%;
}
tr :first-child {
  color: #1c7cce;
}
td {
  font-size: 16px;
  height: 50px;
  border: 1px solid #e6e6e6;
  text-align: center;
  vertical-align: middle;
  border-left: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
}
.table_title {
  border-top: none;
  border-left: none;
}
.table_attr {
  width: 100%;
  border: none;
}
.table_body {
  border-bottom: none;
  border-right: none;
}
.after_sales {
  width: 100%;
}
.pack_list {
  background: #1c7cce;
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-align: left;
  padding-left: 30px;
  line-height: 50px;
  color: #fff;
}
.instructions {
  min-height: 100px;
  font-size: 14px;
  text-align: left;
  padding: 40px;
}
</style>
