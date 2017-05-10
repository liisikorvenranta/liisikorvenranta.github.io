var coal = new Image();
coal.src = "coal2.png";

var enemies = new Array(); 

function randomInteger (min, max) {
    rand = Math.floor((Math.random() * max) + min);
    return rand;
};

function createEnemy() {
    for(i = 0; i < 4; i++ ) {
        var enemy = {
            x: randomInteger(10, 350),
            y: randomInteger(10, 350),
            w: 40,
            h: 40,
            speed: 4,
            direction: randomInteger(0,3)
        };
    enemies.push(enemy);
    }
};

function moveEnemy() {
  for(var i in enemies){    
  switch (enemies[i].direction) {
    case 0: 
      enemies[i].x -= enemies[i].speed;
      if ( enemies[i].x < 20) {
          
         enemies[i].x = 20;
         enemies[i].direction = 1;
      }
      break;
    case 1:
       enemies[i].x +=  enemies[i].speed;
      if ( enemies[i].x > 380) {
        enemies[i].x = 380;
        enemies[i].direction = 0;
      }
      break;
    case 2:
       enemies[i].y -=  enemies[i].speed;
      if ( enemies[i].y < 20) {
        enemies[i].y = 20;
        enemies[i].direction = 3;
      }
      break;
    case 3:
       enemies[i].y += enemies[i].speed;
      if ( enemies[i].y > 380) {
         enemies[i].y = 380;
         enemies[i].direction = 2;
      }
      break;
  }
  }
};

function drawEnemy(context) {
   $.each(enemies, function(index, enemy){
    var x =  enemy.x - (enemy.w / 2);
    var y = enemy.y - (enemy.h / 2);
    context.drawImage(coal, x, y, enemy.w, enemy.h);
})  
}; 

 