const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ball, ground
function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

var groundprop = {
  isStatic : true 
}

ground = Bodies.rectangle(200,390,400,20,groundprop)

World.add(world,ground)

var ballprop = {
  restitution : 1.0, 
  frictionAir : 0.01
}

ball = Bodies.circle(200,100,20,ballprop)

World.add(world,ball)
}

function draw() {
background("black");  
Engine.update(engine);


rectMode(CENTER)
ellipseMode(RADIUS)
rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,20)

}