var bullet 
var wall
var thickness 

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 80, 20);
 bullet.shapeColor = "white"
 thickness = random(22,83)
 wall = createSprite(1350,200,thickness,200)
 wall.shapeColor = (80,80,80)
 speed = random(223,321)
 weight = random(30,52)
 bullet.velocityX = speed;
}






function draw() {
  background(0);
    
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
   deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if(deformation>10){
  wall.shapeColor = "red"
}

if(deformation<10){
  wall.shapeColor = "green"
  
}
}
drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x 
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}