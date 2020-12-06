
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;
var divisions,plinkos;


function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(225,750,550,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  

for (var k = 0; k <=width;k=k+80){

divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));


}

for (var k = 0; k < divisions.length; k ++){

divisions[k].display();


}


for(var j = 40;j <=width; j = j+50)
{


	plinkos.push(new Plinko(j,75,10));


}

for (var j = 15; j <=width - 10; j = j+50){


plinkos.push(new Plinko(j,175,10));

}

for (var i = 0; i < plinkos.length;j ++){

plinkos[i].display

}





ground.display();

  drawSprites();
 
}



