function setup() {
  // put setup code here
  createCanvas(600, 400);
  background(155,0,105);
}

function draw() {
  //ground
  fill(180,0,180);
  rect(0,225,599,274);
  fill(210,0,210);
  rect(0,300,599,99);  
  fill(250,200,0);
  ellipse(150,350,80,80);
  fill(255);
  rect(0,350,599,49);

  //torso stuff (buttons + arms)
  fill(100,80,0);
  rect(195,175,80,10);

  //circles
  fill(255);
  ellipse(300,290,150,140);
  ellipse(300,200,105,100);
  ellipse(300,130,70,70);
  fill(0);
  ellipse(295,180,8,8 );
  ellipse(295,200,8,8);
  ellipse(295,220,8,8);
  fill(100,80,0);
  rect(335,175,80,10);

  //hat
  fill(50);
  rect(275,30,50,50);
  ellipse(300,30,50,5);
  rect(250,80,100,16);


  //facial features
  ellipse(288,112,8,8);
  ellipse(312,112,8,8);
  fill(250,150,0);
  triangle(302,125,302,135,280,130);

  //SNOW
  fill(255);
  ellipse(520,250,10,10);
  ellipse(68,16,10,10);
  ellipse(102,26,10,10);
  ellipse(163,243,10,10);
  ellipse(39,209,10,10);
  ellipse(350,20,10,10);
  ellipse(209,16,10,10);
  ellipse(169,196,10,10);
  ellipse(144,144,10,10);
  ellipse(400,150,10,10);
  ellipse(410,165,10,10);
  ellipse(500,120,10,10);
  ellipse(365,24,10,10);

  
}