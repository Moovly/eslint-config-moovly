module.exports = {
  "extends": "airbnb",
  "rules": {
    "indent": ["error", 4],
    "no-underscore-dangle": 0,
    "max-len": 0,
    "react/forbid-prop-types": 0
  },
  "globals": {
    "PIXI": true,
    "window": true,
    "describe": true,
    "expect": true,
    "it": true,
    "beforeEach": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.common.js"
      }
    }
  }
}
