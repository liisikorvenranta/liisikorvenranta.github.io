var gameOver = function(game){}
 
gameOver.prototype = {

  	create: function(){
		
		this.scale.pageAlignHorizontally = true; //background settings
		this.scale.pageAlignVertically = true;
        
        music = game.add.audio('musa'); //music settings
        music.play(); 
		
        var b = game.add.sprite(0, 0, 'iceberg'); //background settings
        b.height=600;
        b.width=800;
		
		//text settings
        var scoreText = game.add.text(150,265,"THE ICEBERGS SURVIVED UNTIL " + score, { font: "25px Courier", fill: "#000000", align: "center" });
  		var gameOverTitle = this.game.add.sprite(400,200,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(400,400,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}