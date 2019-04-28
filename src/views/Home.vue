<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <el-button type="primary" @click="test()">api test</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import article from '@/api/article'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    // 由于返回的是promise，所以调用时也要使用async语法
    async test () {
      const res = await article.getList({ size: 20 })
      console.log('app', res)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>
