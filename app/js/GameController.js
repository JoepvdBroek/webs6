module.exports = function(app){

	app.controller('GameController', ['$scope', 'GameFactory' , function($scope, GameFactory){
		this.games = GameFactory.getGames();
		this.newGame = 'game5';
		this.username = GameFactory.username;
		this.currentGamePlayers = [];
		this.currentGameTiles = [];
		this.tiles = [];

		var tile1 = {
	        "xPos": 7,
	        "yPos": 1,
	        "zPos": 0,
	        "tile": {
	            "_id": 76,
	            "suit": "Tiger",
	            "name": "2",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb5"
	    };

	    var tile2 = {
	        "xPos": 7,
	        "yPos": 1,
	        "zPos": 0,
	        "tile": {
	            "_id": 76,
	            "suit": "Tiger",
	            "name": "3",
	            "matchesWholeSuit": true,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb5"
	    };

		GameFactory.compareTiles(tile1, tile2);
		GameFactory.isMatchAvailable();

		/*GameFactory.getTiles().success(function(data) {
            this.tiles = data;

        }).error(function(status, data) {
            console.log(status);
            console.log(data);
        });*/

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