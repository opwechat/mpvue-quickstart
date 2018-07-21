# mpvue-quickstart

> fork 自 [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) 修改而来

## 基本用法

``` bash
$ npm install -g vue-cli
$ vue init F-loat/mpvue-quickstart my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 主要特性

* 移除 express 等无关依赖
* 引入 mpvue-entry，集中配置页面信息
* 优化分包效果（参考 [@auven](https://github.com/auven) 在 [Meituan-Dianping/mpvue#590](https://github.com/Meituan-Dianping/mpvue/issues/590) 中的分享）
* 引入 dotenv 支持环境变量配置
* 引入 flyio 通过 flyio 来实施 api 请求
* vuex 目录结构标准化、模块化，自动引入 vuex 模块
* api services 目录结构标准化、模块化，自动引入 api 模块
* 小程序目录 packages 结构标准化

## 详细文档请查阅

* [quickstart](http://mpvue.com/mpvue/quickstart)
* [mpvue-entry](https://github.com/F-loat/mpvue-entry)
