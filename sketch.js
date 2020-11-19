
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin1
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,40);
	bin1 = new Dustbin(800,485);
	ground1 = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  bin1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})

	}


}



