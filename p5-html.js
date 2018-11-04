var nameP;
var slider;
var button;
var button1;
var bgcolor;
var x,y,inputValue;

function setup() {
    createCanvas (windowWidth - 18,300);
    nameP = createP("Curling Game");
    slider = createSlider (50,200,150);
    button = createButton("go curling");
    button.mousePressed(updateText);
    bgcolor = color(150)
    //button 2
    button1 = createButton("stop curling");
    button1.mousePressed(moveBall);
    x = width/2;
    y = height/2;
    inputValue = createInput("enter your name")
}
function draw() {
    background(bgcolor);
    fill(255,0,0);
    ellipse(x,y,slider.value(),slider.value());
    text(inputValue.value(),100,100);
}
function updateText() {
    bgcolor = color(random(255));
}
function moveBall() {
    x += 10;
}
function mousePressed() {
    nameP.html("i love curling game");
}