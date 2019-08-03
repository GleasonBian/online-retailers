<!-- 商城介绍  规格参数 包装售后 -->
<template>
  <div class="layout">
    <div class="box_width row_between_start">
      <div class="store_info"></div>
      <div class="product_intro column_start_start">
        <el-tabs type="border-card" class="options_btn_box">
          <el-tab-pane label="商品介绍">
            <img v-for="(item,index) in imgList" :src="item.src" :key="index" class="introduce" />
          </el-tab-pane>
          <el-tab-pane label="规格参数">
            <table>
              <tr>
                <td>产品名称</td>
                <td>委任为</td>
              </tr>
              <tr>
                <td>品牌</td>
                <td>顶顶顶顶</td>
              </tr>
              <tr>
                <td>规格型号</td>
                <td>顶顶顶顶</td>
              </tr>
              <tr>
                <td>材质</td>
                <td>顶顶顶顶</td>
              </tr>
              <tr>
                <td>其他参数</td>
                <td>顶顶顶顶</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="包装售后">
            <div class="after_sales">
              <div class="pack_list">包装清单</div>
              <div class="instructions">撒旦发射点发射点发</div>
            </div>
            <div class="after_sales">
              <div class="pack_list">售后保障</div>
              <div class="instructions">撒旦发射点发射点发</div>
            </div>
            <div class="after_sales">
              <div class="pack_list">运费说明</div>
              <div class="instructions">撒旦发射点发射点发</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imgList: [
        {
          src:
            "http://img10.360buyimg.com/imgzone/jfs/t1/27330/37/7495/109928/5c6a6c9cE54c11192/72696edd1a4f751b.jpg"
        },
        {
          src:
            "//img10.360buyimg.com/imgzone/jfs/t1/37101/19/1831/181603/5cb45310E6e358e70/8e548200f7e25f3c.jpg"
        },
        {
          src:
            "//img10.360buyimg.com/imgzone/jfs/t1/20423/12/10778/241363/5c88d3e2Ee90968d8/e55dd628b4c3a2cb.jpg"
        }
      ]
    };
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.store_info {
  width: 210px;
  height: 230px;
  background: #4d4d81;
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
