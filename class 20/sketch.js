var mrect, frect;

function setup() {
  createCanvas(800,400);

  mrect = createSprite(400, 200, 80, 30);
  mrect.shapeColor ="green";

  frect = createSprite(200,200,50,50);
  frect.shapeColor ="green";
}

function draw() {
  background(255,255,255); 
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  if(mrect.x-frect.x < frect.width/2 + mrect.width/2 && frect.x - mrect.x < frect.width/2 + mrect.width/2&&
    mrect.y-frect.y < frect.height/2 + mrect.height/2 && frect.y - mrect.y < frect.height/2 + mrect.height/2 ){

    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  }
  else{

    mrect.shapeColor = "green";
    frect.shapeColor = "green";
  }

  drawSprites();
}