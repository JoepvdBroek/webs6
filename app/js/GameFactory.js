module.exports = function(){
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

	return factory;
}