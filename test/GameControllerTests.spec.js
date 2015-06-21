describe('GameController tests', function(){
        var scope;
        var gameFactory;
        var gameController;

        beforeEach(module('mahjong'));

        beforeEach(inject(function($rootScope,$controller,$injector, $window){
                scope = $rootScope.$new();
                $window.sessionStorage.username = 'TestUsername';
                gameFactory = $injector.get("GameFactory");
                gameController = $controller("GameController", {GameFactory:gameFactory});
        }));

        it('should have set the controller & factory', function(){
                expect(scope).not.to.equal(null);
                expect(gameFactory).not.to.equal(null);
                expect(gameController).not.to.equal(null);
        })

        it('should replace games', function(){

                gameFactory.games = [{_id: "5541fc5b1872631100678bb4", createdBy: { _id: "mmaa.schuurmans@avans.nl", __v: 0, id: "mmaa.schuurmans@avans.nl" }, createdOn: "2015-04-30T09:56:43.516Z", startedOn: "2015-04-30T09:57:43.516Z", endedOn: "2015-04-30T09:58:43.516Z", gameTemplate: { _id: "Dragon", __v: 0, id: "Dragon" }, __v: 0, players: [ { _id: "mmaa.schuurmans@avans.nl", name: "Martijn Schuurmans", __v: 0, id: "mmaa.schuurmans@avans.nl" } ], maxPlayers: 32, minPlayers: 2, state: "finished", id: "5541fc5b1872631100678bb4" }];

                var actualGames = gameFactory.games;
 
                expect(actualGames).to.be.an('array');
                expect(actualGames).to.have.length(1);
                expect(actualGames[0]._id).to.equal('5541fc5b1872631100678bb4');
                expect(actualGames[0].createdBy._id).to.equal('mmaa.schuurmans@avans.nl');
                expect(actualGames[0].createdBy.id).to.equal('mmaa.schuurmans@avans.nl');
                expect(actualGames[0].createdOn).to.equal('2015-04-30T09:56:43.516Z');
                expect(actualGames[0].startedOn).to.equal('2015-04-30T09:57:43.516Z');
                expect(actualGames[0].endedOn).to.equal('2015-04-30T09:58:43.516Z');
                expect(actualGames[0].gameTemplate._id).to.equal('Dragon');
                expect(actualGames[0].gameTemplate.id).to.equal('Dragon');
                expect(actualGames[0].players).to.be.an('array');
                expect(actualGames[0].players[0]._id).to.equal('mmaa.schuurmans@avans.nl');
                expect(actualGames[0].players[0].name).to.equal('Martijn Schuurmans');
                expect(actualGames[0].maxPlayers).to.equal(32);
                expect(actualGames[0].minPlayers).to.equal(2);
                expect(actualGames[0].state).to.equal('finished');
                expect(actualGames[0].id).to.equal('5541fc5b1872631100678bb4');

        })

        it('should go to next page with games', function(){
                var currentpage = gameController.pageIndex;
                gameController.nextPage();
                expect(gameController.pageIndex).to.equal(currentpage +1);
        })
        
        it('should go to previous page with games', function(){
                var currentpage = 0;
                gameController.pageIndex = currentpage;
                gameController.prevPage();
                expect(gameController.pageIndex).to.equal(0); 
                var currentpage = 2;
                gameController.pageIndex = currentpage;
                gameController.prevPage();
                expect(gameController.pageIndex).to.equal(1);


        }); 

});