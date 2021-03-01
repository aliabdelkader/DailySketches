//taken from https://p5js.org/examples/drawing-patterns.html

// display
let dispWidth = 710
let disHeight = 400

let x = 0;
let y = 0;
let px = 0;
let py = 0;
function setup() {
  // put setup code here
  createCanvas(dispWidth, disHeight);
  fill(0);
  frameRate(30);

}

function draw() {
  // put drawing code here
  x = x + random(10);
  y = y + random(10);
  let speed = (x - px) + (y - py);
  if (x >= dispWidth){
    x  = random(dispWidth);
    speed= 1;
  }
  if (y >= disHeight){
    y = random(disHeight);
    speed=1;
  }
  fill(speed, speed, speed);

  ellipse(x, y, speed, speed);
  px = x;
  py = y;
}
