module.exports = [
  {
    path: 'pages/index'{{#if_eq lintConfig "airbnb"}},{{/if_eq}} // 页面路径，同时是 vue 文件相对于 src 的路径
  },{{#vuex}} {
    path: 'pages/counter'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },{{/vuex}} {
    path: 'packages/package/logs',
    root: 'packages/package',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
