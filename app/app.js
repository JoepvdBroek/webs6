require('angular/angular');

// Create your app
var app = angular.module('mahjong', []);
var gameFactory = require('./js/GameFactory')(app);
var gameController = require('./js/GameController')(app);

app.filter('matched', function() {
  return function(tile) {
    if(tile.matched){
      return true;
    } else {
      return false;
    }
  }
});

app.directive('tile', function() {
  return {
    restrict: 'E',
    templateUrl: 'tile.dir.html',
    controller: function ($scope){

    },
    link: function (scope, element, attrs) {
    	var tile = scope.tile;
  		element.css({
  			"border": '1px solid black',
  			"left": tile.xPos*20 + 'px',
  			"top": tile.yPos*30 + 'px',
  			"z-index": tile.zPos
  		});
    }
  };
});