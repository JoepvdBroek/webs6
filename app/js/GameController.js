module.exports = function(app){

	app.controller('GameController', ['$scope', 'GameFactory' , function($scope, GameFactory){
		this.games = GameFactory.getGames();
		this.newGame = 'game5';
		this.username = GameFactory.username;
		this.currentGamePlayers = [];
		this.currentGameTiles = [];
		this.tiles = [];

		GameFactory.getTiles().success(function(data) {
            console.log(data);
            this.tiles = data;

        }).error(function(status, data) {
            console.log(status);
            console.log(data);
        });

		this.addGame = function() {
			GameFactory.addGame(this.newGame);
		}

		this.joinGame = function(game) {
			GameFactory.joinGame(game);
		}

		this.openGame = function(game){
			this.currentGamePlayers = GameFactory.openGame(game);
			this.currentGameTiles = game.tiles;
		}

	}]);
	
}