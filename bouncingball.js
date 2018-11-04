var x;
var y;
var x1;
var y1;
var x2;
var y2;
var x3;
var y3;
var x4;
var y4;
var x5;
var y5;
var x6;
var y6;
var xv = 5;
var xv2 = 10;
var xv3 = 15;
var xv4 = 20;
var xv5 = 25;
var xv6 = 30;


function setup() {
    createCanvas(windowWidth-20,windowHeight-20);
    x = width/2;
    y = height/2;
    x1 = width/2;
    y1 = height/2 - 300;
    x2 = width/2;
    y2 = height/2 - 200;
    x3 = width/2;
    y3 = height/2 - 100;
    x4 = width/2;
    y4 = height/2;
    x5 = width/2;
    y5 = height/2 + 100;
    x6 = width/2;
    y6 = height/2 + 200;
}

function draw() {
    background(180,50,100)
    if(keyIsDown(RIGHT_ARROW)) 
        if (x < width-50)
            x += 20;

    if(keyIsDown(LEFT_ARROW))
        if (x > 50)
            x -= 20;

    if(keyIsDown(UP_ARROW))
        if (y > 50)
            y -= 20;

    if(keyIsDown(DOWN_ARROW))
        if (y < height-50)
            y += 20;

    fill(100,100,250);
    ellipse(x,y,100,100);

    if(x1 > width-25 || x1 < 25)
        xv = -xv

    x1 += xv
    fill(100,25,200);
    ellipse(x1,y1,50,50);
    
    

    if(x2 > width-25 || x2 < 25)
        xv2 = -xv2

    x2 += xv2
    fill(100,25,200);
    ellipse(x2,y2,50,50);

    

    if(x3 > width-25 || x3 < 25)
        xv3 = -xv3

    x3 += xv3
    fill(100,25,200);
    ellipse(x3,y3,50,50);



    if(x4 > width-25 || x4 < 25)
        xv4 = -xv4

    x4 += xv4
    fill(100,25,200);
    ellipse(x4,y4,50,50);



    if(x5 > width-25 || x5 < 25)
        xv5 = -xv5

    x5 += xv5
    fill(100,25,200);
    ellipse(x5,y5,50,50);



    if(x6 > width-25 || x6 < 25)
        xv6 = -xv6

    x6 += xv6
    fill(100,25,200);
    ellipse(x6,y6,50,50);
}