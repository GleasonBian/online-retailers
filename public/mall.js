/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 09:25:50
 * @LastEditTime: 2019-08-27 09:59:30
 * @LastEditors: Please set LastEditors
 */
import fetch from "public/fetch.js";
/**
 * 商家入驻 √
 */
export const enterpriseApply = data =>
  fetch("/enterprise/enterpriseApply", data, "post");
