var scope;
var gameFactory;
var gameController;

beforeEach(module('mahjong'));

beforeEach(inject(function($rootScope,$controller,$injector){
	scope = $rootScope.$new();

	gameFactory = $injector.get("GameFactory");
	gameController = $controller("GameController",{$scope:scope,GameFactory:gameFactory});
}))