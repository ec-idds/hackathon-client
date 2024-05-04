function Quad() {

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
  }

  this.draw = function () {
    createCanvas(556, 619);
    // background image
    image(quadMap, 0, 0, 556, 619);
    // warp zones
    JYCZone.zone();
    dormZone.zone();
    wilkensZone.zone();
    libraryZone.zone();

    // drawing constructed character
    player.draw();

    // currently 
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

    // currently how warps are working

    let jycDist = dist(player.x, player.y, JYCZone.x + JYCZone.size / 2, JYCZone.y + JYCZone.size / 2);
    if (jycDist < 37) {
      this.sceneManager.showScene(JYC);
      // player.x = 1100;
      // player.y = 955;
      //JYCZone.y = 400;
    }

    let dormDist = dist(player.x, player.y, dormZone.x + dormZone.size / 2, dormZone.y + dormZone.size / 2);
    if (dormDist < 50) {
      this.sceneManager.showScene(dorm);
      // player.x = 350;
      // player.y = 580;
      //dormZone.y = 20;
    }

    let libraryDist = dist(player.x, player.y, libraryZone.x + libraryZone.size / 2, libraryZone.y + libraryZone.size / 2);
    if (libraryDist < 50) {
      this.sceneManager.showScene(Library);
      // player.x = 420;
      // player.y = 335;
      //libraryZone.y = 20;
    }

    let wilkensDist = dist(player.x, player.y, wilkensZone.x + wilkensZone.size / 2, wilkensZone.y + wilkensZone.size / 2);
    if (wilkensDist < 50) {
      this.sceneManager.showScene(wilkens);
      // player.x = 465;
      // player.y = 595;
      //wilkensZone.y = 420;
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
