
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, rect1, rect2, rect3, ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 400);


	engine = Engine.create();
  world = engine.world;
  
  
 

	//Create the Bodies Here.
    ground = new Ground(width/2, 350, 1500, 10);
    rect1 = new Rects(1250, 335,200,20);
    rect2 = new Rects(1145,295,20,100);
    rect3 = new Rects(1355,295,20,100)
    ball = new Ball(30,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();
  drawSprites();
 
  
 
 
}



