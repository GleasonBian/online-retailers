<!--  -->
<template>
  <div>
    <div class="header_box">
      <div></div>{{title}}
    </div>
  </div>
</template>

<script>
export default {
  props:['title'],
  data() {
    return {};
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.header_box {
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: flex-start;
  color: #1c7cce;
  font-family: ‘微软雅黑’;
}
.header_box > div {
  width: 4px;
  height: 26px;
  background: #1c7cce;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
