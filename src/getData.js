// 引入 封装请求
import fetch from "public/fetch.js";

/**
 * 获取最新 登录 √
 */
export const login = data => fetch("/ajaxLoginCheck", data, "post");
/**
 * 生成验证码图片 √
 */
export const generateImage = data => fetch("/generateImage", data, "get");
/**
 * 检测验证码图片是否正确 *
 */
export const checkCaptcha = data => fetch("/checkCaptcha", data, "post");
/**
 * 获取手机验证码 √
 */
export const getValid = data => fetch("/getValid", data, "post");
/**
 * 检测手机号码是否不存在 √
 */
export const checkphoneistrue = data =>
  fetch("/checkphoneistrue", data, "post");
/**
 * 注册 √
 */
export const saveRegister = data => fetch("/saveRegister", data, "post");
/**
 * 手机号登录
 */
export const loginByPhone = data => fetch("/loginByPhone", data, "post");
/**
 * 首页-楼层
 */
export const floorGoods = data => fetch("floorGoods", data, "post");

/**
 * 首页-分类
 */
export const loadChildListData = data =>
  fetch("frontClass/loadChildListData", data, "post");
