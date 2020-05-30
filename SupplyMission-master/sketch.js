var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,world,engine;
var pillar,piller1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	pillar1 = new Ground(350,620,20,100);
	pillar2 = new Ground(450,620,20,100);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("press the down arrow",400,10);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
  pillar1.display();
  pillar2.display();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	text("press the down arrow",200,10);

	Matter.Body.setStatic(packageBody,false);
	helicopterSprite.velocityX = 6;
  }
}



