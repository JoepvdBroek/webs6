module.exports = function(app){

	app.factory('GameFactory', ['$http' , function($http){
		var factory = {};

		var tiles = [
			{ suit: 'character', name: '1' },
			{ suit: 'tiger', name: '2' },
			{ suit: 'tiger', name: '3' },
			{ suit: 'swain', name: '4' },
			{ suit: 'swain', name: '5' },
			{ suit: 'cow', name: '6' },
			{ suit: 'chicken', name: '7' },
		];

		factory.username = 'Joep';
		factory.currentGamePlayers = [];
		factory.games = [
			{ id: 'game1', players: ['player1', 'player2'], status: 'open', tiles : tiles},
			{ id: 'game2', players: ['player2', 'player3', 'player1'], status: 'playing', tiles : tiles },
			{ id: 'game3', players: ['player3', 'player1'], status: 'open', tiles : tiles},
			{ id: 'game4', players: ['Joep', 'player2', 'player1'], status: 'finished', tiles : tiles}
		];	

		factory.getGames = function(){
			return factory.games;
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

			if(tile1.tile.suit == tile2.tile.suit){
				//als 1 van de 2 tiles false is moet name ook overeenkomen
				if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
					if(tile1.tile.name == tile2.tile.name){
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

		var collection = [
	    {
	        "xPos": 7,
	        "yPos": 1,
	        "zPos": 0,
	        "tile": {
	            "_id": 76,
	            "suit": "Character",
	            "name": "2",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb5"
	    },
	    {
	        "xPos": 9,
	        "yPos": 1,
	        "zPos": 0,
	        "tile": {
	            "_id": 135,
	            "suit": "Dragon",
	            "name": "White",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb6"
	    },
	    {
	        "xPos": 11,
	        "yPos": 2,
	        "zPos": 0,
	        "tile": {
	            "_id": 10,
	            "suit": "Circle",
	            "name": "3",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb7"
	    },
	    {
	        "xPos": 13,
	        "yPos": 2,
	        "zPos": 0,
	        "tile": {
	            "_id": 37,
	            "suit": "Bamboo",
	            "name": "1",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb8"
	    },
	    {
	        "xPos": 22,
	        "yPos": 2,
	        "zPos": 0,
	        "tile": {
	            "_id": 102,
	            "suit": "Character",
	            "name": "8",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bb9"
	    },
	    {
	        "xPos": 5,
	        "yPos": 3,
	        "zPos": 0,
	        "tile": {
	            "_id": 29,
	            "suit": "Circle",
	            "name": "8",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bba"
	    },
	    {
	        "xPos": 7,
	        "yPos": 3,
	        "zPos": 0,
	        "tile": {
	            "_id": 59,
	            "suit": "Bamboo",
	            "name": "6",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bbb"
	    },
	    {
	        "xPos": 9,
	        "yPos": 3,
	        "zPos": 0,
	        "tile": {
	            "_id": 143,
	            "suit": "Flower",
	            "name": "Bamboo",
	            "matchesWholeSuit": true,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bbc"
	    },
	    {
	        "xPos": 27,
	        "yPos": 3,
	        "zPos": 0,
	        "tile": {
	            "_id": 20,
	            "suit": "Circle",
	            "name": "6",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bbd"
	    },
	    {
	        "xPos": 27,
	        "yPos": 3,
	        "zPos": 0,
	        "tile": {
	            "_id": 20,
	            "suit": "Circle",
	            "name": "6",
	            "matchesWholeSuit": false,
	            "__v": 0
	        },
	        "_id": "5541fc5b1872631100678bbg"
	    }];

		factory.isMatchAvailable = function(){
			collection.forEach(function(tile1) {
				collection.forEach(function(tile2) {
					if(tile2._id == tile1._id){
						//zelfde tile
					} else {
						if(compareTiles(tile1, tile2)){
							console.log('match found!');
							return true;
						}
					}
				});
			});
			console.log('no match found');
			return false;
		}

		return factory;
	}]);
}