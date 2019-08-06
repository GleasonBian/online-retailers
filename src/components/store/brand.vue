<!-- 企业品牌 -->
<template>
  <div>
    <headerCom></headerCom>
    <div class="brand_box">
      <div class="title">首页/品牌</div>
    </div>
    <div class="brand_box2">
      <div class="title2">
        <el-input placeholder="请输入品牌名称关键字" v-model="input" clearable></el-input>
        <el-button type="danger" @click="search" style="margin-left:20px;">搜索</el-button>
      </div>
      <div class="letter">
        <ul>
          首字母检索
          <li v-for="(item,index) in letterList" :key="index" @click="letterhandler(item)" :class="item == val ? 'action' : '' ">{{item}}</li>
        </ul>
      </div>
      <div class="brandList">
        <div class="brandList_title" v-for="(item,index) in letterList" :key="index">
          <img src="../../assets/logo.png" alt srcset />
          <div>文本标签</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerCom from "#/header/header.vue";
export default {
  naem: "brand",
  data() {
    return {
      input: "",
      val: "",
      letterList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0-9"
      ]
    };
  },

  computed: {},

  methods: {
    letterhandler(val) {
      console.log("val", val);
      this.val = val
    },
    search() {}
  },

  created() {},

  mounted() {},

  components: {
    headerCom
  }
};
</script>

<style scoped>
.brand_box {
  /* border: 1px solid #dcdfe6; */
  width: 1200px;
  margin: 10px auto;
  padding: 10px 0;
}
.title {
  width: 120px;
}
.brand_box2 {
  border: 1px solid #dcdfe6;
  width: 1200px;
  margin: 0px auto;
  padding: 10px 0;
}
.title2 {
  width: 340px;
  padding-left: 25px;
  display: flex;
}
.letter {
  /* border: 1px solid red; */
  padding-left: 25px;
}
.letter ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
}
.letter ul li {
  list-style: none;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brandList {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.brandList_title {
  margin: 10px 25px;
}
.brandList_title img {
  width: 120px;
  height: 70px;
}
.action{
  background: red;
  color: white;
}
</style>
