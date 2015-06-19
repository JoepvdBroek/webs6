describe("testing board", function(){

        
        it("match tiles by wholesuit", function(){
                tile1 = {
                        "suit": "Flower",
                        "name": "Bamboo",
                        "matchesWholeSuit": true
                }
                tile2 = {
                        "suit": "Flower",
                        "name": "Chrysantememum",
                        "matchesWholeSuit": true
                }
                outcome = BoardController.matchesWholeSuit(tile1,tile2);
                expect(outcome).to.equal(true);
        })
})