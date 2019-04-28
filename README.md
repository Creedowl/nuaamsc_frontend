# nuaamsc_frontend

南航微软俱乐部官网前端项目，基于 `vue` 开发，使用了 `vue-router axios element-ui vuex` 等库

## 学习路线

要参与此项目，需要掌握一定的技术和工具的使用

### 技术栈

```shell
html+js+css (基础) -> es6标准 (js语言标准) -> vuejs (项目框架) -> vue-router axios element-ui vuex (本项目所采用的库) -> 设计 (入土)
```

### 工具

`vscode` vue项目开发 ~~指定~~ IDE

`git` 多人协作，版本管理

## 注意事项

1. 本项目采用 `eslint` 规范语法，所以请注意规范代码风格，无法通过 `eslint` 检查的代码将被拒绝入库。但本项目已添加 `git hook` ，会在 `commit` 之前自动检查代码，所以可以配置 `vscode` 的自动格式化。

2. ~~想到再说~~

## 安装依赖
```
yarn install
```

### 启动开发服务器（包含热重载）
```
yarn run serve
```

### 构建正式版本
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
