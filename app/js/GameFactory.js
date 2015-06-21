module.exports = function(app){

	app.factory('GameFactory', ['$http', '$window' , function($http, $window){
		var factory = {};

		var prefix = "https://mahjongmayhem.herokuapp.com";

		factory.getGame = function(gameId){
			return $http.get(prefix + '/games/'+gameId);
		}

		factory.getGames = function(queries){
			var url = prefix + '/games';

			if(queries.pageSize != undefined){ url += '?pageSize='+queries.pageSize }
			if(queries.pageIndex != undefined){ url += '&pageIndex='+queries.pageIndex }
			if(queries.onlyJoinedGames && $window.sessionStorage.username){ url += '&player='+$window.sessionStorage.username }
			if(queries.state != undefined){ url += '&state='+queries.state }

			return $http.get(url);
		}

		factory.getTiles = function(gameId){
			return $http.get(prefix + '/games/'+gameId+'/tiles?matched=false');
		}

		factory.getMatches = function(gameId){
			return $http.get(prefix + '/games/'+gameId+'/tiles/matches');
		}

		factory.getTemplates = function(){
			return $http.get(prefix + '/GameTemplates');
		}

		factory.addGame = function(newGame) {
			if($window.sessionStorage.username) {
				return $http.post(prefix + '/games/', 
				{
					"templateName": newGame.template,
					"minPlayers": newGame.min,
					"maxPlayers": newGame.max
				});
			} else {
				alert('U moet ingelogd zijn.');
			}
			
		}

		factory.startGame = function(game){
			if(game.state = 'open'){
				if($window.sessionStorage.username){
					if(factory.isUserOwner(game)){
						return $http.post(prefix + '/games/'+game.id+'/start', {} );
					} else {
						alert('U bent niet te eigenaar van deze game');
					}
				} else {
					alert('U moet ingelogd zijn.');
				} 
			} else {
				alert('Game is al gestart');
			}
			
		}

		factory.joinGame = function(game) {
			if($window.sessionStorage.username) {
				if(game.state == 'open'){
					if(game.players.length < game.maxPlayers){
						var joined = false;
						
						joined = factory.doesGameContainUser(game);

						if(!joined) {
							var player = {};
							player._id = $window.sessionStorage.username;
							
							game.players.push(player);
							addPlayer(game);
						} else {
							alert('U zit al in deze game');
						}
					} else {
						alert('Deze game is al vol.');
					}
				} else {
					alert('Game is al gestart!');
				}
			} else {
				alert('U moet wel ingelogd zijn.');
			}
		}

		factory.doesGameContainUser = function(game){
			if($window.sessionStorage.username) {
				for (i = 0; i < game.players.length; i++) {
					if(game.players[i]._id == $window.sessionStorage.username){
						return true;
					}
				}
			}

			return false;
		}

		factory.isUserOwner = function(game){
			if($window.sessionStorage.username) {
				if(game.createdBy._id == $window.sessionStorage.username){
					return true;
				}
			}

			return false;
		}

		function addPlayer(game){
			/*- Je bent ingelogd
			- De game is nog niet gestart
			- Je zit nog niet in de game
			- De game heeft nog niet het maximaal aantal deelnemers*/
			return $http.post(prefix + '/games/'+game.id+'/players', {} );
		}

		factory.compareTiles = function(tile1, tile2){
			if(tile1._id == tile2._id){
				
			} else {
				if(tile1.tile.suit == tile2.tile.suit){
					//als 1 van de 2 tiles false is moet name ook overeenkomen
					if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
						if(tile1.tile.name == tile2.tile.name){
							console.log('match!');
							return true;
						} else {
							console.log('no match');							
							return false;
						}
					} else {
						console.log('match!');						
						return true;
					}	
				} else {
					console.log('no match');
					return false;
				}
			}

			return false;
		}

		factory.matchTiles = function(gameId, tile1, tile2){
			return $http.post(prefix + '/games/'+gameId+'/tiles/matches', 
			{
                "tile1Id": tile1._id,
                "tile2Id": tile2._id
			});
		}

		factory.isTileSelectable = function(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			console.log('x: '+x+' y: '+y+' z :'+z);

			if(tileToRight(tiles,tile) && tileToLeft(tiles,tile)){
				return false;
			} else if(tileAbove(tiles, tile)){
				return false
			}
			
			return true;
		}

		function tileToRight(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			if(	   (_.findWhere(tiles, {xPos: x + 2, yPos: y, zPos: z, matched: false}) !== undefined) 
				|| (_.findWhere(tiles, {xPos: x + 2, yPos: y + 1, zPos: z, matched: false}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x + 2, yPos: y - 1, zPos: z, matched: false}) !== undefined)){
				console.log('Tile to the right');
				return true;
			}

			return false;
		}

		function tileToLeft(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			if(	   (_.findWhere(tiles, {xPos: x - 2, yPos: y, zPos: z, matched: false}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x - 2, yPos: y + 1, zPos: z, matched: false}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x - 2, yPos: y - 1, zPos: z, matched: false}) !== undefined)){
				console.log('Tile to the left');
				return true;
			}

			return false;
		}

		function tileAbove(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			if(_.findWhere(tiles, {xPos: x, yPos: y, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on righthalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on lefthalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x, yPos: y + 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on lowerhalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x, yPos: y - 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on upperhalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y + 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on lowerright corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y - 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on upperright corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y - 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on upperleft corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y + 1, zPos: z + 1, matched: false}) !== undefined){
				console.log('Tile above it, on lowerleft corner');
				return true;
			}

			return false;
		}

		factory.filterTiles = function(tiles){
			var filtered = [];
			angular.forEach(tiles, function(tile) {
				if(!tile.matched) {
					if(factory.isTileSelectable(tiles, tile)){
						filtered.push(tile);
					}
				}
			});
			return filtered;
		}

		factory.isMatchAvailable = function(tiles){
			//filter alle tegels op niet gematched tegels en tegels die klikbaar zijn.
			collection = factory.filterTiles(tiles);

			for (i = 0; i < collection.length; i++) { 
				for (x = 0; x < collection.length; x++) { 
					if(collection[i]._id == collection[x]._id){
						//zelfde tile
					} else {
						if(factory.compareTiles(collection[i], collection[x])){
							return true;
						}
					}
				}
			}
			return false;
		}

		return factory;
	}]);
}