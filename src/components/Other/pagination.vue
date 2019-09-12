<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-07 20:14:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-09-05 14:55:39
 -->
<template>
  <div>
    <el-pagination
      @size-change="handleSize"
      @current-change="handleCurrent"
      :current-page="pageNo"
      :page-sizes="[12, 24, 36, 48]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top:24px"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      pageNo: 1,
      pageSize: 12,
      offset: 0
    };
  },
  props: {
    // 调用接口传参字段:在 vuex 中定义
    param: {
      type: String,
      required: true
    },
    // 当前页 默认字段 pageNo
    PageNo: {
      type: String,
      default: "pageNo"
    },
    // 每页多少条
    PageSize: {
      type: String,
      default: "pageSize"
    },
    // 偏移量
    Offset: {
      type: String,
      default: "offset"
    },
    // 调用接口函数
    funHandle: {
      type: String,
      required: true
    }
  },
  computed: mapState(["total"]),

  methods: {
    /**
     *  每页多少条处理函数
     */
    handleSize(val) {
      // 设置 调用 接口 分页参数
      this.pagination({
        param: this.param,
        field: this.PageSize,
        value: this.offset * val
      });
      // 调用接口
      this.$store.dispatch(this.funHandle);
    },
    /**
     * 当前页处理函数
     */
    handleCurrent(val) {
      this.pageNo = val;
      this.pagination({
        param: this.param,
        field: this.PageNo,
        value: val
      });
      this.pagination({
        param: this.param,
        field: this.Offset,
        value: (this.pageNo - 1) * this.pageSize
      });
      this.$store.dispatch(this.funHandle);
    },
    ...mapMutations(["pagination"])
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped></style>
