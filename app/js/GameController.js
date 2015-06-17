module.exports = function(app){

	app.controller('GameController', ['GameFactory' , function(GameFactory){
		var scope = this;

		scope.pageIndex = 0;
		scope.pageSize = 25;
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
			console.log('page: '+ scope.pageIndex);
			GameFactory.getGames(scope.pageIndex, scope.pageSize).success(function(data){
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

		scope.toggleModal = function(){
	        scope.showModal = !scope.showModal;
	    };

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

	}]);
	
}