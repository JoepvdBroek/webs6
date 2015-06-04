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
};