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
    start: radians(230),
    end: radians(-35),
    draw: function() {

    noStroke();
      
      //flashlight vision
      push();
      beginClip({ invert: true });
      arc(seeker.x, seeker.y, 450, 450, this.start, this.end, PIE);
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
        flashlightVision.start = radians(150);
        flashlightVision.end = radians(210);
        
      } else if (keyCode == RIGHT_ARROW){
        seeker.x++;
        flashlightVision.start = radians(-30);
        flashlightVision.end = radians(30);
      }
      if (keyCode == UP_ARROW){
        seeker.y--;
        flashlightVision.start = radians(-120);
        flashlightVision.end = radians(-60);
      } else if (keyCode == DOWN_ARROW){
        seeker.y++;
        flashlightVision.start = radians(60);
        flashlightVision.end = radians(120);
    }
  }
  }

  // hard code the locations  
}



