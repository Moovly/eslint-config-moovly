const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');

module.exports = deepAssign(airbnb,
  {
    "rules": {
      "indent": [
        "error",
        4
      ],
      "react/jsx-indent": [
        "error",
        4
      ],
      "react/no-unused-prop-types": false,
      
      "react/jsx-indent-props": [
        "error",
        4
      ],
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [
            ".js",
            ".jsx"
          ]
        }
      ],
      "no-underscore-dangle": 0,
      "max-len": [
        "error", 120, 4,
        {
          "ignoreUrls": true,
          "ignoreComments": false,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
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
