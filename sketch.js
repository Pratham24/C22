const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world,ground,ball

function setup() {
  createCanvas(800,600);
  engine=Engine.create()
  world=engine.world

  var groundoptions={
    isStatic:true
  }
  ground=Bodies.rectangle(400,580,800,20,groundoptions)
  World.add(world,ground)
  console.log(ground.position.x)
  console.log(ground.position.y)
  
 var balloptions={
    restitution:1.0
 }

  ball=Bodies.circle(200,200,20,balloptions)
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}