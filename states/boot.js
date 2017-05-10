var boot = function(game){};
  
boot.prototype = { //boots the game

  	create: function(){
		this.scale.pageAlignHorizontally = true;
		console.log(2);
		this.game.state.start("Preload");
	}
}