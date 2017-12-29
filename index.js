const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');

module.exports = deepAssign(airbnb, {
  "rules": {
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "no-underscore-dangle": 0,
    "max-len": 0,
    "space-unary-ops" : 1,
    "react/forbid-prop-types": 0,
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    "max-len": ["error", 150, 4, {
     "ignoreUrls": true,
     "ignoreComments": false,
     "ignoreRegExpLiterals": true,
     "ignoreStrings": true,
     "ignoreTemplateLiterals": true,
     "react/sort-comp": [1,  { "order": [
      "static-methods",
      "instance-variables",
      "lifecycle",
      "everything-else",
      "render"
    ]}],
     "react/require-default-props": 0
   }]
  },
  "globals": {
    "PIXI": true
  },
  "env": {
    "browser": true,
    "jest": true,
    "jquery": true
  }
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.common.js"
      }
    }
  }
})
