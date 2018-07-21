import { INCREMENT, DECREMENT } from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  [INCREMENT]{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(state) {
    const obj = state{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    obj.count += 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  [DECREMENT]{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(state) {
    const obj = state{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    obj.count -= 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
