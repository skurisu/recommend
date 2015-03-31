'use strict';

module.exports =
  angular.module('recommendations.songs', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('songs', {
      url: '',
      templateUrl: 'app/songs/main.html',
      controller: 'songsController'
    });
  })
  .controller('songsController', require('./songsController'));
