// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import createPersistedState from 'vuex-persistedstate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import mutations from './mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import state from './states'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorage({ key, data: value }),
        removeItem: () => {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ],
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function importAllDirctory{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(r) {
  r.keys().forEach((modules) => {
    store.registerModule(modules.replace(/(^\.\/)|(\/index\.js$)/g, ''), r(modules).default){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

function importAll{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(r) {
  r.keys().forEach((modules) => {
    store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), r(modules).default){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

importAllDirctory(require.context('./modules/', true, /index.js$/)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
importAll(require.context('./modules/', false, /\.js$/)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
