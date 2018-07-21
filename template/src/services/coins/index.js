import http from '@/utils/flyio'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  getLatestPrice{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return http.get('https://api.coindesk.com/v1/bpi/currentprice.json'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
