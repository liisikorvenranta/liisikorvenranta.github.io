
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('alien', 'coal.png');
    game.load.image('ship', 'jaakarhu3.png');
    game.load.image('iceberg','iceberg.png');
    game.load.image('atom','atom.png');
   
}

var player;
var aliens;
var atoms;

function create() {
    
    var b = game.add.sprite(0, 0, 'iceberg');
    b.height=600;
    b.width=800;
    

    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();

    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);

    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var alien = aliens.create(200 + x * 48, y * 50, 'alien');
            alien.width=35;
            alien.height=35;
            alien.name = 'alien' + x.toString() + y.toString();
            alien.checkWorldBounds = true;
            alien.events.onOutOfBounds.add(alienOut, this);
            alien.body.velocity.y = 50 + Math.random() * 200;
        }
    }
    
    atoms = game.add.group();
    atoms.enableBody = true;
    atoms.physicsBodyType = Phaser.Physics.ARCADE;
    
    
    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var atom = atoms.create(200 + x * 48, y * 50, 'atom');
            atom.width=35;
            atom.height=35;
            atom.name = 'atom' + x.toString() + y.toString();
            atom.checkWorldBounds = true;
            atom.events.onOutOfBounds.add(atomOut, this);
            atom.body.velocity.y = 50 + Math.random() * 200;
        }
    }

}

function alienOut(alien) {

    //  Move the alien to the top of the screen again
    alien.reset(alien.x, 0);

    //  And give it a new random velocity
    alien.body.velocity.y = 50 + Math.random() * 200;

}

function atomOut(atom) {

    //  Move the alien to the top of the screen again
    atom.reset(atom.x, 0);

    //  And give it a new random velocity
    atom.body.velocity.y = 50 + Math.random() * 200;

}



/*var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'ydinvoima', { preload: preload, create: create });

var xcord = 200;

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('iceberg', 'iceberg.png');
    game.load.image('coal', 'coal.png');
    game.load.image('bear1','jaakarhu3.png'); //vasen
    game.load.image('bear2','jaakarhu4.png'); //oikea
    game.load.image('atom','atom.png');

}

function randomInteger (min, max) {
    rand = Math.floor((Math.random() * max) + min);
    return rand;
};

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen 
    /*var c = game.add.image(randomInteger(10,390),0,'coal');
    c.width = 35;
    c.height = 35;
    var a = game.add.image(randomInteger(10,390),0,'atom');
    a.width = 35;
    a.height = 35;
    var j = game.add.image(xcord,300,'bear1');
    
    var b = game.add.sprite(0, 0, 'iceberg');
    
    game.create.texture('coalimg', 'coal.png', 4, 4, 4);
    
    cursors = game.input.keyboard.createCursorKeys();
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    coals = game.add.physicsGroup();
    
    var y = 80;

    for (var i = 0; i < 9; i++)
    {
        var coal = coals.create(game.world.randomX, y, 'coalimg');
        rat.body.velocity.x = game.rnd.between(100, 300);
        y += 48;
    }

    player = game.add.sprite(400, 32, 'phaserDude');
    player.anchor.set(0.5);

    game.physics.arcade.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    
    j.body.velocity.x = 0;
    j.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        j.body.velocity.x = -200;
        j.scale.x = 1;
    }
    else if (cursors.right.isDown)
    {
        j = 'bear2';
        j.body.velocity.x = 200;
        j.scale.x = -1;
    }

}*/
