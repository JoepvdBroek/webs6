require('angular/angular');

// Create your app
var app = angular.module('mahjong', []);
var gameFactory = require('./js/GameFactory')(app);
var gameController = require('./js/GameController')(app);
