import axios from 'axios';
import store from '../store';
import vue from 'vue';
import { Message } from 'element-ui'
import { getToken } from '../utils/user'
import router from '../router'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,                  // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

let panding = []
let Cancel = axios.CancelToken
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      pending[p].f()
      pending.splice(p, 1)
    }
  }
}

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (getToken()) {
    config.headers.token = getToken()
  }
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
})

// respone拦截器
// service.interceptors.response.use(
//   response => response,
//   error => {
//     console.log('err' + error);// for debug
//     Message.error({
//       message: error.message,
//       duration: 5 * 1000,
//       closable: true
//     });
//     return Promise.reject(error);
//   }
// )
service.interceptors.response.use(
  response => {
    if (response && response.status === 200) {
      if (response.data && response.data.code === '200') {
        return response.data
      } else {
        Message.error(response.data.msg)
        return
      }
    }
    Message.error("请求失败，请稍后重试")
  },
  error => {
    if (error && error.response && error.response.status && error.response.status === 401) {
      Message.error("用户登录信息已过期，请重新登录")
      window.localStorage.clear()
      setTimeout(() => {
        router.replace({ path: '/login' })
      }, 2500)
      return
    } else if (error && error.response && error.response.status && error.response.status === 403) {
      Message.error("尚未授权此操作")
      return
    } else if (error && error.response && error.response.status && error.response.status === 504) {
      Message.error("连接服务器超时，请稍后再试")
      return
    }
    return { data: {} }
  }
)

export default service;
