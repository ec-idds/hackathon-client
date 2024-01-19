function Quad() {

  let x = 200;
  let y = 200;
  let d = 40;

  let sprites = [];

  let JYCZone = {
    x: 400,
    y: 400,
    size: 40,
    draw: function () {
      fill('blue');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let miniMap = {
    x: 50,
    y: 50,
    size: 400,
    draw: function () {
      fill('orange');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let dormZone = {
    x: 440,
    y: 20,
    size: 40,
    draw: function () {
      fill('green');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let libraryZone = {
    x: 100,
    y: 20,
    size: 40,
    draw: function () {
      fill('pink');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let wilkensZone = {
    x: 100,
    y: 420,
    size: 40,
    draw: function () {
      fill('yellow');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  this.setup = function () {
    // canvas
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 9; i++) {
      sprites.push(new Sprite(propArray[i], 200 + i * 20, 5, 20, 20));
    }
  };

  this.draw = function () {
    background(220);

    for (s of sprites) {
      s.draw();
    }


    let mapOn = false;
    if (keyIsPressed) {
      player.keyIsPressed(keyCode);

      if (keyCode == BACKSPACE) {
        mapOn = true;
      } else {
        mapOn = false;
      }

    }
    JYCZone.draw();
    dormZone.draw();
    libraryZone.draw();
    wilkensZone.draw();

    if (mapOn == true) {
      miniMap.draw();
    }

    let jycDist = dist(player.x, player.y, JYCZone.x + JYCZone.size / 2, JYCZone.y + JYCZone.size / 2);
    if (jycDist < 30) {
      this.sceneManager.showScene(JYC);
      player.x = 360;
      player.y = 420
      JYCZone.y = 400;
    }

    let dormDist = dist(player.x, player.y, dormZone.x + dormZone.size / 2, dormZone.y + dormZone.size / 2);
    if (dormDist < 30) {
      this.sceneManager.showScene(dorm);
      player.x = 400;
      player.y = 40;
      dormZone.y = 20;
    }

    let libraryDist = dist(player.x, player.y, libraryZone.x + libraryZone.size / 2, libraryZone.y + libraryZone.size / 2);
    if (libraryDist < 30) {
      this.sceneManager.showScene(Library);
      player.x = 180;
      player.y = 40;
      libraryZone.y = 20;
    }

    let wilkensDist = dist(player.x, player.y, wilkensZone.x + wilkensZone.size / 2, wilkensZone.y + wilkensZone.size / 2);
    if (wilkensDist < 30) {
      this.sceneManager.showScene(wilkens);
      player.x = 180;
      player.y = 440;
      wilkensZone.y = 420;
    }

    player.draw();

    console.log(mouseX, mouseY)
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 201) && (mouseX < 216)) {
      player.image = propArray[0];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 219) && (mouseX < 237)) {
      player.image = propArray[1];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 238) && (mouseX < 257)) {
      player.image = propArray[2];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 261) && (mouseX < 277)) {
      player.image = propArray[3];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 280) && (mouseX < 299)) {
      player.image = propArray[4];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 300) && (mouseX < 316)) {
      player.image = propArray[5];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 320) && (mouseX < 339)) {
      player.image = propArray[6];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 342) && (mouseX < 355)) {
      player.image = propArray[7];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 361) && (mouseX < 376)) {
      player.image = propArray[8];
    }
  };

  // if (mouseIsPressed && x <= width / 3 && x >= width/3 + 40 && y >= 0 && y <= height / 12) {

  // }
  // function keyPressed(){
  //   if (keyCode === 68){
  //     player.image=propArray[2];
  //   }
  //   if (keyCode === 65){
  //     player.image=propArray[3];
  //   }
  // }
  // if (mouseIsPressed && mouseX<windowWidth/2 && mouseY<50){
  //   player.image=propArray[1];
  // }
  // if(mouseIsPressed && mouseX>windowWidth/2 && mouseY<50){
  //   player.image=propArray[2];
  // }
  // if (mouseIsPressed && mouseX >= 200 && mouseX <= 220 && mouseY <= 25 && mouseY >= 5){
  //   player = propArray[0];
  // } else if (mouseIsPressed && mouseX >= 220 && mouseX <= 240 && mouseY <= 25 && mouseY >= 5) {
  //   player = propArray[1];
  // }


}

    // create an array of all the pages 
    // then create a variable to keep track of what page you're on
    // identify what areas on the map are 'transporation zones'
    // when the sprite enters a transporation zone,
    // alter the 'current' variable to match the corresponding map/page
