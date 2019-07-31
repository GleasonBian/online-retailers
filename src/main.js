import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

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
  Checkbox
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
Vue.prototype.$loading = Loading.service;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
