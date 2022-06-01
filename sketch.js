
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg
var bottomGround, topGround
var balloon, balloonImg
var obstacleTop, obstacleTopImg
var obstacleBottom, obstacleBottom1, obstacleBottom2
var backgroundImg

function preload()
{
	bgImg = loadImage("assets/bg.png")
  bgImg2 = loadImage("assets/bgImg2.jpg")

  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
  
  obsTop1 = loadImage("assets/obsTop1.png")
  obsTop2 = loadImage("assets/obsTop2.png")
  
  obsBottom1 = loadImage("assets/obsBottom1.png")
  obsBottom2 = loadImage("assets/obsBottom2.png")
  obsBottom3 = loadImage("assets/obsBottom3.png")
  
  gameOverImg= loadImage("assets/gameOver.png")
  restartImg = loadImage("assets/restart.png")

	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  //background image
	  bg = createSprite(165,485,1,1);
	  bg.addImage(bgImg);
	  bg.scale=1.5
	  
	  
	  
	  
	  //creating top and bottom grounds
	  bottomGround = createSprite(200,390,800,20);
	  bottomGround.visible = false;
	  
	  topGround = createSprite(200,10,800,20);
	  topGround.visible = false;
			
	  //creating balloon     
	  balloon = createSprite(100,200,20,50);
	  balloon.addAnimation("balloon",balloonImg);
	  balloon.scale = 0.2;
	  balloon.debug = true;


	  obstacleBottom = createSprite(300,350,40,40);
      obstacleBottom.addImage(obsBottom1);
	  obstacleBottom.scale=0.07

	  obstacleTop = createSprite(300,50,40,50);
	  obstacleTop.addImage(obsTop1);
	  obstacleTop.scale = 0.1;
	  
	  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


