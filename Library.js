function Library() {
  
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
    for(let i = 12; i < 21; i++){
      sprites.push(new Sprite(propArray[i], 50 + i * 20, 5, 20, 20));
    }
  }
  
  this.draw = function () {
    background('pink')
    player.draw();
    QuadZone.draw();

    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 290) && (mouseX < 305)) {
      player.image = propArray[12];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 308) && (mouseX < 323)) {
      player.image = propArray[13];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 330) && (mouseX < 345)) {
      player.image = propArray[14];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 350) && (mouseX < 365)) {
      player.image = propArray[15];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 370) && (mouseX < 393)) {
      player.image = propArray[16];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 396) && (mouseX < 406)) {
      player.image = propArray[17];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 409) && (mouseX < 427)) {
      player.image = propArray[18];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 430) && (mouseX < 445)) {
      player.image = propArray[19];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 450) && (mouseX < 470)) {
      player.image = propArray[20];
    }

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

    for(s of sprites){
      s.draw();
    }

    if(mapOn == true){
      miniMap.draw();
    }

    let QuadDist = dist(player.x, player.y, QuadZone.x + QuadZone.size / 2, QuadZone.y + QuadZone.size / 2);
    if(QuadDist < 30) {
      this.sceneManager.showScene( Quad );
      player.x = 180;
      player.y = 40;
      QuadZone.y = 20;
    }
  }
}