
var x = 150;
var y = 150;
var r = 140;
var s = 140;
var j = 230;
var k = 30;

function setup() {
  var myCanvas = createCanvas(1100, 250);
  frameRate (8);
  noStroke();
  background('#E1E5F2');
  myCanvas.parent(mySketch);
}

function draw() {
    if(mouseIsPressed){
        x = random(100,1100);
        y = random(100,250);
        fill (random(255), random(255), random(255));
        ellipse(x,y,100,100); 
    }
}