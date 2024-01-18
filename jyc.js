function JYC() {

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
  x: 1000,
  y: 955,
  size: 70,
  draw: function() {
    fill('black');
    rect(this.x, this.y, this.size, this.size);
  }
}; 

    this.setup = function () {

  }

  
  this.draw = function () {
    createCanvas(1386, 1014);
    QuadZone.draw();
    image(JYCMap, 0, 0, 1386, 1014);
    player.draw();


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
    if(keyCode == SHIFT){
      mapOn = true;
    } else {
      mapOn = false;
    }
  }

  if(mapOn == true){
    miniMap.draw();
  }

  let QuadDist = dist(player.x, player.y, QuadZone.x + QuadZone.size / 2, QuadZone.y + QuadZone.size / 2);
  if(QuadDist < 50) {
    this.sceneManager.showScene( Quad );
    player.x = 480;
    player.y = 0;
  }

  }
}
