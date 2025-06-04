import p5 from 'p5';

const p = new p5((sketch: p5) => {
  sketch.setup = setup;
  sketch.draw = draw;
  sketch.keyPressed = keyPressed;
});

function setup() {
  p.createCanvas(800, 400);
}

function draw() {
  p.background('white');
}

function keyPressed() {
}
