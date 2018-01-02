const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');

module.exports = deepAssign(airbnb,
  {
    "rules": {
      "indent": [
        "error",
        4
      ],
      "no-underscore-dangle": 0,
      "max-len": [
        "error",
        120,
        4,
        {
          "ignoreUrls": true,
          "ignoreComments": false,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true
        }
      ],
      "space-unary-ops": 1,
      "no-unused-vars": [
        2,
        {
          "vars": "all",
          "args": "none",
          "ignoreRestSiblings": true
        }
      ],
      "jsx-a11y/click-event-have-key-event": false,
      "jsx-a11y/no-noninteractive-element-interactions": [
        "warn",
        {
          "handlers": [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
          ]
        }
      ],
      "react/forbid-prop-types": 0,
      "react/no-unused-prop-types": false,
      "react/jsx-indent": [
        "error",
        4
      ],
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
      "react/sort-comp": [1,  { "order": [
        "static-methods",
        "instance-variables",
        "lifecycle",
        "everything-else",
        "render",
      ]}],
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
