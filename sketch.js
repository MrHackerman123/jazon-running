var path, pathImg;
var boy, boyAnimation;

var edges;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyAnimation = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale= 1.2;

  boy = createSprite(200,350)
  boy.addAnimation("running",boyAnimation)
  boy.scale = 0.075
 
  
}

function draw() {
  background(0);

  edges = createEdgeSprites()
  boy.bounceOff(edges)

  boy.x = World.mouseX

  if(path.y > 400){
    path.y = height/2
  }

drawSprites()
}
