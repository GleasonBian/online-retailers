<!--  -->
<template>
  <el-pagination
    @size-change="handleSize"
    @current-change="handleCurrent"
    :current-page="currentPage"
    :page-sizes="[12, 24, 36, 48]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  ></el-pagination>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      currentPage: 1
    };
  },
  props: {
    param: {
      type: String,
      required: true
    },
    current: {
      type: String,
      default: "offset"
    },
    size: {
      type: String,
      default: "limit"
    },
    funHandle: {
      type: String,
      required: true
    }
  },
  computed: mapState(["total"]),

  methods: {
    handleSize(val) {
      this.pagination({
        param: this.param,
        field: this.size,
        value: val
      });
      this.$store.dispatch(this.funHandle);
    },
    handleCurrent(val) {
      // let offset = (val - 1) * (this.data.pageSize === undefined ? 10 : this.data.pageSize)
      this.pagination({
        param: this.param,
        field: this.current,
        value: val
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
