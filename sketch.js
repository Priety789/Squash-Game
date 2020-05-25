var ball, img, paddle;
//added these two variables
var ballimg, paddleimg;

function preload() {
  //added quotations here
  ballimg = loadImage("ball.png");
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg);
  //changed velocity here
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    //changed y+20 to y-20 here
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    //changed paddle.x to paddle.y here
    //changed y-20 to y+20 here
    paddle.y=paddle.y+20;
  }
  
  //added this if statement here
  if(ball.bounceOff(paddle)) {
    randomVelocity();
  }
  
  if(ball.x > 400) {
    gameOver(); 
  }
  drawSprites();
  
}

//changed the function name here
function randomVelocity()
{
  ball.velocityY=random(-8,8);
}

function gameOver() {
  paddle.y = 200;
  ball.x = 60;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}