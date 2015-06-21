module.exports = function(app){
	app.controller('LoginController', ['$window', '$location', function($window, $location){
		
		var scope = this;
		scope.loggedin = false;
		scope.user = '';

		scope.isLogged = function(state){
			if(state != undefined){
				scope.loggedin = state;
			}
			return scope.loggedin;
		}

		scope.username = function(username){
			if(username != undefined){
				scope.user = username;
			}
			return scope.user;
		}

		if($location.path() == '/login'){ // login
			console.log("logging");
			$window.sessionStorage.username = $location.search().username;
			$window.sessionStorage.token = $location.search().token;

			scope.isLogged(true);
			scope.username($location.search().username)

			$location.path('/games');
			
		} else if($location.path() == '/logout'){ // logout
			delete $window.sessionStorage.username;
			delete $window.sessionStorage.token;

			scope.isLogged(false);
			scope.username('');
			
			$location.path('/games');
			location.reload();
		} else {
			
		}

		if($window.sessionStorage.username){
			scope.isLogged(true);
			scope.username($window.sessionStorage.username);
		}
	}]);
}