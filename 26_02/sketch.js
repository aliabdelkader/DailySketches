var x0 = 355;
var y0 = 200;
function setup() {
  // put setup code here
  createCanvas(710, 400);
  background(102);
  frameRate(10);
}

function draw() {
  // put drawing code here
  stroke(random(255), random(255), random(255));
  x1 = random(710);
  y1 = random(400);
  line(x0, y0, x1, y1);
  x0 = x1;
  y0 = y1;
}
