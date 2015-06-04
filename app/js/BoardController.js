module.exports = function(app){

	app.controller('BoardController', ['GameFactory', '$routeParams', function(GameFactory, $routeParams){
		var scope = this;

		this.gameId = $routeParams.gameid;
		this.username = GameFactory.username;
		this.tiles = [];
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
		this.selectTile = function(tile){
			console.log('selectTile()');
			if(scope.tile1 == null){
				scope.tile1 = tile;
			} else {
				scope.tile2 = tile;
				console.log(scope.tile1);
				console.log(scope.tile2);
				GameFactory.compareTiles(scope.tile1, scope.tile2);
				scope.tile1 = null;
				scope.tile2 = null;
			}
		}

	}]);
	
}