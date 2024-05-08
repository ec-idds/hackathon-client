function wilkens() {

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
    // music.stopAll();
    // music.Wilkens.loop();

    // pushes sprites into the sprite array
    for(let i = 9; i < 12; i++){
      sprites.push(new Sprite(propArray[i], 50 + i * 20, 5, 20, 20));
    }
  }

  this.draw = function () {
    wilkensDisplay.draw();
    QuadWilkensZone.zone();
    player.draw();

    player.move(keyCode);

    // draws the sprites
    for (s of sprites) {
      s.draw();
    }

    // what allows for the props to change image
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 232) && (mouseX < 246)) {
      player.image = propArray[9];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 250) && (mouseX < 265)) {
      player.image = propArray[10];
    }
    if (mouseIsPressed && (mouseY < 24) && (mouseY > 3) && (mouseX > 268) && (mouseX < 280)) {
      player.image = propArray[11];
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

    let QuadDist = dist(player.x, player.y, QuadWilkensZone.x + QuadWilkensZone.size / 2, QuadWilkensZone.y + QuadWilkensZone.size / 2);
    if (QuadDist < 50) {
      this.sceneManager.showScene(Quad);
      player.x = 50;
      player.y = 500;
    }
  }
}
