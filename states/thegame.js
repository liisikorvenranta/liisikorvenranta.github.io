//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});
var score;
var scoreText;
var mittari;
var tracker = 1;
var co2text; 
var x = 300;
var y = 200;
var gameOn = false;

var theGame = function(game) {
    var player;
    var aliens;
    var atoms;
	
}


theGame.prototype = {

create: function() {
    
    music = game.add.audio('musa');
    music.loopFull(); //uus
    score = 2033;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    var b = game.add.sprite(0, 0, 'iceberg'); //background
    b.height=600;
    b.width=800;

    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();

    player = game.add.sprite(400, 520, 'right'); //polar bear
    player.anchor.setTo(0.5, 0.5);
    player.height = 58;
    player.width = 83;
    
    game.physics.arcade.enable(player);

    aliens = game.add.group(); //coals
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    
    for (var x = 0; x < 10; x++) //creating coals
        {
            newAlien(x);
        }
    
    atoms = game.add.group(); //atoms
    atoms.enableBody = true;
    atoms.physicsBodyType = Phaser.Physics.ARCADE;
    
    
    for (var x = 0; x < 5; x++) //creating atoms
        {
            newAtom(x);
        }
    
    scoreText = game.add.text(10, 570, 'THE ICE WILL MELT IN 2033', { font: "25px Courier", fill: "#000000", align: "left" });
	
	var mittari = game.add.sprite(0, 0, 'mittari' + tracker);
	mittari.height = 50;
	mittari.width = 300; 
    co2text= game.add.text(10, 60 , 'CO2-INDICATOR', { font: "25px Courier", fill: "#000000", align: "left" });
	
	
function newAlien(x)  {
    
    var alien = aliens.create(x * 80, 0, 'alien');
    alien.width=35;
    alien.height=35;
    /*alien.name = 'alien' + x.toString() + y.toString();*/
    alien.checkWorldBounds = true;
    alien.events.onOutOfBounds.add(alienOut, this);
    alien.body.velocity.y = 100 + Math.random() * 200; 
    
}

function newAtom(x) {
    
    var atom = atoms.create(x * 160, 0, 'atom');
    atom.width=35;
    atom.height=35;
    /*atom.name = 'atom' + x.toString() + y.toString();*/
    atom.checkWorldBounds = true;
    atom.events.onOutOfBounds.add(atomOut, this);
    atom.body.velocity.y = 50 + Math.random() * 80;
    
}
function alienOut(alien) { 

    //  Move the alien to the top of the screen again
    alien.reset(alien.x, 0);

    //  And give it a new random velocity
    alien.body.velocity.y = 50 + Math.random() * x;
	x += 1;

}

function atomOut(atom) {

    //  Move the alien to the top of the screen again
    atom.reset(atom.x, 0);

    //  And give it a new random velocity
    atom.body.velocity.y = 50 + Math.random() * y;
	

}
},

update: function () {
	
	function alienOut(alien) { 

    //  Move the alien to the top of the screen again
    alien.reset(alien.x, 0);

    //  And give it a new random velocity
    alien.body.velocity.y = 50 + Math.random() * x;
	x += 1;

}

function atomOut(atom) {

    //  Move the alien to the top of the screen again
    atom.reset(atom.x, 0);

    //  And give it a new random velocity
    atom.body.velocity.y = 50 + Math.random() * y;
	

}
	
	function newAlien(x)  {
    
    var alien = aliens.create(x * 80, 0, 'alien');
    alien.width=35;
    alien.height=35;
    /*alien.name = 'alien' + x.toString() + y.toString();*/
    alien.checkWorldBounds = true;
    alien.events.onOutOfBounds.add(alienOut, this);
    alien.body.velocity.y = 100 + Math.random() * 200; 
    
}

function newAtom(x) {
    
    var atom = atoms.create(x * 160, 0, 'atom');
    atom.width=35;
    atom.height=35;
    /*atom.name = 'atom' + x.toString() + y.toString();*/
    atom.checkWorldBounds = true;
    atom.events.onOutOfBounds.add(atomOut, this);
    atom.body.velocity.y = 50 + Math.random() * 80;
    
}
	
	function collisionHandler(player, alien) { //coal collision
        
    music = game.add.audio('hiili');
    music.play(); //uus    
    
    var newX = Math.random() * 10;
    aliens.remove(alien); 
    newAlien(newX);
    score -= 1;
    scoreText.text = 'THE ICE WILL MELT IN ' + score;
	tracker += 1
	if (mittari != null){
		mittari.destroy();
	}
	
	mittari = game.add.sprite(0, 0, 'mittari' + tracker);
	mittari.height = 50;
	mittari.width = 300; 
	
	
	if(tracker >= 16) {
        //score = 2033;
        tracker = 1;
        /*this.game.state.states["GameOver"].finalYear = this.score;*/
		this.game.state.start("GameOver");
	}
}

function collisionHandler2(player, atom) { //atom collision
    
    music = game.add.audio('atomi');
    music.play(); //uus
    var newX2 = Math.random() * 5;
    atoms.remove(atom);
    newAtom(newX2);
    score += 1;
    scoreText.text = 'THE ICE WILL MELT IN ' + score;
	
    
}
    
     game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
     game.physics.arcade.overlap(player, atoms, collisionHandler2, null, this);

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player.loadTexture('left',0,false);
        player.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player.loadTexture('right',0,false);
        player.x += 4;
    }
    
    if(score == 2017){
        gameOn == false
    }
    
}

}