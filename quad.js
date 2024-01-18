function Quad() {

  let x = 200;
  let y = 200;
  let d = 40;
  let mapOn = false;


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
    createCanvas(500, 500);
  }

  this.draw = function () {
    background(220);
    
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
      
    }

  }

    // create an array of all the pages 
    // then create a variable to keep track of what page you're on 
    // identify what areas on the map are 'transporation zones'
    // when the sprite enters a transporation zone, 
    // alter the 'current' variable to match the corresponding map/page
  