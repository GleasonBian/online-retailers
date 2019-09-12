/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-08 17:07:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-28 11:42:42
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import pagination from "#/other/pagination.vue";
import ValidateUtils from "./validatorUtils.js";
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
  MessageBox,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dialog,
  RadioGroup,
  Radio,
  DatePicker,
  Option
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
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(DatePicker);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$Validate = ValidateUtils;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//未登录状态限制
let userInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
router.beforeEach((to,from,next)=>{
    if(to.path!=='/personInfo'){
        next()
    }else{
        if(!userInfo){
            next('/login')
        }else{
            next()
        }
    }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
