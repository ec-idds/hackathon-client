function wilkens() {

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
    for(let i = 9; i < 12; i++){
      sprites.push(new Sprite(propArray[i], 50 + i * 20, 5, 20, 20));
    }
  }

  this.draw = function () {
    createCanvas(475, 619);
    image(wilkensMap, 0, 0, 475, 619);
    QuadWilkensZone.zone();
    player.draw();

    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        player.x = player.x - player.speed;
      } else if (keyCode === RIGHT_ARROW) {
        player.x = player.x + player.speed;
      }
      if (keyCode === UP_ARROW) {
        player.y = player.y - player.speed;
      } else if (keyCode == DOWN_ARROW) {
        player.y = player.y + player.speed;
      }
    }

    for (s of sprites) {
      s.draw();
    }

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
