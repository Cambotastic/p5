var bg;

function setup()    {
    createCanvas(1200,1600);
    bg = loadImage("/images/scream.jpg");
}
function draw() {
    background(bg);
    if (mouseIsPressed) {
        fill (100,40,80);
        ellipse(mouseX, mouseY, 50, 50);
    }
    stroke(226, 204, 0);
    line(0, mouseY, width, mouseY); //draw the line to cross X
    line(mouseX,0, mouseX, height); //draw the line to cross Y    
 //line(0,0,width, 100);
 //line(0,0,100, height);
}