module.exports = function(app){

	app.controller('GameController', ['$scope', 'GameFactory' , function($scope, GameFactory){
		$scope.games = GameFactory.getGames();
		$scope.newGame = 'game5';
		$scope.username = GameFactory.username;
		$scope.currentGamePlayers = [];
		$scope.currentGameTiles = [];
		$scope.tiles = [];
		getTiles();

		console.log($scope.tiles);

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

		function getTiles(){
			GameFactory.getTiles().success(function(data) {
                $scope.tiles = data;
                console.log($scope.tiles);
                
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
		}

		$scope.addGame = function() {
			GameFactory.addGame($scope.newGame);
		}

		$scope.joinGame = function(game) {
			GameFactory.joinGame(game);
		}

		$scope.openGame = function(game){
			$scope.currentGamePlayers = GameFactory.openGame(game);
			$scope.currentGameTiles = game.tiles;
		}

	}]);
	
}