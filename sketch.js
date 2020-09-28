var car;
var hitmarker1;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var car = createSprite(60,50,20,15);

var hitmarker1 = createSprite(1100,50,10,20);

var speed = random(55,90);

var weight = random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  car.velocityX = speed;


if (hitmarker1.x-zenia.x<(zenia.width+WebGLSampler.width)/2){

car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;
if(deformation>180){
    car.shapecolor = (255,0,0);
}
if(deformation<180&&deformation>100){

    car.shapecolor = (230,230,0);
}
if (deformation< 100){

car.shapecolor = (0,225,0);
}

}