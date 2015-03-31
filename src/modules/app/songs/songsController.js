'use strict';

module.exports = /*@ngInject*/
  function songsController($scope) {
    $scope.welcome = 'Congratulations!';

    $scope.songs = [
      { id: 1,
        album_cover: "http://placekitten.com/g/200/300",
        song_name: "Plug in baby",
        artist: "Muse",
        album_name: "Origin of Symmetry"
      },

      { id: 2,
        album_cover: "http://placekitten.com/g/200/300",
        song_name: "Learning To Breathe",
        artist: "Switchfoot",
        album_name: "The Best Yet"
      },

      { id: 3,
        album_cover: "http://placekitten.com/g/200/300",
        song_name: "I.O.U. One Galaxy",
        artist: "The Ataris",
        album_name: "End is Forever"
      }
    ];
  };
