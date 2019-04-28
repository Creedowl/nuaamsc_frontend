<template>
  <el-header id="header" height="60px">
    <el-menu class="menu" mode="horizontal" :default-active="'0'" @select="test()">
      <div class="logo">
        <img src="../assets/logo.png" alt="test" style="max-height:40px; margin-right:10px;">
        <span>NUAAMSC</span>
      </div>
      <el-menu-item :index="'0'">
        <i class="el-icon-s-home"></i>
        <span>主页</span>
      </el-menu-item>
      <el-menu-item :index="'1'">
        <i class="el-icon-s-grid"></i>
        <span>文章</span>
      </el-menu-item>
      <el-menu-item :index="'2'">
        <i class="el-icon-bell"></i>
        <span>通知</span>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'MHeader',
  methods: {
    test (key, keypath) {
      console.log(key, keypath)
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  padding-left: 0;
  padding-right: 0;

  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-style: normal;
    margin-right: 10%;
  }
}
</style>
