require('angular/angular');

// Create your app
var app = angular.module('mahjong', []);
var gameFactory = require('./js/GameFactory');
var gameController = require('./js/GameController');

app.factory('GameFactory', gameFactory);
app.controller('GameController', ['$scope', 'GameFactory' ,gameController]);
