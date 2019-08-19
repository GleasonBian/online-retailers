/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-08 17:07:52
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-14 21:28:55
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import pagination from "#/other/pagination.vue";
Vue.config.productionTip = false;
Vue.component("pagination", pagination);
import {
  Button,
  Select,
  Loading,
  Carousel,
  CarouselItem,
  Form,
  FormItem,
  Input,
  Col,
  Checkbox,
  InputNumber,
  Tabs,
  TabPane,
  Tree,
  Cascader,
  Upload,
  CheckboxGroup,
  Pagination,
  Message,
  MessageBox
} from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Loading);
Vue.use(Loading.directive);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Checkbox);
Vue.use(InputNumber);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tree);
Vue.use(Cascader);
Vue.use(Upload);
Vue.use(CheckboxGroup);
Vue.use(Pagination);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
