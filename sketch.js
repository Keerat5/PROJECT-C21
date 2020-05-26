var bullet,thickness;
var wall,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,25); 
  wall = createSprite(1200,200,thickness,height/2); 
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;

}

function draw() {

  background(0);    


  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color("red");
    }

    if(damage<10){
      wall.shapeColor = color("green");
    }
  }

  fill("red");
  text("Wall Not Effective if Damage > 10",150,240);

  fill("green");
  text("Wall Effective if Damage < 10",150,270);

  fill("blue");
  text("Damage:"+Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness)),850,350);

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  bullet.collide(wall);

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
