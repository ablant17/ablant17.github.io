let symmetry = 8;
let angle = 360 / symmetry;

function setup() {
  createCanvas(720, 400);
  angleMode(DEGREES);
  background(30);

  let resetButton = document.getElementById('reset-btn');
  resetButton.addEventListener('click', resetCanvas);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(random(100, 255), random(100, 255), random(100, 255));
        strokeWeight(2);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}

function resetCanvas() {
  background(30); 
}

