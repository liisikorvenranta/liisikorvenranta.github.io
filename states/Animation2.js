var Animation2 = function(game){};



Animation2.prototype = {

var player;
var aliens;
var atoms;


newAlien: function(x) {
    
    var alien = aliens.create(x * 80, 0, 'alien');
    alien.width=35;
    alien.height=35;
    /*alien.name = 'alien' + x.toString() + y.toString();*/
    alien.checkWorldBounds = true;
    alien.events.onOutOfBounds.add(alienOut, this);
    alien.body.velocity.y = 50 + Math.random() * 200; 
    
}

newAtom: function (x){
    
    var atom = atoms.create(x * 53, 0, 'atom');
    atom.width=35;
    atom.height=35;
    /*atom.name = 'atom' + x.toString() + y.toString();*/
    atom.checkWorldBounds = true;
    atom.events.onOutOfBounds.add(atomOut, this);
    atom.body.velocity.y = 50 + Math.random() * 80;
    
}

create: function() {
    
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    var b = game.add.sprite(0, 0, 'iceberg'); //background
    b.height=600;
    b.width=800;

    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();

    player = game.add.sprite(400, 520, 'right'); //polar bear
    player.anchor.setTo(0.5, 0.5);
    player.height = 94;
    player.width = 132;
    
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
    
    
    for (var x = 0; x < 15; x++) //creating atoms
        {
            newAtom(x);
        }
}

alienOut: function(alien) { 

    //  Move the alien to the top of the screen again
    alien.reset(alien.x, 0);

    //  And give it a new random velocity
    alien.body.velocity.y = 50 + Math.random() * 300;

}

atomOut: function(atom) {

    //  Move the alien to the top of the screen again
    atom.reset(atom.x, 0);

    //  And give it a new random velocity
    atom.body.velocity.y = 50 + Math.random() * 200;

}

update: function() {
 {
    
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
}

collisionHandler: function (player, alien) { //coal collision
    
    var newX = Math.random() * 10;
    aliens.remove(alien); 
    newAlien(newX);
    
}

collisionHandler2: function (player, atom) { //atom collision
    
    var newX2 = Math.random() * 15;
    atoms.remove(atom);
    newAtom(newX2);
    
}

}