const Engine = Matter.Engine;//namespacing
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
engine=Engine.create();
world=engine.world;





var ball_options={
   restitution:2
}
ball=Bodies.circle(200,50,30,ball_options);

World.add(world,ball);
   console.log(object);
   var grnd_options={
       isStatic:true
   }

   ground=Bodies.rectangle(200,380,400,10,grnd_options)
   World.add(world,ground);

   
}

function draw(){
    Engine.update(engine);
    background(0);
    ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)
}
