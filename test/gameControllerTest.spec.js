describe("testing the Games", function(){
        it('should replace games', function(done){
                var GameController = $controller('GameController', { $scope: {}, GameFactory: GameFactory });

                GameFactory.games = [{{_id: "5541fc5b1872631100678bb4", createdBy: { _id: "mmaa.schuurmans@avans.nl", __v: 0, id: "mmaa.schuurmans@avans.nl" }, createdOn: "2015-04-30T09:56:43.516Z", startedOn: "2015-04-30T09:57:43.516Z", endedOn: "2015-04-30T09:58:43.516Z", gameTemplate: { _id: "Dragon", __v: 0, id: "Dragon" }, __v: 0, players: [ { _id: "mmaa.schuurmans@avans.nl", name: "Martijn Schuurmans", __v: 0, id: "mmaa.schuurmans@avans.nl" } ], maxPlayers: 32, minPlayers: 2, state: "finished", id: "5541fc5b1872631100678bb4" }}];
                // Deze roept onze service aan (verwachten we), dus nu kunnen we kijken of dit klopt
                var actualGames = GameFactory.games;
 
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
        it("Should add game", function(){
                amountOfGames = GameFactory.games.length;
                GameController.addGame({"_id":"Shanghai","__v":0,"tiles":[{"xPos":3,"yPos":1,"zPos":0},{"xPos":5,"yPos":1,"zPos":0},{"xPos":7,"yPos":1,"zPos":0},{"xPos":9,"yPos":1,"zPos":0},{"xPos":11,"yPos":1,"zPos":0},{"xPos":13,"yPos":1,"zPos":0},{"xPos":15,"yPos":1,"zPos":0},{"xPos":17,"yPos":1,"zPos":0},{"xPos":19,"yPos":1,"zPos":0},{"xPos":21,"yPos":1,"zPos":0},{"xPos":23,"yPos":1,"zPos":0},{"xPos":25,"yPos":1,"zPos":0},{"xPos":7,"yPos":3,"zPos":0},{"xPos":9,"yPos":3,"zPos":0},{"xPos":11,"yPos":3,"zPos":0},{"xPos":13,"yPos":3,"zPos":0},{"xPos":15,"yPos":3,"zPos":0},{"xPos":17,"yPos":3,"zPos":0},{"xPos":19,"yPos":3,"zPos":0},{"xPos":21,"yPos":3,"zPos":0},{"xPos":5,"yPos":5,"zPos":0},{"xPos":7,"yPos":5,"zPos":0},{"xPos":9,"yPos":5,"zPos":0},{"xPos":11,"yPos":5,"zPos":0},{"xPos":13,"yPos":5,"zPos":0},{"xPos":15,"yPos":5,"zPos":0},{"xPos":17,"yPos":5,"zPos":0},{"xPos":19,"yPos":5,"zPos":0},{"xPos":21,"yPos":5,"zPos":0},{"xPos":23,"yPos":5,"zPos":0},{"xPos":3,"yPos":7,"zPos":0},{"xPos":5,"yPos":7,"zPos":0},{"xPos":7,"yPos":7,"zPos":0},{"xPos":9,"yPos":7,"zPos":0},{"xPos":11,"yPos":7,"zPos":0},{"xPos":13,"yPos":7,"zPos":0},{"xPos":15,"yPos":7,"zPos":0},{"xPos":17,"yPos":7,"zPos":0},{"xPos":19,"yPos":7,"zPos":0},{"xPos":21,"yPos":7,"zPos":0},{"xPos":23,"yPos":7,"zPos":0},{"xPos":25,"yPos":7,"zPos":0},{"xPos":1,"yPos":8,"zPos":0},{"xPos":27,"yPos":8,"zPos":0},{"xPos":29,"yPos":8,"zPos":0},{"xPos":3,"yPos":9,"zPos":0},{"xPos":5,"yPos":9,"zPos":0},{"xPos":7,"yPos":9,"zPos":0},{"xPos":9,"yPos":9,"zPos":0},{"xPos":11,"yPos":9,"zPos":0},{"xPos":13,"yPos":9,"zPos":0},{"xPos":15,"yPos":9,"zPos":0},{"xPos":17,"yPos":9,"zPos":0},{"xPos":19,"yPos":9,"zPos":0},{"xPos":21,"yPos":9,"zPos":0},{"xPos":23,"yPos":9,"zPos":0},{"xPos":25,"yPos":9,"zPos":0},{"xPos":5,"yPos":11,"zPos":0},{"xPos":7,"yPos":11,"zPos":0},{"xPos":9,"yPos":11,"zPos":0},{"xPos":11,"yPos":11,"zPos":0},{"xPos":13,"yPos":11,"zPos":0},{"xPos":15,"yPos":11,"zPos":0},{"xPos":17,"yPos":11,"zPos":0},{"xPos":19,"yPos":11,"zPos":0},{"xPos":21,"yPos":11,"zPos":0},{"xPos":23,"yPos":11,"zPos":0},{"xPos":7,"yPos":13,"zPos":0},{"xPos":9,"yPos":13,"zPos":0},{"xPos":11,"yPos":13,"zPos":0},{"xPos":13,"yPos":13,"zPos":0},{"xPos":15,"yPos":13,"zPos":0},{"xPos":17,"yPos":13,"zPos":0},{"xPos":19,"yPos":13,"zPos":0},{"xPos":21,"yPos":13,"zPos":0},{"xPos":3,"yPos":15,"zPos":0},{"xPos":5,"yPos":15,"zPos":0},{"xPos":7,"yPos":15,"zPos":0},{"xPos":9,"yPos":15,"zPos":0},{"xPos":11,"yPos":15,"zPos":0},{"xPos":13,"yPos":15,"zPos":0},{"xPos":15,"yPos":15,"zPos":0},{"xPos":17,"yPos":15,"zPos":0},{"xPos":19,"yPos":15,"zPos":0},{"xPos":21,"yPos":15,"zPos":0},{"xPos":23,"yPos":15,"zPos":0},{"xPos":25,"yPos":15,"zPos":0},{"xPos":9,"yPos":3,"zPos":1},{"xPos":11,"yPos":3,"zPos":1},{"xPos":13,"yPos":3,"zPos":1},{"xPos":15,"yPos":3,"zPos":1},{"xPos":17,"yPos":3,"zPos":1},{"xPos":19,"yPos":3,"zPos":1},{"xPos":9,"yPos":5,"zPos":1},{"xPos":11,"yPos":5,"zPos":1},{"xPos":13,"yPos":5,"zPos":1},{"xPos":15,"yPos":5,"zPos":1},{"xPos":17,"yPos":5,"zPos":1},{"xPos":19,"yPos":5,"zPos":1},{"xPos":9,"yPos":7,"zPos":1},{"xPos":11,"yPos":7,"zPos":1},{"xPos":13,"yPos":7,"zPos":1},{"xPos":15,"yPos":7,"zPos":1},{"xPos":17,"yPos":7,"zPos":1},{"xPos":19,"yPos":7,"zPos":1},{"xPos":9,"yPos":9,"zPos":1},{"xPos":11,"yPos":9,"zPos":1},{"xPos":13,"yPos":9,"zPos":1},{"xPos":15,"yPos":9,"zPos":1},{"xPos":17,"yPos":9,"zPos":1},{"xPos":19,"yPos":9,"zPos":1},{"xPos":9,"yPos":11,"zPos":1},{"xPos":11,"yPos":11,"zPos":1},{"xPos":13,"yPos":11,"zPos":1},{"xPos":15,"yPos":11,"zPos":1},{"xPos":17,"yPos":11,"zPos":1},{"xPos":19,"yPos":11,"zPos":1},{"xPos":9,"yPos":13,"zPos":1},{"xPos":11,"yPos":13,"zPos":1},{"xPos":13,"yPos":13,"zPos":1},{"xPos":15,"yPos":13,"zPos":1},{"xPos":17,"yPos":13,"zPos":1},{"xPos":19,"yPos":13,"zPos":1},{"xPos":11,"yPos":5,"zPos":2},{"xPos":13,"yPos":5,"zPos":2},{"xPos":15,"yPos":5,"zPos":2},{"xPos":17,"yPos":5,"zPos":2},{"xPos":11,"yPos":7,"zPos":2},{"xPos":13,"yPos":7,"zPos":2},{"xPos":15,"yPos":7,"zPos":2},{"xPos":17,"yPos":7,"zPos":2},{"xPos":11,"yPos":9,"zPos":2},{"xPos":13,"yPos":9,"zPos":2},{"xPos":15,"yPos":9,"zPos":2},{"xPos":17,"yPos":9,"zPos":2},{"xPos":11,"yPos":11,"zPos":2},{"xPos":13,"yPos":11,"zPos":2},{"xPos":15,"yPos":11,"zPos":2},{"xPos":17,"yPos":11,"zPos":2},{"xPos":13,"yPos":7,"zPos":3},{"xPos":15,"yPos":7,"zPos":3},{"xPos":13,"yPos":9,"zPos":3},{"xPos":15,"yPos":9,"zPos":3},{"xPos":14,"yPos":8,"zPos":4}],"id":"Shanghai"});
                expect(GameFactory.games.length).to.equal(amountOfGames+1);
                done();
        })
        
})