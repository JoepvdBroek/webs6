module.exports = function(app){

	app.directive('tile', function() {
	  	return {
		    restrict: 'E',
		    //templateUrl: 'tile.dir.html',
		    controller: function ($scope){

		    },
		    link: function (scope, element, attrs) {
		    	var tile = scope.tile;

		    	element.css({'left': (tile.xPos-1) * 37 + 'px', 'top': tile.yPos * 37 + 'px',  'z-index': tile.zPos });
	    		if(tile.zPos > 0){
	    			element.css({'left':((tile.xPos-1) * 37 + (tile.zPos * 4)) + 'px','top':(tile.yPos * 37 - (tile.zPos * 4)) + 'px'})
		    	}

		  		/*element.css({
		  			"left": tile.xPos*36 + 'px',
		  			"top": tile.yPos*46 + 'px',
		  			"z-index": tile.zPos
		  		});*/

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