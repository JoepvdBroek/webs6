module.exports = function(app){
	app.controller('LoginController', ['$scope', '$window', '$location', function($scope, $window, $location){
		
		if($location.path() == '/login'){ // login
			console.log("logging");
			$window.sessionStorage.username = $location.search().username;
			$window.sessionStorage.token = $location.search().token;

			console.log($window.sessionStorage.username + ':' + $window.sessionStorage.token);
			$location.path('/games');
			
		} else if($location.path() == '/logout'){ // logout
			$window.sessionStorage.clear();
			$location.path('/games');
		}

	}]);
}