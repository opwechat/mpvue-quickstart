import { INCREMENT } from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  add{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}({ commit }, text) {
    commit(INCREMENT, {
      text,
      done: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
