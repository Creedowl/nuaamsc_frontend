import request from '@/utils/request.js'

// TODO
export default {
  // 使用async语法糖避免多层嵌套函数，注意返回的也是个promise对象
  async getList ({ page = 1, size = 10 }) {
    const res = await request.get('/article/listAll', { params: { page, size } })
    console.log('get', res)
    return res.data
  },
  add ({
    author = '',
    content = '',
    cover = '',
    summary = '',
    title = '',
    time = Date.now(),
    userId = 0,
    extension = ''
  }) {
    return request.post('/article/insert', {
      data: { author, content, cover, summary, title, time, userId, extension }
    })
  },
  update ({
    author = '',
    content = '',
    cover = '',
    summary = '',
    title = '',
    time = Date.now(),
    userId = 0,
    extension = ''
  }) {
    return request.post('/article/update', {
      data: { author, content, cover, summary, title, time, userId, extension }
    })
  },
  delete ({ articleId = -1 }) {
    return request.delete('/article/deleteById', { param: { articleId } })
  }
}
