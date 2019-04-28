import request from '@/utils/request.js'

// TODO
export default {
  // 使用async语法糖避免多层嵌套函数，注意返回的也是个promise对象
  async getList ({ page = 1, size = 10 }) {
    const res = await request.get('/article/listAll', { params: { page, size } })
    // 此处可对请求结果进行包装，然后直接返回数据
    console.log('get', res)
    return res.data
  },
  async add ({
    author = '',
    content = '',
    cover = '',
    summary = '',
    title = '',
    time = Date.now(),
    userId = 0,
    extension = ''
  }) {
    const res = request.post('/article/insert', {
      data: { author, content, cover, summary, title, time, userId, extension }
    })
    return res.data
  },
  async update ({
    author = '',
    content = '',
    cover = '',
    summary = '',
    title = '',
    time = Date.now(),
    userId = 0,
    extension = ''
  }) {
    const res = request.post('/article/update', {
      data: { author, content, cover, summary, title, time, userId, extension }
    })
    return res.data
  },
  async delete ({ articleId = -1 }) {
    const res = request.delete('/article/deleteById', { param: { articleId } })
    return res.data
  }
}
