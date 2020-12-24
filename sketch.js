const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var options={
  isStatic:true
}

ground=Bodies.rectangle(200,350,200,20,options);
World.add(world,ground);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER) 
rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}