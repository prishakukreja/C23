const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myengine,myworld;
var ground;
var ball;
var box1 , box2 


function setup() {
  createCanvas(400,400);

  myengine= Engine.create();
  myworld=myengine.world;

ground= new Ground (200,380,400,50)

/*var balloptions={
  restitution: 1 


}

ball=Bodies.circle(100,100,20,balloptions)
World . add(myworld,ball)
console.log(object);*/
box1= new Box(200,300,50,50);
box2= new Box(230,100,50,100)

 
}

function draw() {
  background(0);  
  Engine.update (myengine);
  rectMode (CENTER);

//rect(object .position .x,object .position .y,400,50)
/*ellipseMode(RADIUS) 

ellipse (ball.position.x,ball.position.y,20,20)*/
box1.display();
box2.display();
ground.display();
}  