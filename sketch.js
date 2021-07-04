var sea, seaImg;
var ship, shipImg;
function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.2;
  ship = createSprite(100,200,50,50);
  ship.addAnimation("moving",shipImg);
  ship.scale = 0.3
}

function draw() {

  if (sea.x < 0) {
    sea.addImage(seaImg);
    sea.x = sea.width/2;
  }
  background("blue");
  drawSprites();
}