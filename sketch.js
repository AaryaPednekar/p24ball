
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var dustbin, ground, paper;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;


	dustbin1  = new  Dustbin(1000,380,200,15)
	dustbin2  = new  Dustbin(900,347,15,80)
	dustbin3  = new  Dustbin(1100,347,15,80)
	paper = new Paper(100,100,30)
	ground = new Ground(100,390,2200,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
	}
}


