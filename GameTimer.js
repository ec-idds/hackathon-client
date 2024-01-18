class GameTimer {
    constructor() {

    }

    start() {
        this.a = 330;
        this.boxX = 415;
        this.boxY = 0;
        this.text = 'Time Remaining:';
        this.time = setInterval(() => {
            this.a--;
        }, 1000);   
    }

    draw() {
        fill(255);
        rect(this.boxX, this.boxY, 100, 50);
        fill(0);
        textSize(20);
        text(this.text, this.boxX + 50, this.boxY + 15)
      
        let minutes = floor(this.a / 60);
        let seconds = this.a - (minutes * 60);
        let remaining = `${minutes}:${nf(seconds, 2)}`
      
        text(remaining, this.boxX + 50, this.boxY + 35);
    }

    elapsed() {
        if (this.a <= 0) {
            return true;
        } else {
            return false;
        }
    }
}