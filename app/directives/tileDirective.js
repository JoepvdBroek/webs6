module.exports = function(app){

	app.directive('tile', function() {
	  	return {
		    restrict: 'E',
		    //templateUrl: 'tile.dir.html',
		    controller: function ($scope){

		    },
		    link: function (scope, element, attrs) {
		    	var tile = scope.tile;

		    	var x = tile.xPos * 20;
		    	var y = tile.xPos * 30;

		    	x = x - (tile.zPos * 1);
		    	y = y - (tile.zPos * 1);

		  		element.css({
		  			"left": tile.xPos*36 + 'px',
		  			"top": tile.yPos*46 + 'px',
		  			"box-shadow": tile.zPos * 1 + 'px' + tile.zPos * 1 + 'px 5px 0px rgba(0,0,0,0.75)',
		  			"z-index": tile.zPos
		  		});

		  		element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png)'});
				var amount = tile.tile.name;
				var toRight = 0;

				switch(tile.tile.suit){
					case 'Bamboo':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
						break;
					case 'Circle':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
						break;
					case 'Character':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
						break;
					case 'Dragon':
						if(amount == "Green"){
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "Red"){
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else {
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						}
					case 'Wind':
						if(amount == "North"){
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "East"){
							toRight = 655 + 73.14;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "South"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else {
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						}
					case 'Season':
						if(amount == "Sprint"){
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else if(amount == "Summer"){
							toRight = 655 + 73.14;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else if(amount == "Autumn"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else {
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						}
					case 'Flower':
						if(amount == "Plum"){
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else if(amount == "Chrysantememum"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else if(amount == "Orchid"){
							toRight = 655 + 73.14
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else {
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						}
				}
		    }
		};
	});

	app.directive('match', function() {
	  	return {
		    restrict: 'E',
		    //templateUrl: 'tile.dir.html',
		    controller: function ($scope){

		    },
		    link: function (scope, element, attrs) {
		    	var tile = scope.tile;

		  		element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png)'});
				var amount = tile.tile.name;
				var toRight = 0;

				switch(tile.tile.suit){
					case 'Bamboo':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
						break;
					case 'Circle':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
						break;
					case 'Character':
						toRight = (amount - 1) * 73.14;
						element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
						break;
					case 'Dragon':
						if(amount == "Green"){
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "Red"){
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else {
							toRight = 950;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						}
					case 'Wind':
						if(amount == "North"){
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "East"){
							toRight = 655 + 73.14;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else if(amount == "South"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						} else {
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px 0px'});
							break;
						}
					case 'Season':
						if(amount == "Sprint"){
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else if(amount == "Summer"){
							toRight = 655 + 73.14;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else if(amount == "Autumn"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						} else {
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -90.33px'});
							break;
						}
					case 'Flower':
						if(amount == "Plum"){
							toRight = 655 + (73.14 * 3);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else if(amount == "Chrysantememum"){
							toRight = 655 + (73.14 * 2);
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else if(amount == "Orchid"){
							toRight = 655 + 73.14
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						} else {
							toRight = 655;
							element.css({'background': 'url(assets/Mahjong_sprite_sheet_2.png) -' + toRight + 'px -180.66px'});
							break;
						}
				}
		    }
		};
	});
};