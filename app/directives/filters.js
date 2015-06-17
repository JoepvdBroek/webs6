module.exports = function(app){

	app.filter('matched', function() {
	    return function( items, matched ) {
	      var filtered = [];
	      angular.forEach(items, function(item) {
	        if( item.matched == undefined || item.matched == matched ) {
	          filtered.push(item);
	        }
	      });
	      return filtered;
	    };
	});

	app.filter('joinedGames', [ '$window', function($window) {
		return function( games ) {
	      var filtered = [];
	      angular.forEach(games, function(game) {
	      	angular.forEach(game.players, function(player) {
	      		if(player._id == $window.sessionStorage.username){
					filtered.push(game);
				}
	      	})
	      });
	      return filtered;
	    };
	}]);
};