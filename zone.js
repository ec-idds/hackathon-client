class Zone {
    constructor(x, y, s, c){
        this.x = x;
        this.y = y;
        this.size = s;
        this.color = c;
    }

    zone (){
        fill (this.color);
        rect(this.x, this.y, this.size, this.size);
    }
}