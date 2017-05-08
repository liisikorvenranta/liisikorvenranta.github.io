var boot = function(game){};
  
boot.prototype = {

  	create: function(){
		/*this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;*/
		this.scale.pageAlignHorizontally = true;
		console.log(2);
		this.game.state.start("Preload");
	}
}