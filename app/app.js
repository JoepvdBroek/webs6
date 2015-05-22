require('angular/angular');

// Create your app
var app = angular.module('mahjong', []);
var gameFactory = require('./js/GameFactory')(app);
var gameController = require('./js/GameController')(app);

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
			"left": tile.xPos*100 + 'px',
			"top": tile.yPos*150 + 'px',
			"z-index": tile.zPos
		});
    }
  };
});