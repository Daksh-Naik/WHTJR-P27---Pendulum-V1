//WHTJR - Class Project 27 - Pendulum V1 
//At September 5 2020

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var testBob;
var chain1;

function preload(){
	
}

function setup() {
	createCanvas(1350, 600);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, 150, 600, 50);
	ground1 = new Roof(width/2, 580, 1350, 35);

	Bob1 = new PendulumBob(515, 400, 40);
	Bob2 = new PendulumBob(595, 400, 40);
	Bob3 = new PendulumBob(675, 400, 40);
	Bob4 = new PendulumBob(755, 400, 40);
	Bob5 = new PendulumBob(835, 400, 40);

	rope1 = new Thread(Bob1.body, {x: 515, y:150});
	rope2 = new Thread(Bob2.body, {x: 595, y:150});
	rope3 = new Thread(Bob3.body, {x: 675, y:150});
	rope4 = new Thread(Bob4.body, {x: 755, y:150});
	rope5 = new Thread(Bob5.body, {x: 835, y:150});
	//console.log(rope2);



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(color(125, 255, 0));

  textFont("Verdana");
  fill(0);
  textSize(14);
  text("Press the Up Arrow key to drag and drop.", 30, 40);
  text("Press and hold arrow key a bit longer to drag it more far.", 30, 70);
  text("Press F5 to restart.", 1150, 40);

  Engine.update(engine);
	
  ground1.display();

  Bob1.display();
  Bob2.display();	
  Bob3.display();
  Bob4.display();
  Bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	roof.display();

  drawSprites()

  if (Bob5.body.height < 100) {
	  text("oof", 70, 70)
  }

  if (keyDown("UP_ARROW")) {
	Matter.Body.applyForce(Bob1.body, Bob1.body.position, {x:-50, y:-300});
	
}

}

function keyPressed() {

}



