'use strict';

module.exports =
  angular.module('recommendations.books', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('books', {
      url: '/songs/:id/books',
      templateUrl: 'app/books/books.html',
      controller: 'booksController'
    });
  })
  .controller('booksController', require('./booksController'));
