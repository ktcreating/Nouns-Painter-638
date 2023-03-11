let colour, rb;

function preload() {
  colour = loadImage("noun638.png");
  rb = loadImage("noun638rb.png");
}
function setup() {
let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  noCursor();
  cursor("glasscur.png", 30, -10);
  image(colour, 0, 0);
  image(rb, 0, 0);
}
function mouseDragged() {
  copy(colour, mouseX, mouseY, 50, 30, mouseX, mouseY, 50, 30);
}
