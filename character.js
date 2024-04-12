// irrelevant, will delete later
// class Character {
//     constructor (x, y, w, h, controllable, speed, image){
//         this.x = x;
//         this.y = y;
//         this.width = w;
//         this.height = h;
//         if (controllable === undefined) {
//             this.controllable = false;
//         } else {
//             this.controllable = controllable;
//         }
//         this.speed = speed;
//         this.image = image;
//     }

//     // draw() {
//     //     image(this.image, this.x, this.y, this.w, this.h);
//     // }

//     keyIsPressed(keyCode) {
//         if (this.controllable !== true) return

//         if (keyCode === LEFT_ARROW) {
//             this.x += this.speed;
//         } else if (keyCode === RIGHT_ARROW) {
//             this.x += this.speed;
//         }
//         if (keyCode === UP_ARROW) {
//             this.y += this.speed;
//         } else if (keyCode === DOWN_ARROW) {
//             this.y += this.speed;
//         }
//     }
// }