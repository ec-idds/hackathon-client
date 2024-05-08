function Quad() {

  // creates a new array of sprites
  let sprites = [];

  // let mapOn = false;

  // let miniMap = {
  //   x: 50,
  //   y: 50,
  //   size: 400,
  //   draw: function () {
  //     fill('orange');
  //     rect(this.x, this.y, this.size, this.size);
  //   }
  // };

  this.setup = function () {
    // music stuff
    // music.stopAll();
    // music.Quad.loop();

    // pushes sprites into the sprite array
    for(let i = 0; i < 9; i++){
      sprites.push(new Sprite(propArray[i], 200 + i * 20, 5, 20, 20));
    }
  }

  this.draw = function () {
    // renders the background
    quadDisplay.draw();
    // renders warp zones
    JYCZone.zone();
    dormZone.zone();
    wilkensZone.zone();
    libraryZone.zone();

    // draws constructed character
    player.draw();

    // currently 
    
    player.move(keyCode);

    // draws the sprites
    for (s of sprites) {
      s.draw();
    }

    // what allows for the props to change image
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

    // let mapOn = false;

    // currently how warps are working

    let jycDist = dist(player.x, player.y, JYCZone.x + JYCZone.size / 2, JYCZone.y + JYCZone.size / 2);
    if (jycDist < 37) {
      this.sceneManager.showScene(JYC);
      // warps character near the entrance/exit
      player.x = 950;
      player.y = 925;
    }

    let dormDist = dist(player.x, player.y, dormZone.x + dormZone.size / 2, dormZone.y + dormZone.size / 2);
    if (dormDist < 50) {
      this.sceneManager.showScene(dorm);
      // warps character near the entrance/exit
      player.x = 320;
      player.y = 500;
    }

    let libraryDist = dist(player.x, player.y, libraryZone.x + libraryZone.size / 2, libraryZone.y + libraryZone.size / 2);
    if (libraryDist < 50) {
      this.sceneManager.showScene(Library);
      // warps character near the entrance/exit
      player.x = 430;
      player.y = 430;
    }

    let wilkensDist = dist(player.x, player.y, wilkensZone.x + wilkensZone.size / 2, wilkensZone.y + wilkensZone.size / 2);
    if (wilkensDist < 50) {
      this.sceneManager.showScene(wilkens);
      // warps character near the entrance/exit
      player.x = 300;
      player.y = 520;
    }

    // minimap stuff

    // if (keyIsPressed) {
    //   player.keyIsPressed(keyCode);

    //   if (keyCode === SHIFT) {
    //     mapOn = true;
    //   } else {
    //     mapOn = false;
    //   }
    // }
    // if (mapOn === true) {
    //   miniMap.draw();
    // }
  }
}

// create an array of all the pages 
// then create a variable to keep track of what page you're on
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone,
// alter the 'current' variable to match the corresponding map/page
