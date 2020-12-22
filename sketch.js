var car,wall;
var speed,weight;
var deformation;

function setup() {
createCanvas(1600,400);

speed = random(10,20);
weight = random(400,1500);

car = createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor = "white";

wall = createSprite(1500,200,60,200);
wall.shapeColor = "grey";
 
}

function draw() {
  background("black");  

  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    car.velocityX  = 0;
    deformation = 0.5 * weight * speed * speed/ 22500;
  
    if(deformation < 180)
    {
      car.shapeColor = "red";  
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";  
    }

    if(deformation < 100)
    {
      car.shapeColor = "green";  
    }
  }
  drawSprites();
}