const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ball;
var box1,box2;
 

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

  
    rope= new Rope(ball.body,{x:500,y:50})
    ball = new Ball(200,400,50,50)

    box1 = new Box(110,100,25,25)
    box2 = new Box(100,140,25,50)
    ground1 = new Ground(200,600,1600,40)
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ball.display();
    rope.display()
    box1.display();
    box2.display();
    ground1.display();
}