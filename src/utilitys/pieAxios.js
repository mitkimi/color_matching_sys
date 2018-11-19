import axios from 'axios';
// import { Message } from 'iview';
import apiUrl from './api.js';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = apiUrl.url;
axios.defaults.withCredentials = true;
// axios.defaults.headers = { 'Content-Type': 'application/json; charset=utf-8' }
axios.defaults.headers.post['Content-Type'] = 'application/json';
// http request 拦截器
axios.interceptors.request.use(
  // (config) => {
  //   // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
  //   // config.data = JSON.stringify(config.data)
  //   config.headers = {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   }
  //   // if(token){
  //   //   config.params = {'token':token}
  //   // }
  //   return config
  // }
  // eslint 报错 已声明“error”，但从未读取其值。
  // error => {
  //   return Promise.reject(err)
  // }
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode * 1 === 2) {
      // eslint 报错 'router' is not defined.
      // router.push({
      //   path: '/login',
      //   querry: { redirect: router.currentRoute.fullPath }// 从哪个页面跳转
      // })
    }
    return response;
  },
  error => Promise.reject(error),
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    },
    )
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
