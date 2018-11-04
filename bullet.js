function Bullet(x,y) {
    this.x = x;
    this.y = y;
    this.r = 10;

    this.show = function () {
        fill(255,50,50);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    this.move = function () {
        this.y -= 15;
    }
    this.destroy = function () {
        this.toDelete = true
    }
    this.hit = function(alien) {
        
    }

}