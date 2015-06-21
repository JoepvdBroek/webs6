//Factory tests
describe('gameFactory tests', function(){
        var scope;
        var gameFactory;
        var win;
        
        beforeEach(module('mahjong')) ;

        beforeEach(inject(function($rootScope, $injector, $window){
                scope = $rootScope.$new();
                win = $window;
                gameFactory = $injector.get('GameFactory');
        }));

        afterEach(function(){
        	win.sessionStorage.username = "";
        })

        it('should have set factory', function(){
                expect(scope).not.to.equal(null);
                expect(gameFactory).not.to.equal(null);
        });

        /*describe('join Game', function(){
        	var game = {"state": 'open'}
        	it('no username set', function(){
        		gameFactory.joinGame(game);
        	})
        })*/

		describe('is user owner', function(){
			var game = {"createdBy": {
				"_id" : "testingId"
			}}
			it('should not be owner', function(){
				win.sessionStorage.username = 'notTestingId';
				output = gameFactory.isUserOwner(game);
				expect(output).to.equal(false);
			})
			it('should be owner', function(){
				win.sessionStorage.username = 'testingId';
				output = gameFactory.isUserOwner(game);
				expect(output).to.equal(true);
			})
			it('has no user', function(){
				win.sessionStorage.username = "";
				output = gameFactory.isUserOwner(game);
				expect(output).to.equal(false);
			})
		})
		
		describe('does game contain user', function(){
			var game = {"players":
				[{
					"_id": "testingId1"
				},{
					"_id": "testingId2"
				}
				]
			}
			it('contains user', function(){
				win.sessionStorage.username = "testingId1";
				output = gameFactory.doesGameContainUser(game);
				expect(output).to.equal(true);
			})
			it('doesnt contain user', function(){
				win.sessionStorage.username = "testingId3";
				output = gameFactory.doesGameContainUser(game);
				expect(output).to.equal(false);
			})
			it('has no user', function(){
				output = gameFactory.doesGameContainUser(game);
				expect(output).to.equal(false);
			})

		})

        describe('match tiles', function(){
                it("by wholesuit", function(){
                        tile1 = {
                                tile: {
                                        "suit": "Flower",
                                        "name": "Bamboo",
                                        "matchesWholeSuit": true
                                },
                                "_id": "123"
                        }
                        tile2 = {
                                tile: {
                                        "suit": "Flower",
                                        "name": "Chrysantememum",
                                        "matchesWholeSuit": true
                                },
                                "_id" : "456"
                        }
                        outcome = gameFactory.compareTiles(tile1,tile2);
                        expect(outcome).to.equal(true);
                });
                it("by wholesuit no match", function(){
                        tile1 = {
                                tile: {
                                        "suit": "Season",
                                        "name": "Spring",
                                        "matchesWholeSuit": true
                                },
                                "_id": "123"
                        }
                        tile2 = {
                                tile: {
                                        "suit": "Flower",
                                        "name": "Chrysantememum",
                                        "matchesWholeSuit": true
                                },
                                "_id" : "456"
                        }
                        outcome = gameFactory.compareTiles(tile1,tile2);
                        expect(outcome).to.equal(false);
                });
                it("by name", function(){
                        tile1 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "2",
                                        "matchesWholeSuit": false
                                },
                                "_id": "123"
                        }
                        tile2 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "2",
                                        "matchesWholeSuit": false
                                },
                                "_id" : "456"
                        }
                        outcome = gameFactory.compareTiles(tile1,tile2);
                        expect(outcome).to.equal(true);
                });
                it("by name no match", function(){
                        tile1 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "2",
                                        "matchesWholeSuit": false
                                },
                                "_id": "123"
                        }
                        tile2 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "3",
                                        "matchesWholeSuit": false
                                },
                                "_id" : "456"
                        }
                        outcome = gameFactory.compareTiles(tile1,tile2);
                        expect(outcome).to.equal(false);
                });
                it("match tiles same tile", function(){
                        tile1 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "2",
                                        "matchesWholeSuit": false
                                },
                                "_id": "123"
                        }
                        tile2 = {
                                tile: {
                                        "suit": "Character",
                                        "name": "2",
                                        "matchesWholeSuit": false
                                },
                                "_id": "123"
                        }
                        outcome = gameFactory.compareTiles(tile1,tile2);
                        expect(outcome).to.equal(false);
                });
        });

        describe('Selectable Tile:', function(){
                it("has Tile to right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 9,
                                        "yPos": 1,
                                        "zPos": 0     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(true);
                });
                it("has no Tile to right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 11,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(true);
                });
                it("has Tile to left", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 5,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(true);
                });
                it("has no Tile to left", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 3,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false     
                                },
                                {
                                        "xPos": 9,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false   
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(true);
                });
                it("has Tile to left and right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 5,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false     
                                },
                                {
                                        "xPos": 9,
                                        "yPos": 1,
                                        "zPos": 0,
                                        "matched" : false   
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, upper left", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 6,
                                        "yPos": 1,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, upper", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 7,
                                        "yPos": 1,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, upper right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 8,
                                        "yPos": 1,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, left", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 6,
                                        "yPos": 2,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, directly", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 1,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 7,
                                        "yPos": 1,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 8,
                                        "yPos": 2,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, bottom left", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 6,
                                        "yPos": 3,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, bottom", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 7,
                                        "yPos": 3,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has Tile on top, bottom right", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 8,
                                        "yPos": 3,
                                        "zPos": 1,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(false);
                });
                it("has no Tile on top", function(){
                        tile1 = {
                                "xPos": 7,
                                "yPos": 2,
                                "zPos": 0
                        }
                        tiles = [
                                {
                                        "xPos": 15,
                                        "yPos": 5,
                                        "zPos": 0,
                                        "matched" : false     
                                }
                        ]
                        outcome = gameFactory.isTileSelectable(tiles,tile1);
                        expect(outcome).to.equal(true);
                });
        })
})