require('angular/angular');
require('angular-route');

// Create your app
var app = angular.module('mahjong', ['ngRoute']);

var gameFactory = require('./js/GameFactory')(app);
var gameController = require('./js/GameController')(app);
var loginController = require('./js/LoginController')(app);

/*app.factory('httpRequestInterceptor', function ($rootScope) {
  return {     
    request: function (config) { 
//TODO fill stufs
 } });*/
/*app.config([ '$httpProvider', function($httpProvider)
{
    $httpProvider.interceptors.push('TokenInterceptor');
}]);*/

app.config([ '$routeProvider', function($routeProvider)
{
    $routeProvider.when('/game',
    {
        templateUrl: 'partials/board.html',
        controller: 'GameController',
    })
    .when('/login',
    {
        template: 'test',
        controller: 'LoginController',
    })
    .when('/logout',
    {
        template: 'test',
        controller: 'LoginController',
    })
    .otherwise
    ({
        redirectTo: '/'
    });

}]);

app.filter('matched', function() {
    return function( items, matched ) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( item.matched == undefined || item.matched == matched ) {
          filtered.push(item);
        }
      });
      return filtered;
    };
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