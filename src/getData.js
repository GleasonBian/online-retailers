/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 09:46:03
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-22 18:00:43
 */
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
 * 找回密码
 */
export const findBackPwd = data => fetch("/findBackPwd", data, "post");

/**
 * 首页-楼层
 */
export const floorGoods = data => fetch("floorGoods", data, "post");

/**
 * 首页-分类
 */
export const loadChildListData = data =>
  fetch("frontClass/loadChildListData", data, "post");

/**
 * 商品列表
 */
export const productListData = data => fetch("product/listData", data, "post");

/**
 * 商品详情
 */
export const productGetProduct = data =>
  fetch("product/getProduct", data, "post");

/**
 * 店铺列表
 */
export const enterpriseSearchEnterprise = data =>
  fetch("enterprise/searchEnterprise", data, "post");

/**
 * 店铺主页
 */
export const enterpriseEnterPriseDetial = data =>
  fetch("enterprise/enterpriseDetial", data, "post");

/**
 * 商品分类
 */
export const getFrontClassForEnterprise = data =>
  fetch("enterprise/getFrontClassForEnterprise", data, "post");

/**
 * 店铺商品列表
 */
export const getEnterpriseGoods = data =>
  fetch("enterprise/getEnterpriseGoods", data, "post");

/**
 * 购物车 数量
 */
export const showCartInfo = data =>
  fetch("/shoppingCart/showCartInfo", data, "post");

/**
 * 购物车主页
 */
export const userCart = data => fetch("/shoppingCart/userCart", data, "post");

/**
 * 购物车 生成订单
 */
export const shoppingCartSaveCatOrder = data =>
  fetch("/shoppingCart/saveCatOrder", data, "post");
