
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var rect1, rect2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);

	paper = new Paper(110,100);
	rect1 = new DustbinBody(560,565,20,185);
	rect2 = new DustbinBody(740,565,20,185);
	dustbin1 = new Dustbin(650,650,160,20);
	ground = new Ground(400,670,800,10);

}

function draw() {
	rectMode(CENTER);
	background("lightgrey");
  
	paper.display();
	rect1.display();
	rect2.display();
	ground.display();
	dustbin1.display();

	drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:86,y:-126})
	}
}



