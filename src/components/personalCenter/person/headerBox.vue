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
  color: skyblue;
}
.header_box > div {
  width: 4px;
  height: 26px;
  background: #B0E0E6;
  margin-left: 15px;
  margin-right: 15px;

}
</style>
