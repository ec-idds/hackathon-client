function Library() {

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
    // music.Library.loop();
  }

  this.draw = function () {
    createCanvas(1366, 1026);
    image(libraryMap, 0, 0, 1366, 1026);
    QuadLibraryZone.zone();
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

    let QuadDist = dist(player.x, player.y, QuadLibraryZone.x + QuadLibraryZone.size / 2, QuadLibraryZone.y + QuadLibraryZone.size / 2);
    if (QuadDist < 50) {
      this.sceneManager.showScene(Quad);
      // i like this spot
      player.x = 70;
      player.y = 80;
    }
  }
}
