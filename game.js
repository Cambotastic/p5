var bg;
var bg1;
var img_player;
var img_enemy;
var player_size = 100;
var enemy_size = 100;

var x = 100; // x position for the 1st player
var y = 200; // y position for the 1st player
var x2 = 400; // x position for the 2nd player
var y2 = 400; // y position for the 2nd player

function setup() {
    createCanvas(1000,800);
    //bg = loadImage("./images/eclipse.jpg");
    //bg1 = loadImage("./images/tree.jpg");
    //img_player = loadImage("./images/draven.jpg");
    //img_enemy = loadImage("./images/draven.jpg");
    //background(255);
}

function draw() {
    background(255);
    noStroke();   
    fill (230,220,0);
    textSize(48);
    text("edrik vs \"2icy\": the game", 100, 100)
    // control player movement for the left side

    rect(150,150,50,500);
    rect(500,150,50,500);

    if (keyIsDown(LEFT_ARROW)) {
        // border!
        if (x < 50) {
            x-=0
        // 1st block
        } else if (x == 250) {
            if (y > 100) {
                if (y < 700) {
                    x-=0
                } else {
                    x-=5
                }
            } else {
                x-=5
            }
        // 2nd block
        } else if (x == 600) {
            if (y > 100) {
                if (y < 700){
                    x-=0
                } else {
                    x-=5
                }
            } else {
                x-=5
            }
        //asd
        } else {
            x-=5;
        }
    }
       
        //x-=5; // x = x -5;
    //control play movement for the right side
    if(keyIsDown(RIGHT_ARROW)) { 
        // border!
        if (x > 1000) {
            x+=0
        // 1st block
        } else if (x == 100) {
            if (y > 100) {
                if (y < 700) {
                    x-=0
                } else {
                    x+=5
                }
            } else {
                x+=5
            }
        // 2nd block
        } else if (x == 450) {
            if (y > 100) {
                if (y < 700) {
                    x+=0
                } else {
                    x+=5
                }
            } else {
                x+=5
            }
        //asd
        } else {
            x+=5
        }
    }
    
    //x+=5; //x = x +5;    
    if(keyIsDown(UP_ARROW)) {
        // border !
        if (y < 50) {
            y-=0
        // 1st block
        } else if (y == 700) {
            if (x > 450) {
                if (x < 600) {
                    y-=0
                } else {
                    y-=5
                }
            }
        // 2nd block
            else if (x > 100) {
                if (x < 250) {
                    y-=0
                } else {
         
         
                           ]44           y-=5
                }
            } else {
                y-=5
            }
        } else {
            y-=5;
        }
    }
       // y-=5;
    if(keyIsDown(DOWN_ARROW)) {
        //border
        if (y > 750) {
            y+=0
        // 1st block
        } else if (y == 100) {
            if (x > 450) {
                if (x < 600) {
                    y+=0
                } else {
                    y+=5
                }
            }
        // 2nd block
            else if (x > 100) {
                if (x < 250) {
                    y+=0
                } else {
                    y+=5
                }
            } else {
                y+=5
            }
        } else {
            y+=5;
        }
    }
       // y+=5;
    //this is the player image.
        ellipse(x,y, player_size,player_size);
    //image(img_player,x,y, player_size,player_size);
    // key value: a=65:left, s=83:down, d=68:right, w=87: up
    if(keyIsDown(65))
        if (x2 > 0) {
            x2-=5;
        } else {
            x2 = 0;
        }
    if(keyIsDown(68))
        if (x2 <= width-player_size) {
            x2+=5;
        } else {
            x2 = width-player_size;
        } 
    if(keyIsDown(87))
        if (y2 > 0) {
            y2-=5
        } else {
            y2 = 0;
        } //y2-=5;

    if(keyIsDown(83))
        if (y2 < height-enemy_size) {
            y2+=5;
        } else {
            y2 = height-enemy_size;
        }

    //image(img_enemy,x2,y2, enemy_size,enemy_size);
    //rect(mouseX,mouseY,80,80);
/*
    if(keyPressed(66)) {
        background(bg1);
    } else if(keyPressed(78)){
        background(bg);
    }
    */
}  