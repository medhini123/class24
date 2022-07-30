//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var engine, world;
var ball, ground;

var button;
var fan1;

var angle = 40;

var groundOptions = {
  isStatic: true,
};

var ballOPtions = {
  restitution: 1,
  frictionAir: 0,
};

var fan1Options = {
  isStatic: true,
};

function setup() {
  createCanvas(400, 400);
  //create the engine
  engine = Engine.create();
  world = engine.world;
  //Add world to the engine
  ball = Bodies.circle(200, 10, 25, ballOPtions);
  World.add(world, ball);
  //create a ground
  ground = Matter.Bodies.rectangle(200, 380, 400, 30, groundOptions);
  //add to world
  World.add(world, ground);

  fan1 = Matter.Bodies.rectangle(100, 100, 10, 80, fan1Options);
  World.add(world, fan1);

  button = createImg("up.png");
  button.position(300, 50);
  button.size(50, 50);
  button.mouseClicked(Vforce);
}

function draw() {
  background("black");
  Engine.update(engine);
  
  push ()
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25, 25);
  pop ()

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 30);

  

  push();
  translate(fan1.position.x, fan1.position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("orange");
  rect(0, 0, 10, 80);
  angle += 0.1;
  pop();

  //write a rectangle function to display ground.
}

function Vforce() {
  Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.5 });
}
