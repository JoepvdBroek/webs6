module.exports = function(app){

	app.factory('GameFactory', ['$http', '$window' , function($http, $window){
		var factory = {};

		var prefix = "https://mahjongmayhem.herokuapp.com";

		factory.getGames = function(){
			return $http.get(prefix + '/games');
			//return factory.games;
		}

		factory.getTiles = function(gameId){
			return $http.get(prefix + '/games/'+gameId+'/tiles');
		}

		//Laat nu nog alleen huidige spelers zien.
		factory.openGame = function(game){
			factory.currentGamePlayers = game.players;
			return factory.currentGamePlayers;
		}

		factory.addGame = function(newGame) {
			
		}

		factory.joinGame = function(game) {
			console.log(game);
			if($window.sessionStorage.username) {
				if(game.state == 'open'){
					if(game.players.length < game.maxPlayers){
						if(_.contains(game.players, $window.sessionStorage.username) == false) {
							game.players.push($window.sessionStorage.username);
							//addPlayer(game);
						}
					} else {
						alert('Deze game is al vol.');
					}
				} else {
					alert('Game needs to be open!');
				}
			} else {
				alert('U moet wel ingelogd zijn.');
			}
		}

		function addPlayer(game){
			return $http.post(prefix + '/games/'+game.id+'/players', {} );
		}

		factory.compareTiles = function(tile1, tile2){
			if(tile1._id == tile2._id){
				
			} else {
				if(tile1.tile.suit == tile2.tile.suit){
					//als 1 van de 2 tiles false is moet name ook overeenkomen
					if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
						if(tile1.tile.name == tile2.tile.name){
							tile1.matched = true;
							tile2.matched = true;
							console.log('match!');
						} else {
							console.log('no match');
						}
					} else {
						console.log('match!');
					}	
				} else {
					console.log('no match');
				}
			}
		}

		function compareTiles(tile1, tile2){
			if(tile1.tile.suit == tile2.tile.suit){
				//als 1 van de 2 tiles false is moet name ook overeenkomen
				if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
					if(tile1.tile.name == tile2.tile.name){
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				}	
			} else {
				return false;
			}
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

			if(	   (_.findWhere(tiles, {xPos: x + 2, yPos: y, zPos: z}) !== undefined) 
				|| (_.findWhere(tiles, {xPos: x + 2, yPos: y + 1, zPos: z}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x + 2, yPos: y - 1, zPos: z}) !== undefined)){
				console.log('Tile to the right');
				return true;
			}

			return false;
		}

		function tileToLeft(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			if(	   (_.findWhere(tiles, {xPos: x - 2, yPos: y, zPos: z}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x - 2, yPos: y + 1, zPos: z}) !== undefined)
				|| (_.findWhere(tiles, {xPos: x - 2, yPos: y - 1, zPos: z}) !== undefined)){
				console.log('Tile to the left');
				return true;
			}

			return false;
		}

		function tileAbove(tiles, tile){
			var x = tile.xPos;
			var y = tile.yPos;
			var z = tile.zPos;

			if(_.findWhere(tiles, {xPos: x, yPos: y, zPos: z + 1}) !== undefined){
				console.log('Tile above it');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on righthalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on lefthalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x, yPos: y + 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on lowerhalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x, yPos: y - 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on upperhalf');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y + 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on lowerright corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x + 1, yPos: y - 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on upperright corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y - 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on upperleft corner');
				return true;
			}
			else if(_.findWhere(tiles, {xPos: x - 1, yPos: y + 1, zPos: z + 1}) !== undefined){
				console.log('Tile above it, on lowerleft corner');
				return true;
			}

			return false;
		}

		factory.isMatchAvailable = function(){
			for (i = 0; i < collection.length; i++) { 
				for (x = 0; x < collection.length; x++) { 
					if(collection[i]._id == collection[x]._id){
						//zelfde tile
					} else {
						if(compareTiles(collection[i], collection[x])){
							console.log('match found!');
							return true;
						}
					}
				}
			}
			console.log('no match found');
			return false;
		}

		return factory;
	}]);
}