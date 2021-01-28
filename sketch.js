var database, form;
var code;
var playerCount = 0;

function preload(){
  backgroundImg = loadImage("nahhh.jpg");
}
function setup() {
  createCanvas(800,400);
  database = firebase.database();

  form = new Form();
}

function draw() {
  background("white");
  form.display();  
  drawSprites();
}