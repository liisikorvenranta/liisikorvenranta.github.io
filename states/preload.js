var preload = function(game){}

preload.prototype = {
 
    preload: function() {
		game.load.image('play', 'pictures/playnappi.png'); //loading the images
		game.load.image('ohje','pictures/ohje.png');
		game.load.image('coal', 'pictures/coal.png');
		game.load.image('left', 'pictures/jaakarhu3c.png');
		game.load.image('right', 'pictures/jaakarhu4c.png');
		game.load.image('iceberg','pictures/iceberg.png');
		game.load.image('atom','pictures/atomc.png');
		game.load.image('gameover','pictures/gameover.png');
		game.load.image('meter1','co2meters/comittari1c.png')
		game.load.image('meter2','co2meters/comittari2c.png')
		game.load.image('meter3','co2meters/comittari3c.png')
		game.load.image('meter4','co2meters/comittari4c.png')
		game.load.image('meter5','co2meters/comittari5c.png')
		game.load.image('meter6','co2meters/comittari6c.png')
		game.load.image('meter7','co2meters/comittari7c.png')
		game.load.image('meter8','co2meters/comittari8c.png')
		game.load.image('meter9','co2meters/comittari9c.png')
		game.load.image('meter10','co2meters/comittari10c.png')
		game.load.image('meter11','co2meters/comittari11c.png')
		game.load.image('meter12','co2meters/comittari12c.png')
		game.load.image('meter13','co2meters/comittari13c.png')
		game.load.image('meter14','co2meters/comittari14c.png')
		game.load.image('meter15','co2meters/comittari15c.png')
		game.load.image('meter16','co2meters/comittari16c.png')
		game.load.image('youwon','pictures/youwon.png')
		game.load.audio('musa', ['sounds/Oniku.wav']);//loading the sounds
		game.load.audio('atomi', ['sounds/plnk.wav']);
		game.load.audio('hiili', ['sounds/shufle.wav']);
	
    },
 
    create: function() {
		console.log(3); //begins the game
		this.game.state.start("GameTitle");
    }
}