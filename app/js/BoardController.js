module.exports = function(app){

	app.controller('BoardController', ['GameFactory', '$routeParams', function(GameFactory, $routeParams){
		var scope = this;

		scope.tileTemplate = 1;

		scope.tab = 1;
		scope.gameId = $routeParams.gameid;
		scope.username = GameFactory.username;
		scope.tiles = [];
		scope.matches = [];
		scope.game = {};
		getTiles();
		getGame();
		getMatches();
 		
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

		function getMatches(){
			GameFactory.getMatches(scope.gameId).success(function(data) {
            	scope.matches = data;       
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
		}

		function getGame(){
			GameFactory.getGame(scope.gameId).success(function(data) {
            	scope.game = data;       
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
		}

		scope.tile1 = null;
		scope.tile2 = null;
		scope.selectTile = function(tile){
			if(GameFactory.doesGameContainUser(scope.game)){
				var selectable = GameFactory.isTileSelectable(scope.tiles, tile);
				console.log('selectable: ' + selectable);
				if(selectable){
					if(scope.tile1 == null){
						scope.tile1 = tile;
						scope.tile1.selected = true;
					} else {
						scope.tile2 = tile;
						console.log(scope.tile1);
						console.log(scope.tile2);
						if(GameFactory.compareTiles(scope.tile1, scope.tile2)){
							matchTiles(scope.tile1, scope.tile2);
							scope.tile1.matched = true;
							scope.tile2.matched = true;
						}
						scope.tile1.selected = false;
						scope.tile1 = null;
						scope.tile2 = null;
					}
				}
			} else {
				alert('U zit niet in deze game');
			}
			
		}

		function matchTiles(tile1, tile2){
			GameFactory.matchTiles(scope.gameId, tile1, tile2).success(function(data){
				getMatches();
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

		scope.selectTab = function(tab){
			scope.tab = tab;
		}

		scope.isSelected = function(tab){
			return scope.tab === tab;
		}

		scope.getPlayerName = function(userId){
			var name = "-";

			angular.forEach(scope.game.players, function(player) {
		        if( player._id === userId ) {
		          	name =  player.name;
		        }
	      	});

	      	return name;
			
		}

		scope.parseTime = function(time){
			return new Date(time).toLocaleString();
		}

		scope.selectTemplate = function(template){
			scope.tileTemplate = template;
		}

		scope.templateSelected = function(template){
			return scope.tileTemplate === template;
		}
	}]);
	
}