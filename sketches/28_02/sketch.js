
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
  ellipse(mouseX, mouseY, 60, 60)
  fill(0, 0, ball_color);
  if (mouseIsPressed) {
    ball_color = random(255);
 }

}
