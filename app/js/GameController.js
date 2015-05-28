module.exports = function(app){

	app.controller('GameController', ['$scope', 'GameFactory' , function($scope, GameFactory){
		$scope.games = [];
		$scope.newGame = 'game5';
		$scope.username = GameFactory.username;
		$scope.currentGamePlayers = [];
		$scope.currentGameTiles = [];
		$scope.tiles = [];
		getGames();
		getTiles();
 		$scope.isLoggedIn = function () {
 			if($window.sessionStorage.username != null){
 				return false;
 			}
 		}
 				function getTiles(){
 					GameFactory.getTiles().success(function(data) {
 						for (i = 0; i < data.length; i++) { 
					data[i].matched = false;
				}
                $scope.tiles = data;
                
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
		}

		function getGames(){
			GameFactory.getGames().success(function(data){
				//console.log(data);
				$scope.games = data;
			}).error(function(status, data) {

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

		$scope.tile1 = null;
		$scope.tile2 = null;
		$scope.selectTile = function(tile){
			console.log('selectTile()');
			if($scope.tile1 == null){
				$scope.tile1 = tile;
			} else {
				$scope.tile2 = tile;
				console.log($scope.tile1);
				console.log($scope.tile2);
				GameFactory.compareTiles($scope.tile1, $scope.tile2);
				$scope.tile1 = null;
				$scope.tile2 = null;
			}
		}

	}]);
	
}