const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');
const rules = require('./rules.json');
module.exports = deepAssign(airbnb, rules)
