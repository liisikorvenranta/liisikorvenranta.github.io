var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'ydinvoima', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('iceberg', 'iceberg.png');
    game.load.image('coal', 'coal.png');
    game.load.image('bear1','jaakarhu3.png');
    game.load.image('bear2','jaakarhu4.png');
    game.load.image('atom','atom.png');

}

function randomInteger (min, max) {
    rand = Math.floor((Math.random() * max) + min);
    return rand;
};

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var b = game.add.sprite(0, 0, 'iceberg');
    var c = game.add.image(randomInteger(10,390),0,'coal');
    var a = game.add.image(randomInteger(10,390),0,'atom');
    a.width = 35;
    a.height = 35;
    c.width = 35;
    c.height = 35;
    var j = game.add.image(200,300,'bear1');
	game.physics.enable(j, Phaser.Physics.ARCADE);
	j.body.velocity.x=150;

}