$(document).ready(function() {
  
  var nuclear = new Image();
  nuclear.src = "nuclear.png";
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  document.body.appendChild(canvas);
  createEnemy(); 
    
  document.querySelector("#slow").onclick = function () {
    player.speed = player.speed - 3;
};

document.querySelector("#fast").onclick = function () {
    player.speed = player.speed + 3;
};
    
  
/* Listen to keyboard events */
  var keysDown = {};
  
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });
  
/* Draw everything */
var render = function() {
  ctx.drawImage(nuclear, 0, 0, canvas.width, canvas.height);
  drawPlayer(ctx);
  drawEnemy(ctx);
};

/* Update stuff every loop */
var update = function(delta) {
    if (38 in keysDown) {
       movePlayer("up");
    } 
    if (40 in keysDown) {
       movePlayer("down");
    }
    if (37 in keysDown) {
      movePlayer("left");
    }
    if (39 in keysDown) {
      movePlayer("right");
    }
};

/* Time-based motion animation */
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();
  moveEnemy();
  crash();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
  
};
  
var then = Date.now();
main();
    

  
}); 