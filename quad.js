function Quad() {

    let x = 200;
    let y = 200;
    let d = 40;

    this.setup = function () {
    // canvas
    createCanvas(windowWidth, windowHeight);
  }
  
  this.draw = function () {
    image(squirrel, 10, 10, 20, 20);
    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        x--;
      } else if (keyCode == RIGHT_ARROW){
        x++;
      }
      if (keyCode == UP_ARROW){
        y--;
      } else if (keyCode == DOWN_ARROW){
        y++;
    }
  }
  ellipse(x, y, d, d)
  }


// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
// alter the 'current' variable to match the corresponding map/page
}