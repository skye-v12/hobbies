var words=["movies","food","music","photography","travelling"]
var index=0;

function setup() {
  createCanvas(300,300);
}

function draw() {
  background(200,155);
  
  fill(100,0,15);
  textSize(42);
  textStyle(BOLD);
  textFont('Courier New');
  text(words[index],10,50);
}
function mousePressed(){
  index=index+1;
  if (index == words.length) {
   index=0;
 
  }
  
}