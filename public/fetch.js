// public/fetch.js
import Vue from "vue";
var qs = require("qs");
import axios from "axios";

// baseurl 就是 在 .env.development 和 .env.development.local 中 预设的域名
console.log("当前环境", process.env.VUE_APP_URL); // => 'https://api.apiopen.top/'

let baseurl =
  process.env.VUE_APP_TITLE === "local" // 通过判断 当前的环境变量 得知 项目 运行在 本地 或者 线上
    ? process.env.VUE_APP_PROXY // 本地 使用代理 => '/dev' 此处在 vue.config.js 中代理请求处有配置
    : process.env.VUE_APP_URL; // 线上 使用域名 => 'https://api.apiopen.top/'

console.log("baseurl", baseurl);

axios.defaults.baseURL = baseurl; // 将 baseurl 设置为 axios 的默认 baseURL

/*
 ** 全局加载动画 开关
 */
let loading = null;

/*
 ** 请求拦截器
 */
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    loading = Vue.prototype.$loading({
      lock: true,
      text: "客官请稍后....",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    return config;
  },
  function(error) {
    loading.close();
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/*
 ** 响应拦截器
 */
axios.interceptors.response.use(
  function(response) {
    loading.close();
    return response;
  },
  function(error) {
    loading.close();
    if (error.response.status >= 404) {
      Vue.prototype.$message.error("服务异常,稍后重试 !");
    }
    return Promise.reject(error);
  }
);

/**
 * 下面 是 axios 封装的 请求
 * 采用 es6 promise 和 async await 方式
 */
export default async (url = "", data = {}, type = "POST") => {
  type = type.toUpperCase();
  /**
   * get 请求
   */

  if (type == "GET") {
    //请求参数 拼接字符串
    let dataStr = "";
    Object.keys(data).forEach(key => {
      dataStr += key + "=" + data[key] + "&";
    });

    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }

    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * post 请求
   */
  if (type == "POST") {
    return new Promise((resolve, reject) => {
      data = qs.stringify(data);
      axios
        .post(url, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
