var score; //defining variables
var scoreText;
var meter;
var tracker = 1;
var co2text; 
var x = 400;
var y = 200;
var gameOn = false;
var theGame = function(game) {
	
    var player;
    var coals;
    var atoms;
	
}


theGame.prototype = {

	create: function() {

		music = game.add.audio('musa'); //play background music
		music.loopFull(); 
		
		score = 2033;
		
		this.scale.pageAlignHorizontally = true; //background settings
		this.scale.pageAlignVertically = true;
		var b = game.add.sprite(0, 0, 'iceberg'); 
		b.height=600;
		b.width=800;

		game.physics.setBoundsToWorld(); //world bounds

		player = game.add.sprite(400, 520, 'right'); //player settings
		player.anchor.setTo(0.5, 0.5);
		player.height = 58;
		player.width = 83;
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;


		coals = game.add.group(); //coal settings
		coals.enableBody = true;
		coals.physicsBodyType = Phaser.Physics.ARCADE;


		for (var current = 0; current < 10; current++) //creating coals
			{
				newCoal(current);
			}

		atoms = game.add.group(); //atom settings
		atoms.enableBody = true;
		atoms.physicsBodyType = Phaser.Physics.ARCADE;


		for (var current = 0; current < 3; current++) //creating atoms
			{
				newAtom(current);
			}

		scoreText = game.add.text(370, 10, 'THE ICE WILL MELT IN 2033', { font: "25px Courier", fill: "#000000", align: "left" });

		var meter = game.add.sprite(0, 0, 'meter' + tracker); //co2 indicator settings
		meter.height = 50;
		meter.width = 300; 
		co2text= game.add.text(10, 60 , 'CO2-INDICATOR', { font: "25px Courier", fill: "#000000", align: "left" });


	function newCoal(xcoord)  { //creates a new coal

		var coal = coals.create(xcoord * 80, 0, 'coal');
		coal.width=35;
		coal.height=35;

		coal.checkWorldBounds = true;
		coal.events.onOutOfBounds.add(coalOut, this);
		coal.body.velocity.y = 100 + Math.random() * 200; 

	}

	function newAtom(xcoord) { //creates a new atom

		var atom = atoms.create(xcoord * 160, 0, 'atom');
		atom.width=35;
		atom.height=35;
		/*atom.name = 'atom' + x.toString() + y.toString();*/
		atom.checkWorldBounds = true;
		atom.events.onOutOfBounds.add(atomOut, this);
		atom.body.velocity.y = 50 + Math.random() * 80;

	}
		
	function coalOut(coal) { //resets the y-location of coal to 0 when out of bounds
		var randomGenerator = Math.floor(Math.random()*795) + 5;
		coal.reset(randomGenerator, 0);
		coal.body.velocity.y = 50 + Math.random() * x;
		x += 1;

	}

	function atomOut(atom) { //resets the y-location of atom to 0 when out of bounds
		var randomGenerator = Math.floor(Math.random()*795) + 5;	
		atom.reset(randomGenerator, 0);
		atom.body.velocity.y = 50 + Math.random() * y;


	}
	},

	update: function () {

		function coalOut(coal) { 
			var randomGenerator = Math.floor(Math.random()*795) + 5;
			coal.reset(randomGenerator, 0);

			coal.body.velocity.y = 50 + Math.random() * x; //gives the coal a random velocity
			x += 1;

	    }

		function atomOut(atom) {
			var randomGenerator = Math.floor(Math.random()*795) + 5;
			atom.reset(randomGenerator, 0);

			atom.body.velocity.y = 50 + Math.random() * y; //gives the atom a random velocity


		}

		function newCoal(xcoord)  {

			var coal = coals.create(xcoord * 80, 0, 'coal');
			coal.width=35;
			coal.height=35;
			coal.checkWorldBounds = true;
			coal.events.onOutOfBounds.add(coalOut, this);
			coal.body.velocity.y = 100 + Math.random() * 400; 

		}

		function newAtom(xcoord) {

			var atom = atoms.create(xcoord * 160, 0, 'atom');
			atom.width=35;
			atom.height=35;
			atom.checkWorldBounds = true;
			atom.events.onOutOfBounds.add(atomOut, this);
			atom.body.velocity.y = 50 + Math.random() * 80;

		}

		function collisionHandler(player, coal) { //coal collision

			music = game.add.audio('hiili'); //sound effect
			music.play(); 

			var newX = Math.random() * 10; //removes coal on collision and creates a new one
			coals.remove(coal); 
			newCoal(newX);
			score -= 1;
			scoreText.text = 'THE ICE WILL MELT IN ' + score;
			tracker += 1

			if (meter != null){
				meter.destroy();
			}

			meter = game.add.sprite(0, 0, 'meter' + tracker);
			meter.height = 50;
			meter.width = 300; 

			if(tracker >= 16) { //losing condition
				x = 400;
				tracker = 1;
				this.game.state.start("GameOver");
			}
		}

		function collisionHandler2(player, atom) { //atom collision

			music = game.add.audio('atomi'); //sound effect
			music.play(); 

			var newX2 = Math.random() * 5; //removes atom on collision and creates a new one
			atoms.remove(atom);
			newAtom(newX2);
			score += 1;
			scoreText.text = 'THE ICE WILL MELT IN ' + score;

			if (score >= 2050){
				x = 400;
				this.game.state.start("Win");
			}

	     }

		 game.physics.arcade.overlap(player, coals, collisionHandler, null, this);
		 game.physics.arcade.overlap(player, atoms, collisionHandler2, null, this);

		 if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) //moves player with keyboard
		 {
			 player.loadTexture('left',0,false);
			 player.x -= 4;
		 }
		 else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		 {
			 player.loadTexture('right',0,false);
			 player.x += 4;
		 }

		 if(score == 2017){ //game over condition
			gameOn == false
		 }

	}

}