function dorm() {
    
  let player = {
    x: 400,
    y: 40,
    size: 40,
    draw: function() {
      fill('red');
      ellipse(this.x, this.y, this.size, this.size);
    }
  };

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
  x: 440,
  y: 20,
  size: 40,
  draw: function() {
    fill('red');
    rect(this.x, this.y, this.size, this.size);
  }
}; 

    this.setup = function () {
    // canvas
    createCanvas(500, 500);
  }
  
  this.draw = function () {
    background('green');
    player.draw();
    QuadZone.draw();

    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        player.x = player.x - 3;
      } else if (keyCode == RIGHT_ARROW){
        player.x = player.x + 3;
      }
      if (keyCode == UP_ARROW){
        player.y = player.y - 3;
      } else if (keyCode == DOWN_ARROW){
        player.y = player.y + 3;
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
    player.x = 400;
    player.y = 40;
    QuadZone.y = 20;
  }
  }
}