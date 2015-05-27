module.exports = function(app){
	app.controller('LoginController', ['$scope','$routeParams', function($scope, $routeParams){
		console.log("logging");
		$scope.message = 'hello!';
		console.log($routeParams.message);
		setLoginData();


	}]);
}