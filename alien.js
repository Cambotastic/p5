function Alien() {
    this.x = 100;
    this.y = 100;
    this.r = 50; // radius
    this.direction = 1;
    this.show = function () {
        fill(255,50,50);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }
    /* --
    this.move = function (dir) {
        if (this.y < height ) {
            this.x += 15;
        } else {
            this.x = 200000;
        }
        if (this.x > 900 || this.x < 10) {
            direction = direction*-1;
            this.y += 30;
        }
    }
    -- */
}