let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);




 
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);


  //fall down

  drawSprites();
}


