module.exports = function(app){

	app.controller('GameController', ['GameFactory' , function(GameFactory){
		var scope = this;

		this.games = [];
		this.newGame = 'game5';
		getGames();

		function getGames(){
			GameFactory.getGames().success(function(data){
				scope.games = data;
			}).error(function(status, data) {

			});
		}

		this.addGame = function() {
			GameFactory.addGame(scope.newGame);
		}

		this.joinGame = function(game) {
			event.preventDefault();
			GameFactory.joinGame(game);
		}

		this.openGame = function(game){
			scope.currentGamePlayers = GameFactory.openGame(game);
			scope.currentGameTiles = game.tiles;
		}

	}]);
	
}