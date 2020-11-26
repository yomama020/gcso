var car,wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

speed=random(55,90)
weight=ramdom(400,1500)
car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);  
  drawSprites();

  car.velocityX=speed;

 if(deformation>180){
car.shapeColor="red"

 }
 else
 if(deformation < 180 && deformation > 100){
  car.shapeColor="yellow"
  
   }
   else
 if(deformation<100){
  car.shapeColor="green"
  
   }

}