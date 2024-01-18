function wilkens() {

  let sprites = [];

  let miniMap = {
    x: 50,
    y: 50,
    size: 400,
    draw: function() {
      fill('orange');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let QuadZone = {
  x: 100,
  y: 420,
  size: 40,
  draw: function() {
    fill('red');
    rect(this.x, this.y, this.size, this.size);
  }
}; 

    this.setup = function () {
    // canvas
    createCanvas(500, 500);
    for(let i = 0; i < 3; i++){
      sprites.push(new Sprite(trashcan, 250 + i * 20, 5, 20, 20));
    }
  }
  
  this.draw = function () {
    background('yellow');
    player.draw();
    QuadZone.draw();

    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        player.x = player.x - speed;
      } else if (keyCode == RIGHT_ARROW){
        player.x = player.x + speed;
      }
      if (keyCode == UP_ARROW){
        player.y = player.y - speed;
      } else if (keyCode == DOWN_ARROW){
        player.y = player.y + speed;
    }  
  }

  let mapOn = false;

  if(keyIsPressed){
    if(keyCode == BACKSPACE){
      mapOn = true;
    } else {
      mapOn = false;
    }
  }

  if(mapOn == true){
    miniMap.draw();
  }

  let QuadDist = dist(player.x, player.y, QuadZone.x + QuadZone.size / 2, QuadZone.y + QuadZone.size / 2);
  if(QuadDist < 30) {
    this.sceneManager.showScene( Quad );
    player.x = 180;
    player.y = 440;
    QuadZone.y = 420;
  }

  for(s of sprites){
    s.draw();
  }

  }

}