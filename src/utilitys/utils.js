// import { post } from './pieAxios';

const utils = {
  signature() {
    // 获取登录状态
    /** **
     * 检查本地是否已经有登录信息（有 - true）
     * 发请求检查服务端登录状态 （有 - ture）--- mock
     * false
     */
    if (localStorage.userId && localStorage.userId !== '') {
      return true;
    }
    // 发请求
    const tokenCheck = this.getUserInfo();
    if (tokenCheck === true) {
      return true;
    }
    return false;
  },
  getUserInfo() {
    // 模拟登录，false：未登录
    return false;
  },
};

export default utils;
