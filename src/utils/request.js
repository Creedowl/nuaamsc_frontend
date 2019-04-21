import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  // baseURL: 'http://106.15.177.94:5000',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  req => {
    // TODO 添加token
    return req
  },
  error => {
    console.log('req', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功全部返回200，使用自定义状态码
  res => {
    // TODO 登入状态判断等
    return res
  },
  // 拦截请求异常，包括网络异常，服务器异常
  error => {
    Message.error('network error')
    console.log('res', error)
    // 永远返回请求成功，若失败则返回空值
    return {
      statusMsg: 'network error',
      data: {}
    }
  }
)

export default instance
