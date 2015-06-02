module.exports = function(app){

	app.factory('GameFactory', ['$http' , function($http){
		var factory = {};

		factory.username = 'Joep';

		factory.getGames = function(){
			return $http.get('https://mahjongmayhem.herokuapp.com/games');
			//return factory.games;
		}

		factory.getTiles = function(){
			return $http.get('https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles');
		}

		//Laat nu nog alleen huidige spelers zien.
		factory.openGame = function(game){
			factory.currentGamePlayers = game.players;
			return factory.currentGamePlayers;
		}

		factory.addGame = function(newGame) {
			var emptyGame = { id: newGame, players: [], status: 'open', tiles : tiles};
			factory.games.push(emptyGame);
		}

		factory.joinGame = function(game) {
			if(game.status == 'open'){
				if (game.players.indexOf(this.username) == -1) {
				    game.players.push(this.username);
				} else {
					alert('You are already in this game!');
				}
			} else {
				alert('Game needs to be open!');
			}
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