//BoardController tests
describe('boardController tests', function () {        
        var scope;
        var gameFactory;
        var boardController;
        var win;

        beforeEach(module('mahjong'));

        beforeEach(inject(function($rootScope,$controller,$injector, $window){
                scope = $rootScope.$new();
                routeParams = {gameid: '5541fc5b1872631100678bb4'};
                win = $window;
                gameFactory = $injector.get("GameFactory");
                boardController = $controller("BoardController", {GameFactory:gameFactory, $routeParams: routeParams});
        }));

        it('should have set the controller & factory', function(){
                expect(scope).not.to.equal(undefined);
                expect(gameFactory).not.to.equal(undefined);
                expect(boardController).not.to.equal(undefined);
        });

        describe('selecting tile', function(){
                var game ={"players":
                                [{
                                        "_id": "testingId1"
                                },{
                                        "_id": "testingId2"
                                }
                                ]
                        }
                var tile = {
                        "_id": "12345",
                        "xPos": 9,
                        "yPos": 9,
                        "zPos": 0,
                        "matched" : false,
                        "tile": {
                                "suit": "Character",
                                "name": "2",
                                "matchesWholeSuit": false
                        }
                };
                var tile2 = {
                        "_id": "12348",
                        "xPos": 15,
                        "yPos": 15,
                        "zPos": 0,
                        "matched" : false,
                        "tile": {
                                "suit": "Character",
                                "name": "4",
                                "matchesWholeSuit": false
                        }
                };
                var tiles = [{
                        "_id": "12345",
                        "xPos": 9,
                        "yPos": 9,
                        "zPos": 0,
                        "matched" : false,
                        "tile": {
                                "suit": "Character",
                                "name": "2",
                                "matchesWholeSuit": false
                        }
                },{
                        "_id": "12346",
                        "xPos": 11,
                        "yPos": 9,
                        "zPos": 0,
                        "matched" : false,
                        "tile": {
                                "suit": "Character",
                                "name": "2",
                                "matchesWholeSuit": false
                        }
                },{
                        "_id": "12347",
                        "xPos": 11,
                        "yPos": 9,
                        "zPos": 0,
                        "matched" : false,
                        "tile": {
                                "suit": "Character",
                                "name": "4",
                                "matchesWholeSuit": false
                        }
                }];


                it('should say you are not in the game', function(){
                        boardController.game = game;
                        boardController.tiles = tiles;
                        win.sessionStorage.username = "testUser";
                        boardController.tile1 = null;
                        boardController.tile2 = null;
                        boardController.selectTile(tile);
                        expect(boardController.tile1).to.equal(null);
                        expect(boardController.tile2).to.equal(null);
                })

                it('should set tile1', function(){
                        boardController.game = game;
                        boardController.tiles = tiles;
                        win.sessionStorage.username = "testingId1";
                        boardController.tile1 = null;
                        boardController.tile2 = null;
                        boardController.selectTile(tile);
                        expect(boardController.tile1).to.equal(tile);
                        expect(boardController.tile2).to.equal(null);
                })

                it('should set tile2, no match', function(){
                        boardController.game = game;
                        boardController.tiles = tiles;
                        win.sessionStorage.username = "testingId1";
                        boardController.tile1 = tile;
                        boardController.tile2 = null;
                        boardController.selectTile(tile2);
                        expect(boardController.tile1).to.equal(tile);
                        expect(boardController.tile2).to.equal(tile2);
                })

                it('should not be able to have a match', function(){
                        boardController.isMatchAvailable();
                })

                it('should be able to have a match', function(){
                        boardController.tiles = tiles;
                        boardController.isMatchAvailable();
                })


        })
        it('should select tab 2', function(){
                boardController.tab = 1;
                boardController.selectTab(2);
                expect(boardController.tab).to.equal(2);
        })

        it('should say selected tab is 1 == true', function(){
                boardController.tab = 1;
                output = boardController.isSelected(1);
                expect(output).to.equal(true);
        })

        it('should return player name', function(){
                boardController.game = {"players":
                                [{
                                        "_id": "testingId1",
                                        "name": "testingName1"
                                },{
                                        "_id": "testingId2",
                                        "name": "testingName2"
                                }
                                ]
                        }
                output = boardController.getPlayerName("testingId1");
                expect(output).to.equal("testingName1");
        })

        it('should select other template', function(){
                boardController.tileTemplate = 0;
                boardController.selectTemplate(1);
                expect(boardController.tileTemplate).to.equal(1);
        })

        it('should say selected template is 1 == true', function(){
                boardController.tileTemplate = 1;
                output = boardController.templateSelected(1);
                expect(output).to.equal(true);
        })



        
        
});