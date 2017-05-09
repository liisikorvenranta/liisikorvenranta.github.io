var text;

var win = function(game){}
 
win.prototype = { //win menu
	
  	create: function(){
		
		this.scale.pageAlignHorizontally = true; //background settings
		this.scale.pageAlignVertically = true;
		
        music = game.add.audio('musa'); //background music
        music.play(); 
		
        var b = game.add.sprite(0, 0, 'iceberg'); //background image
        b.height=600;
        b.width=800;
		
		//text settings
        var scoreText = game.add.text(125,265,"THE ICEBERGS SURVIVED UNTIL YEAR 2050", { font: "25px Courier", fill: "#000000", align: "left" });
		text= game.add.text(115,290,"YOU STOPPED THE CLIMATE CHANGE WITH NUCLEAR POWER",{ font: "20px Courier", fill: "#000000", align: "left" });
  		var gameOverTitle = this.game.add.sprite(400,200,"youwon");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(400,400,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){ //restarts game 
		this.game.state.start("TheGame");
	}
}