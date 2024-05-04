function wilkens() {

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
  }

  this.draw = function () {
    createCanvas(475, 619);
    // QuadZone.draw();
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
      // i like this spot
      player.x = 50;
      player.y = 500;
    }
  }
}
