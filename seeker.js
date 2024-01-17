// create tunnel shaded area 
// figure out how to implement movement of the shaded area 


 
function Seeker() {

  let seeker = {
    x: 200,
    y: 200, 
    size: 40,
    draw: function() {
      noStroke();
      fill('orange');
      ellipse(this.x, this.y, this.size, this.size);
          }
  }

  let flashlightVision = {
    draw: function() {

    noStroke();
      
      //flashlight vision
      push();
      beginClip({ invert: true });
      arc(seeker.x, seeker.y, 450, 450, radians(230), radians(-35), PIE);
      endClip();

      fill('black');
      rect(0, 0, width, height)
      pop();
    }
  }

  this.setup = function (){
    createCanvas(500, 500);
  }
  
  this.draw = function () {
    background('Purple');
    flashlightVision.draw();
    seeker.draw();
    

    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        seeker.x--;
      } else if (keyCode == RIGHT_ARROW){
        seeker.x++;
      }
      if (keyCode == UP_ARROW){
        seeker.y--;
      } else if (keyCode == DOWN_ARROW){
        seeker.y++;
    }
  }
  }

  // put seeker in here
}



