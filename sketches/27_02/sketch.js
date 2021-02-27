
// display
let dispWidth = 710
let disHeight = 400

// Position
let x = dispWidth / 2;
let y = disHeight / 2;

// velocity directi0n;
let vxsign = 1;
let vysign = 1

var ball_color = random(255);

function setup() {
  // put setup code here
  createCanvas(dispWidth, disHeight);
  fill(0);
  frameRate(30);

}

function draw() {
  // put drawing code here

  vx = random(10);
  vy = random(10);
  if ( (x+vx) >= dispWidth){
    vxsign  = -1
    ball_color =  random(255);
  }
  if((x+vx) < 0){
    vxsign = 1;
    ball_color =  random(255);

  }
  if ( (y+vy) >= disHeight){
    vysign = -1;
    ball_color =  random(255);

  }
  if ( (y+vy) < 0){
    vysign = 1;
    ball_color =  random(255);

  }
  x = x + vxsign * vx;
  y = y + vysign * vy;
  ellipse (x, y, 30, 30);
  fill(0, 0, ball_color);

}
