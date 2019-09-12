/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 09:29:07
 * @LastEditTime: 2019-08-27 09:31:03
 * @LastEditors: Please set LastEditors
 */


export const isFaultInfo = data =>
    fetch("/address/becomeDefaultAddress", data, "post");