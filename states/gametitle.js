var gameTitle = function(game){};


gameTitle.prototype = {
	
  	create: function(){	
        
        music = game.add.audio('musa'); //music settings
        music.play(); 
        
        var b = game.add.sprite(0, 0, 'iceberg'); //background settings
        b.height=600;
        b.width=800;
        
        var playButton = this.game.add.button(400,120,"play",this.playTheGame,this); //play button
		playButton.anchor.setTo(0.5,0.5);
        
        var a = game.add.sprite(300, 200, 'atom'); //images
		var a2 = game.add.sprite(590,480,'atom');
		a2.height = 40;
		a2.width = 40;
        game.add.sprite(230, 430, 'ohje');
        var c = game.add.sprite(550, 450, 'coal');   
        c.height = 40;
        c.width = 40;
	},
	
	playTheGame: function(){ //starts the game
		this.game.state.start("TheGame");
	},
}
