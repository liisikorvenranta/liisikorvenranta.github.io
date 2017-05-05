var Preload2 = function(game){}

Preload2.prototype = {
 
    preload: function() {
       game.load.image('alien', 'coal.png');
    game.load.image('left', 'jaakarhu3.png');
    game.load.image('right', 'jaakarhu4.png');
    game.load.image('iceberg','iceberg.png');
    game.load.image('atom','atom.png');  
    }
 
    create: function() {
	console.log(3);
    this.game.state.start("Title2");
    }
 
    
 
}