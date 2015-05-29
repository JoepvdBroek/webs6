module.exports = function(app){
	app.controller('LoginController', ['$scope', '$window', '$location', function($scope, $window, $location){
		
		if($location.path() == '/login'){ // login
			console.log("logging");
			$window.sessionStorage.username = $location.search().username;
			$window.sessionStorage.token = $location.search().token;

			console.log($window.sessionStorage.username + ':' + $window.sessionStorage.token);
			$location.path('/%23/');
		} else if($location.path() == '/logout'){ // lougout
			$window.sessionStorage.clear();
			$location.path('/%23/');
		}

	}]);
}