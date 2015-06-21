// loginController test
describe('LoginController tests', function(){
    var scope;
    var loginController;
    var win;

    beforeEach(module('mahjong'));

    beforeEach(inject(function($rootScope,$controller, $window, $location){
            scope = $rootScope.$new();
            win = $window;
            loginController = $controller("LoginController", {$window:win, $location: $location});
    }));

    it('should have set the controller', function(){
        expect(scope).not.to.equal(undefined);
        expect(loginController).not.to.equal(undefined);
    })

    it('toggle logged in true', function(){
    	output = loginController.isLogged(true);
    	expect(output).to.equal(true);
    })

    it('toggle logged in false', function(){
    	output = loginController.isLogged(false);
    	expect(output).to.equal(false);
    })

    it('toggle logged in undefined', function(){
    	input = loginController.isLogged();
    	output = loginController.isLogged(undefined);
    	expect(output).to.equal(input);
    })

    it('should set username to testusername', function(){
    	output = loginController.username('testusername');
    	expect(output).to.equal('testusername');
    })

    it('should not change username', function(){
    	input = loginController.username();
    	output = loginController.username(undefined);
    	expect(output).to.equal(input);
    })


});
