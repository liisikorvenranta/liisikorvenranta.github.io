var gameOver = function(game){}
 
gameOver.prototype = {
	/*init: function(score){
		alert("You scored: "+score)
	},*/
  	create: function(){
        //var finalYear = this.game.theGame.score;
        music = game.add.audio('musa');
        music.play(); //uus
        var b = game.add.sprite(0, 0, 'iceberg'); //background
        b.height=600;
        b.width=800;
        var scoreText = game.add.text(125,265,"THE ICEBERGS SURVIVED UNTIL YEAR " + score, { font: "25px Courier", fill: "#000000", align: "left" });
  		var gameOverTitle = this.game.add.sprite(400,200,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(400,400,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}