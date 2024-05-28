function dorm() {

  // creates a new array of sprites
  let sprites = [];

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
    music.stopAll();
    music.StJulies.loop();

    // pushes sprites into the sprite array
    for(let i = 20; i < 23; i++){
      sprites.push(new Sprite(propArray[i], i * 25 - 250, 5, 20, 20));
    }
  }

  this.draw = function () {
    dormDisplay.draw();
    QuadDormZone.zone();
    player.draw();

    player.move(keyCode);

    // draws the sprites
    for (s of sprites) {
      s.draw();
    }

    // what allows for the props to change image
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 250) && (mouseX < 270)) {
      player.image = propArray[20];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 273) && (mouseX < 293)) {
      player.image = propArray[21];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 305) && (mouseX < 312)) {
      player.image = propArray[22];
    }

    // let mapOn = false;

    // if (keyIsPressed) {
    //   if (keyCode === SHIFT) {
    //     mapOn = true;
    //   } else {
    //     mapOn = false;
    //   }
    // }

    // if (mapOn === true) {
    //   miniMap.draw();
    // }

    let QuadDist = dist(player.x, player.y, QuadDormZone.x + QuadDormZone.size / 2, QuadDormZone.y + QuadDormZone.size / 2);
    if (QuadDist < 30) {
      this.sceneManager.showScene(Quad);
      player.x = 480;
      player.y = 80;
    }
  }
}
