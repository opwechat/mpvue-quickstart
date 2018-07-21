const api = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function importAllDirctory{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(r) {
  r.keys().forEach((modules) => {
    const key = modules.replace(/(^\.\/)|(\/index\.js$)/g, ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    api[key] = r(modules).default{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

function importAll{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(r) {
  r.keys().forEach((modules) => {
    const key = modules.replace(/(^\.\/)|(\.js$)/g, ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    api[key] = r(modules).default{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

importAllDirctory(require.context('./', true, /(?!\.).+\/index.js$/)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
importAll(require.context('./', false, /\b((?!(\bindex\b)).)+\b\.js$/)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default api{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
