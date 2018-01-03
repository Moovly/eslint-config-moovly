const airbnb = require('eslint-config-airbnb');
const deepAssign = require('deep-assign');
import rules from './rules.json';

module.exports = deepAssign(airbnb, rules)
