function JYC() {

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
    // music.JYC.loop();
  }


  this.draw = function () {
    createCanvas(1386, 1014);
    image(JYCMap, 0, 0, 1386, 1014);
    QuadJYCZone.zone();
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

    let QuadDist = dist(player.x, player.y, QuadJYCZone.x + QuadJYCZone.size / 2, QuadJYCZone.y + QuadJYCZone.size / 2);
    if (QuadDist < 50) {
      this.sceneManager.showScene(Quad);
      player.x = 480;
      player.y = 0;
    }
  }
}
