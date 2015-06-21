module.exports = function(app){

	app.controller('GameController', ['GameFactory' , function(GameFactory){
		var scope = this;

		scope.pageIndex = 0;
		scope.pageSize = 25;
		scope.onlyJoinedGames = false;
		scope.state = undefined;

		scope.showModal = false;
		scope.games = [];
		scope.templates = [];
		getGames();
		getTemplates();

	    function getTemplates(){
	    	GameFactory.getTemplates().success(function(data){
				scope.templates = data;
			}).error(function(status, data) {
				console.log(status);
                console.log(data);
			});
	    }

		function getGames(){
			var queries = {};
			queries.pageIndex = scope.pageIndex;
			queries.pageSize = scope.pageSize;
			queries.onlyJoinedGames = scope.onlyJoinedGames;
			queries.state = scope.state;

			GameFactory.getGames(queries).success(function(data){
				scope.games = data;
			}).error(function(status, data) {
				console.log(status);
                console.log(data);
			});
		}

		scope.addGame = function(template) {
			GameFactory.addGame(template).success(function(data){
				scope.games.unshift(data);
				alert('Game is aangemaakt.');
			}).error(function(status, data) {
				console.log(status);
                console.log(data);
			});

			scope.toggleModal();
		}

		scope.joinGame = function(game) {
			event.preventDefault();
			GameFactory.joinGame(game);
		}

		scope.openGame = function(game){
			scope.currentGamePlayers = GameFactory.openGame(game);
			scope.currentGameTiles = game.tiles;
		}

		scope.startGame = function(game){
			GameFactory.startGame(game).success(function(data){
				game.state = 'playing';
			}).error(function(status, data) {
				console.log(status);
                console.log(data);
			});
		}

		scope.toggleModal = function(){
	        scope.showModal = !scope.showModal;
	    }

	    scope.toggleOnlyJoinedGames = function(){
	    	scope.pageIndex = 0;
	        scope.onlyJoinedGames = !scope.onlyJoinedGames;
	        getGames();

	        if(scope.onlyJoinedGames){
	        	$('#yourGamesButton').html("Alle games");
	        } else {
	        	$('#yourGamesButton').html("Alleen jouw games");
	        }
	    }

		scope.nextPage = function(){
			scope.pageIndex = scope.pageIndex + 1;
			getGames();
		}

		scope.prevPage = function(){
			if(scope.pageIndex > 0){
				scope.pageIndex = scope.pageIndex - 1;
				getGames();
			}
		}

		scope.doesGameContainUser = function(game){
			return GameFactory.doesGameContainUser(game);
		}

		scope.isUserOwner = function(game){
			return GameFactory.isUserOwner(game);
		}

		scope.refreshGames = function(){
			getGames();
		}

		scope.isState = function(game, state){
			return game.state === state;
		}

	}]);
	
}