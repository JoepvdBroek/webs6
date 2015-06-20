module.exports = function(app){

	app.directive('tile', function() {
	  	return {
		    restrict: 'E',
		    //templateUrl: 'tile.dir.html',
		    controller: function ($scope){

		    },
		    link: function (scope, element, attrs) {
		    	var tile = scope.tile;

		    	var x = tile.xPos * 20;
		    	var y = tile.xPos * 30;

		    	x = x - (tile.zPos * 1);
		    	y = y - (tile.zPos * 1);

		  		element.css({
		  			"left": tile.xPos*36 + 'px',
		  			"top": tile.yPos*46 + 'px',
		  			"z-index": tile.zPos
		  		});

		  		var className = tile.tile.suit+"-"+tile.tile.name;
				element.addClass(className)
		    }
		};
	});

	app.directive('match', function() {
	  	return {
		    restrict: 'E',
		    //templateUrl: 'tile.dir.html',
		    controller: function ($scope){

		    },
		    link: function (scope, element, attrs) {
		    	var tile = scope.tile;

		    	var className = tile.tile.suit+"-"+tile.tile.name;
				element.addClass(className)
		  	}
		};
	});
};