const { upperFirst, camelCase, lowerCase } = require('lodash');

const pageGenerator = require('./frontend/page/generator');
const componentGenerator = require('./frontend/component/generator');
const hookGenerator = require('./frontend/hook/generator');
const serviceGenerator = require('./frontend/service/generator');

module.exports = function(plop) {
  plop.setHelper('pascalCase', function(text) {
    return text
      .split('/')
      .map(text => upperFirst(camelCase(text)))
      .join('/');
  });

  plop.setHelper('camelCase', function(text) {
    return text
      .split('/')
      .map(text => camelCase(text))
      .join('/');
  });

  plop.setHelper('lowerCase', function(text) {
    return text
      .split('/')
      .map(text => lowerCase(text))
      .join('/');
  });

  componentGenerator(plop);
  hookGenerator(plop);
  pageGenerator(plop);
  serviceGenerator(plop);
};
