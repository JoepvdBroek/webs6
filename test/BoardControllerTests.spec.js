//BoardController tests
describe('boardController tests', function () {        
        var scope;
        var gameFactory;
        var boardController;

        beforeEach(module('mahjong'));

        beforeEach(inject(function($rootScope,$controller,$injector){
                scope = $rootScope.$new();
                routeParams = {gameid: '5541fc5b1872631100678bb4'};

                gameFactory = $injector.get("GameFactory");
                boardController = $controller("BoardController", {GameFactory:gameFactory, $routeParams: routeParams});
        }));

        it('should have set the controller & factory', function(){
                expect(scope).not.to.equal(null);
                expect(gameFactory).not.to.equal(null);
                expect(boardController).not.to.equal(null);
        });
        
});