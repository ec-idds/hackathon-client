function Quad() {

  let x = 200;
  let y = 200;
  let d = 40;

  this.setup = function () {
    // canvas
    createCanvas(windowWidth, windowHeight);
  }

  this.draw = function () {
    background(220);
    if (keyIsPressed) {
      player.keyIsPressed(keyCode);
    }
    player.draw();
  }


  // create an array of all the pages 
  // then create a variable to keep track of what page you're on 
  // identify what areas on the map are 'transporation zones'
  // when the sprite enters a transporation zone, 
  // alter the 'current' variable to match the corresponding map/page
}