
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(150,150,60);

	ground= new ground(400,680,800,20);

	leftSide= new dustbin(550,620,20,100)
	bootom= new dustbin(610,660,100,20)
	rightSide= new dustbin(670,620,20,100)

    launcherp=new launcher(paper1.body,{x:150, y:10})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  Engine.update(engine)

  paper1.display();

  ground.display();

  leftSide.display();
  bootom.display();
  rightSide.display();

  launcherp.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly();
}


