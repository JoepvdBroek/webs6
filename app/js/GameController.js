module.exports = function($scope, GameFactory){
	this.games = GameFactory.getGames();
	this.newGame = 'game5';
	this.username = GameFactory.username;
	this.currentGamePlayers = [];
	this.currentGameTiles = [];

	this.addGame = function() {
		GameFactory.addGame(this.newGame);
	}

	this.joinGame = function(game) {
		GameFactory.joinGame(game);
	}

	this.openGame = function(game){
		this.currentGamePlayers = GameFactory.openGame(game);
		this.currentGameTiles = game.tiles;
	}
}