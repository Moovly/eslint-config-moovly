const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');

module.exports = deepAssign(airbnb,
  {
    "rules": {
      "indent": [
        2,
        4
      ],
      "react/jsx-indent": [
        "error",
        4
      ],
      "react/jsx-indent-props": [
        2,
        4
      ],
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [
            ".js",
            ".jsx"
          ]
        }
      ],
      "no-underscore-dangle": 0,
      "max-len": [
        2,
        {
          "code": 80,
          "tabWidth": 4,
          "ignoreUrls": true,
          "ignoreComments": false,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "react/require-default-props": false,
          "react/sort-comp": [1,  { "order": [
            "static-methods",
            "instance-variables",
            "lifecycle",
            "everything-else",
            "render"
          ]}]
        }
      ],
      "space-unary-ops": 1,
      "react/forbid-prop-types": 0,
      "no-unused-vars": [
        2,
        {
          "vars": "all",
          "args": "none",
          "ignoreRestSiblings": true
        }
      ]
    },
    "globals": {
      "PIXI": true
    },
    "env": {
      "browser": true,
      "jest": true,
      "jquery": true
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./webpack.common.js"
        }
      }
    }
  }
)
