class Display {
    constructor (x, y, image){
        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw() {
        createCanvas(this.x, this.y);
        image(this.image, 0, 0, this.x, this.y);
    }
}