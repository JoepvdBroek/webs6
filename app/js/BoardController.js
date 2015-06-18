module.exports = function(app){

	app.controller('BoardController', ['GameFactory', '$routeParams', function(GameFactory, $routeParams){
		var scope = this;

		scope.gameId = $routeParams.gameid;
		scope.username = GameFactory.username;
		scope.tiles = [];
		getTiles();
 		
		function getTiles(){
			GameFactory.getTiles(scope.gameId).success(function(data) {
				for (i = 0; i < data.length; i++) { 
					data[i].matched = false;
				}
            scope.tiles = data;
                
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
		}

		scope.tile1 = null;
		scope.tile2 = null;
		scope.selectTile = function(tile){
			var selectable = GameFactory.isTileSelectable(scope.tiles, tile);
			console.log('selectable: ' + selectable);
			if(selectable){
				if(scope.tile1 == null){
					scope.tile1 = tile;
				} else {
					scope.tile2 = tile;
					console.log(scope.tile1);
					console.log(scope.tile2);
					if(GameFactory.compareTiles(scope.tile1, scope.tile2)){
						matchTiles(scope.tile1, scope.tile2);
						scope.tile1.matched = true;
						scope.tile2.matched = true;
					}
					scope.tile1 = null;
					scope.tile2 = null;
				}
			}
		}

		function matchTiles(tile1, tile2){
			GameFactory.matchTiles(scope.gameId, tile1, tile2).success(function(data){
					
			}).error(function(status, data) {
				console.log(status);
				console.log(data);
			});
		}

		scope.isMatchAvailable = function(){
			if(GameFactory.isMatchAvailable(scope.tiles)){
				alert('Er is nog een match');
			} else {
				alert('Er zijn geen matches meer mogelijk');
			}
		}

	}]);
	
}