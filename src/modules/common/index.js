'use strict';

module.exports =
  angular.module('recommendations.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
