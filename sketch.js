var ground ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(400,695,800,15,options);
	World.add(world,ground);
	
	//Create the Bodies Here.
	paper = new Paper(100,200,40);
	box1 = new Box();
	box2 = new Box();
	box3 = new Box();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  fill("Yellow");
  rect(ground.position.x,ground.position.y,800,15);
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:56,y:-56})
	}
}

