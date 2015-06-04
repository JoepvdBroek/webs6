require('angular/angular');
require('angular-route');

// Create your app
var app = angular.module('mahjong', ['ngRoute']);

var loginController = require('./js/LoginController')(app);

var gameFactory = require('./js/GameFactory')(app);
var gameController = require('./js/GameController')(app);
var boardController = require('./js/BoardController')(app);

var tileDirective = require('./directives/tileDirective')(app);
var matchedFilter = require('./directives/matchedFilter')(app);


app.factory('httpRequestInterceptor', [ '$window' , function ($window) {
    return {     
        request: function (config) { 

          if($window.sessionStorage.token) {
              console.log('setting header');
              config.headers['x-username'] = $window.sessionStorage.username;
              config.headers['x-token'] = $window.sessionStorage.token;
          }
         
          return config;
        }
    }
}]);

app.config([ '$httpProvider', function($httpProvider)
{
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);


app.config([ '$routeProvider', function($routeProvider)
{
    $routeProvider.when('/games', 
    {
        templateUrl: 'partials/allGames.html',
        controller: 'GameController',
    })
    .when('/games/:gameid',
    {
        templateUrl: 'partials/board.html',
        controller: 'BoardController',
    })
    .when('/login',
    {
        template: 'login',
        controller: 'LoginController',
    })
    .when('/logout',
    {
        template: 'logout',
        controller: 'LoginController',
    })
    .otherwise
    ({
        redirectTo: '/'
    });

}]);



