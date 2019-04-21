import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://106.15.177.94:5000',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  req => {
    // TODO
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  res => {
    // TODO
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
