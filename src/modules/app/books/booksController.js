'use strict';

module.exports = /*@ngInject*/
  function booksController($scope, $state) {
    console.log($state.params);
    
    $scope.welcome = 'Congratulations!';

    $scope.books = [
      { id: 1,
        cover: "http://placekitten.com/g/200/300",
        title: "Dune",
        author: "Frank Herbert"
      },

      { id: 2,
        cover: "http://placekitten.com/g/200/300",
        title: "Game of Thrones",
        author: "George R.R. Martin"
      },

      { id: 3,
        cover: "http://placekitten.com/g/200/300",
        title: "Speaker for the Dead",
        author: "Orson Scott Card"
      }
    ];
  };
