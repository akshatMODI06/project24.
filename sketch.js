
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;
var world;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dusbin(1200,650);
	paperObject=new Paper(200,450,40); 
	groundObject=new Ground(width/2,670,width,20);
	var render = Render.create({
		 element: document.body,
		  engine: engine,
		   options: { 
			width: 1200, 
			height: 700, 
			wireframes: false
			 } 
			});
	//Create the Bodies Here.
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display(); 
  paperObject.display(); 
  groundObject.display(); 
  drawSprites();
 
}



