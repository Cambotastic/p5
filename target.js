var x;
var y;
var x1;
var y1;
var x2;
var y2;
var xv = 3;
var xv1 = 5;
var yv = 4;
var yv1 = 5;
var d; //distance between centers of two circles
var d1;

function setup() {
    createCanvas(windowWidth - 18, windowHeight - 18);
    x = width/2;
    y = height/3;
    x1 = width/2;
    y1 = height*2/3;
    x2 = width/2;
    y2 = height/2;
}

function draw() {
    background (180,250,170);
//first target
//    line(width/2,0,x,y);

    fill(255);
    ellipse(x,y,150,150);

    fill (0);
    ellipse(x,y,120,120);

    fill (0,180,255);
    ellipse (x,y,90,90);

    fill(225,0,0);
    ellipse (x,y,60,60);

    fill(255,255,0);
    ellipse (x,y,30,30);

//2nd target
//    line (width/2,height,x1,y1);
    
    fill(255);
    ellipse(x1,y1,150,150);

    fill (0);
    ellipse(x1,y1,120,120);

    fill (0,180,255);
    ellipse (x1,y1,90,90);

    fill(225,0,0);
    ellipse (x1,y1,60,60);

    fill(255,255,0);
    ellipse (x1,y1,30,30)

//target move command
    if(x > width-60 || x < 60 || d < 100)
        xv = -xv;
    x += xv;

    if (y > height-60 || y < 60)
        yv = -yv;
    y += yv;
//2nd target command
    if(x1 > width-60 || x1 < 60 || d1 < 100)
        xv1 = -xv1;
    x1 += xv1;

    if (y1 > height - 60 || y < 60)
        yv1 = -yv1
    y1 += yv1;

//player
    if(keyIsDown(RIGHT_ARROW))
        if(x2 < width-25)
            x2 += 7

    if(keyIsDown(LEFT_ARROW))
        if(x2 > 25)
            x2 -= 7

    if(keyIsDown(UP_ARROW))
        if(y2 > 25)
            y2 -= 7

    if(keyIsDown(DOWN_ARROW))
        if(y2 < height-25)
            y2 += 7

//touching target 1
    d = dist(x,y,x2,y2);
    d = int(d);
    if(d < 100) {
        fill(255,0,40);
    } else {
        fill(50,255,50);
    }
    ellipse(x2,y2,50,50);
    
    fill(0);
    textSize(24);
    text("distance:"+d,x2,y2+30);

//touching target 2
    d1 = dist(x1,y1,x2,y2);
    d1 = int(d1);
    if(d1 < 100) {
        fill(255,0,40);
    } else {
        null
    }
    ellipse(x2,y2,50,50);
    
    fill(0);
    textSize(24);
    text("distance:"+d,x2,y2+30);
}