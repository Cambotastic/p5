var x;
var y = 0;
var sx;
var carx = 50;
var cary = 100;
var carSize = 100;
var sensorSize = 50;
var sensorSize2 = 200;
var wallLanes = [1,2];
var carLanes = [1,2];
//sc = sensor color
var sc1 = 100;
var sc2 = 100;
var sc3 = 100;

function setup() {
    createCanvas (windowWidth-18, 600);
    wallLane = random(wallLanes);
    carLane = 1;
    
}
function draw() {
    background(155,120,50);
    line(0, 300, windowWidth-18, 300)

//car
    fill(155,220,200);
    rect(carx,cary,carSize,sensorSize);
//side sensors
    fill(100,100,100)
    rect(carx + 50,cary - 50,sensorSize,sensorSize);
    rect(carx + 50,cary + 50,sensorSize,sensorSize);
//sensor
     var temp_text = "carLane: " + carLane + "wallLane: " + wallLane + "cary: " + cary + "wally: " + y;
     text (temp_text, 50,50);
    if(carx + carSize + sensorSize2 > x){
        if(carLane == 1 && wallLane == 1){
            if(cary < 400) {
                if(cary == y + 100){
                    sc1 = 255;
                    sc2 = 0;
                    sc3 = 0
                } else if(cary = 400) {
                    sc1 = 100;
                    sc2 = 100;
                    sc3 = 100;
                }
                cary += 5;
                //carLane = 2;
            } 
            if (cary > 400) {
                carLane = 2;
            }
        } else if(carLane == 2 && wallLane ==2){
            if(cary > 400) {
                if(cary == y + 100){
                    sc1 = 255;
                    sc2 = 0;
                    sc3 = 0
                } else if(cary = 400) {
                    sc1 = 100;
                    sc2 = 100;
                    sc3 = 100;
                }
                cary -= 5;
            }
           
            if(cary < 200 ){
                carLane = 1;
            }
        }

        /*if(cary < 400){
            if(cary == y + 100) {
               fill(255,0,0);
               cary = cary + 10
            }
        } if(cary == 400) {
            cary = cary
        } */
    }   
    
    fill (sc1,sc2,sc3);
    rect(carx + carSize,cary,sensorSize2,sensorSize);

//wall lane change
    if(wallLane == 1)
        y = 0;
    if(wallLane == 2) 
        y = 300;

//actual wall
    fill(220,200,155);
    rect(x,y,50,250);
    if(x>0)
        x -= 10
    else {
        x = windowWidth-40;
        wallLane = random(wallLanes);
    }
    


        sx = 150
       // carx = 50
}

//issues: red only flashes, car moves regardless of wally, car doesn't move back in lane 2