var mets=0
var lego=255

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
 
}

//The draw function happens over and over again
function draw() {
  background(168,0,186); //an RGB color for the canvas' background
  //circle
  stroke(255,119,0) // an RGB color for the circle's border
  fill(255,40,0,); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  
  ellipse(250,250,200,225,mouseX); // center of canvas, 20px dia
  strokeWeight(5);
  line(500,250,mouseX,mouseY);
  
  rect(125,125,mets,mets);

  
}

function mousePressed(){

  if (mets>=255){
    mets=0;
  } else {
    mets=mets+5;
  }
 
 if (lego<=0){
  lego=255;
 }else{
  lego=lego-5;
 }
}

 