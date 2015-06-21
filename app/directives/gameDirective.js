module.exports = function(app){

	app.directive('game', function() {
	  	return {
		    restrict: 'A',
		    templateUrl: 'game.dir.html',
		};
	});
};