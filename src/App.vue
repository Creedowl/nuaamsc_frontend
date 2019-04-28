<template>
  <el-container id="app" direction="vertical">
      <MHeader></MHeader>
      <el-main>
        <router-view></router-view>
      </el-main>
  </el-container>
</template>

<script>
import MHeader from '@/components/MHeader'

export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #eeeeee
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  margin-top: 60px;
}

</style>
