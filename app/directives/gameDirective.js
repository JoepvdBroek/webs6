module.exports = function(app){

	app.directive('game', function() {
	  	return {
		    restrict: 'A',
		    templateUrl: 'game.dir.html',
		};
	});

	app.directive('gameform', function() {
	  	return {
		    restrict: 'E',
		    templateUrl: 'form.dir.html',
		};
	});
};