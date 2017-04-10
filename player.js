var turtle = new Image();
turtle.src = "turtle.png";

var player = {
  x: 200,
  y: 200,
  w: 40,
  h: 40,
  speed: 10
};

function drawPlayer(context) {
  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);
  /*context.fillStyle = 'red';
  context.fillRect(x,y, player.w, player.h);*/
  context.drawImage(turtle, x, y, player.w, player.h);
};

function movePlayer(dir) {
  switch (dir) {
    case "left": 
      player.x -= player.speed;
      if (player.x < 20) {
        player.x = 20;
      }
      break;
    case "right":
      player.x += player.speed;
      if (player.x > 380) {
        player.x = 380;
      }
      break;
    case "up":
      player.y -= player.speed;
      if (player.y < 20) {
        player.y = 20;
      }
      break;
    case "down":
      player.y += player.speed;
      if (player.y > 380) {
        player.y = 380;
      }
      break;
  }
};

function crash () {
    for(var i in enemies){
    if (
		player.x <= (enemies[i].x + 32)
		&& enemies[i].x <= (player.x + 32)
		&& player.y <= (enemies[i].y + 32)
		&& enemies[i].y <= (player.y + 32)
	) {
		/*enemies.splice(i,1);*/
        if(enemies[i].direction == 0){enemies[i].direction = 1;break};
        if(enemies[i].direction == 1){enemies[i].direction = 0;break};
        if(enemies[i].direction == 2){enemies[i].direction = 3;break};
        if(enemies[i].direction == 3){enemies[i].direction = 2;break};
        
	}
    }
};

