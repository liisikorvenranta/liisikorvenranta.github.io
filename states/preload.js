var preload = function(game){}

preload.prototype = {
 
    preload: function() {
    game.load.image('play', 'playnappi.png');
    game.load.image('ohje2','ohje2.png');
    game.load.image('alien', 'coal.png');
    game.load.image('left', 'jaakarhu3c.png');
    game.load.image('right', 'jaakarhu4c.png');
    game.load.image('iceberg','iceberg.png');
    game.load.image('atom','atomc.png');
    game.load.image('gameover','gameover.png');
    game.load.image('mittari1','comittarit/comittari1c.png')
	game.load.image('mittari2','comittarit/comittari2c.png')
	game.load.image('mittari3','comittarit/comittari3c.png')
	game.load.image('mittari4','comittarit/comittari4c.png')
	game.load.image('mittari5','comittarit/comittari5c.png')
	game.load.image('mittari6','comittarit/comittari6c.png')
	game.load.image('mittari7','comittarit/comittari7c.png')
	game.load.image('mittari8','comittarit/comittari8c.png')
	game.load.image('mittari9','comittarit/comittari9c.png')
	game.load.image('mittari10','comittarit/comittari10c.png')
	game.load.image('mittari11','comittarit/comittari11c.png')
	game.load.image('mittari12','comittarit/comittari12c.png')
	game.load.image('mittari13','comittarit/comittari13c.png')
	game.load.image('mittari14','comittarit/comittari14c.png')
	game.load.image('mittari15','comittarit/comittari15c.png')
	game.load.image('mittari16','comittarit/comittari16c.png')
    
    game.load.audio('musa', ['Oniku.wav']);//musa
    game.load.audio('atomi', ['Plink.wav']);
    game.load.audio('hiili', ['shuffle.wav']);
	
    },
 
    create: function() {
	console.log(3);
    this.game.state.start("GameTitle");
    }
}