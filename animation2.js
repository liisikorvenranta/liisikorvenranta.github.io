
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('alien', 'coal.png');
    game.load.image('ship', 'jaakarhu3.png');
    game.load.image('right', 'jaakarhu4.png');
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

    player = game.add.sprite(400, 520, 'ship');
    player.anchor.setTo(0.5, 0.5);
    player.height = 94;
    player.width = 132;

    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    for (var y = 0; y < 2; y++)
    {
        for (var x = 0; x < 5; x++)
        {
            var alien = aliens.create(x * 180, y * 70, 'alien');
            alien.width=35;
            alien.height=35;
            alien.name = 'alien' + x.toString() + y.toString();
            alien.checkWorldBounds = true;
            alien.events.onOutOfBounds.add(alienOut, this);
            alien.body.velocity.y = 50 + Math.random() * 130;
        }
    }
    
    atoms = game.add.group();
    atoms.enableBody = true;
    atoms.physicsBodyType = Phaser.Physics.ARCADE;
    
    
    for (var y = 0; y < 2; y++)
    {
        for (var x = 0; x < 8; x++)
        {
            var atom = atoms.create(x * 120, y * 70, 'atom');
            atom.width=35;
            atom.height=35;
            atom.name = 'atom' + x.toString() + y.toString();
            atom.checkWorldBounds = true;
            atom.events.onOutOfBounds.add(atomOut, this);
            atom.body.velocity.y = 50 + Math.random() * 80;
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

/*cursors = game.input.keyboard.createCursorKeys();

/*function update (){
    
    if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
        }
}*/


/*
    cursors = game.input.keyboard.createCursorKeys();
    
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
