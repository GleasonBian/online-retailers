/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2019-08-06 09:46:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-30 13:51:43
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

/**
 * 修改密码
 */
export const editPassword = data =>
  fetch("/user/modifyUserPassword", data, "post");

/**
 * 个人信息数据获取
 */
export const userInfo = data => fetch("/user/getUserById", data, "post");

/**
 * 修改邮箱
 */
export const editUserInfo = data =>
  fetch("/user/saveOrUpdateUser", data, "post");

/**
 * 获取收货地址信息
 */
export const addressInfo = data => fetch("/address/loadListData", data, "post");

/**
 * 收货地址集合
 */
export const loadAddressListJson = data =>
  fetch("/address/loadAddressListJson", data, "post");

/**
 * 设置默认收货地址
 */
export const becomeDefaultAddress = data =>
  fetch("/address/becomeDefaultAddress", data, "post");

/**
 * 新增收货地址
 */
export const editSaveInfo = data =>
  fetch("/address/saveOrUpdate", data, "post");

/**
 * 设置默认地址
 */
export const isFaultInfo = data =>
  fetch("/address/becomeDefaultAddress", data, "post");

/**
 * 获取省级
 */
export const levelInfo = data => fetch("/area/toplist.json", data, "post");

/**
 * 获取市级
 */
export const cityInfo = data => fetch("/area/children.json", data, "post");

/**
 * 发票列表 带分页 userId
 */
export const findInvoiceByPage = data =>
  fetch("/invoice/findInvoiceByPage", data, "post");

/**
 * 删除地址
 */
export const deleteAddress = data =>
  fetch("/address/deleteManyOrOne", data, "post");

/**
 * 发票加载默认信息
 */
export const manageMentInfo = data =>
  fetch("/invoice/findInvoiceByPage", data, "post");

/**
 * 添加，修改发票
 */
export const manageEditInfo = data =>
  fetch("/invoice/addOrUpdateInvoice", data, "post");
/**
 * 添加，修改发票
 */
export const manageDeleteInfo = data => fetch("/invoice/delete", data, "post");

/**
 * 购物车 保存订单
 */
export const saveCatOrder = data =>
  fetch("/shoppingCart/saveCatOrder", data, "post");

/**
 * 购物车 添加购物车
 */
export const shoppingCartAddCart = data =>
  fetch("/shoppingCart/addCart", data, "post");

/**
 * 修改手机号
 */
export const editPhone = data => fetch("/updateUserName", data, "post");

/**
 * 我的消息数据 搜索
 */
export const myMessageInfo = data =>
  fetch("/notify/loadNoticeData", data, "post");

/**
 * 我的消息查看详情
 */
export const myMessageDetail = data =>
  fetch("/notify/findNotifyById", data, "post");

/**
 * 我的消息删除接口
 */
export const myMessageDelete = data =>
  fetch("/notify/deleteInfo", data, "post");

/**
 * 我的消息标记已读接口
 */
export const myMessageRead = data =>
  fetch("/notify/updateNotifyToRead", data, "post");

/*
 * 购物车 货到付款
 */
export const payDelivery = data =>
  fetch("/orderGenerate/payDelivery", data, "post");

/**
 * 商家入驻提交
 */
export const enterpriseApply = data =>
  fetch("/enterprise/enterpriseApply", data, "post");

/**
 * 个人中心 订单中心 我的订单 列表
 */
export const loadListData = data =>
  fetch("/orderGenerate/loadListData", data, "post");

/**
 * 发货单 搜索
 */
export const applicaInfo = data =>
  fetch("/applicaForm/loadApplicaFormData", data, "post");

/**
 * 购物车 订单 数量加减
 */
export const shoppingCartUpdateCartCount = data =>
  fetch("/shoppingCart/updateCartCount", data, "post");

/**
 * 购物车 删除
 */
export const shoppingCartDeleteManyOrOne = data =>
  fetch("/shoppingCart/deleteManyOrOne", data, "post");

/**
 * 发货单详情
 */
export const receiptDetail = data =>
  fetch("/applicaForm/loadApplicaFormDetail", data, "post");

/**
 * 发货单商品详情
 */
export const receiptGoodsDetail = data =>
  fetch("/applicaForm/loadApplicaFormGoodsData", data, "post");

/**
 * 发货单商品详情
 */
export const afterSaleInfo = data =>
  fetch("/returnForm/loadReturnFormData", data, "post");

/**
 * 退货换货详情
 */
export const afterSaleDetail = data =>
  fetch("/orderGenerate/orderAllInfo", data, "post");

/**
 * 首页轮播图
 */
export const getRotaryImage = data =>
  fetch("/enterprise/getRotaryImage", data, "post");

/**
 * 商家首页轮播图  参数enterpriseId：商家ID号     type:1
 */
export const getEnterpriseIndexImage = data =>
  fetch("/enterprise/getEnterpriseIndexImage", data, "post");

/**
 * 首页分类
 */
export const indexFrontClass = data =>
  fetch("/frontClass/indexFrontClass", data, "post");

/**
 * 退出登录
 */
export const logout = data => fetch("/logout", data, "post");

/**
 * 取消订单
 */
export const candelOrder = data =>
  fetch("/orderGenerate/candelOrder", data, "post");

/**
 * 订单详情
 */
export const orderAllInfo = data =>
  fetch("/orderGenerate/orderAllInfo", data, "post");

/**
 * 物流信息
 */
export const findLogisticsList = data =>
  fetch("/expressCompany/findLogisticsList", data, "post");

/**
 * 发起售后
 */
export const saveSales = data =>
  fetch("/returnForm/saveReturnForm", data, "post");

/**
 * 售后详情
 */
export const salesDetail = data =>
  fetch("/returnForm/findReturnFormDetail", data, "post");

/**
 * 快递公司
 */
export const expressDetail = data =>
  fetch("/expressCompany/findExpressCompanyList", data, "post");

/**
 * 修改售后
 */
export const editSales = data =>
  fetch("/returnForm/updateReturnForm", data, "post");

/**
 * 确认收货
 */
export const sumbitSalas = data =>
  fetch("/applicaForm/confirmAccept", data, "post");
