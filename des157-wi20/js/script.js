function setup() {
  var myCanvas = createCanvas(1150, 250);
  frameRate (8);
  noStroke();
  background('#E1E5F2');
  myCanvas.parent(mySketch);
}

function draw() {
    if(mouseIsPressed){
        fill (random(255), random(255), random(255));
        
    } else {
        fill (random(255), random(255), random(255),random(255));
    }
    ellipse (mouseX,mouseY,random(100),random(100));
}