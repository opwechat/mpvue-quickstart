const Fly = require('flyio/dist/npm/wx'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const fly = new Fly(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default fly{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
