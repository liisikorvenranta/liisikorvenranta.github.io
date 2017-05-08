var gameTitle = function(game){};


gameTitle.prototype = {
  	create: function(){	
        
        music = game.add.audio('musa');
        music.play(); //uus
        
        var b = game.add.sprite(0, 0, 'iceberg'); //background
        b.height=600;
        b.width=800;
        
        var playButton = this.game.add.button(400,120,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
        
        var a = game.add.sprite(300, 200, 'atom');
        game.add.sprite(250, 430, 'ohje2');
        var c = game.add.sprite(500, 460, 'alien');
        
        c.height = 40;
        c.width = 40;
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	},
}
