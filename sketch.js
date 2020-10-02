const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Polygon = Matter.Polygon;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var ball;
var box1,box2,box3,box4,box5,box6,box7,ground2;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20
var box21,box22,box23,box24,box25,box26
var slingshot
function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
//Level2
  ground1 = new Ground(800,400,300,20);
  ball= new Ball(400,200,20,20)
  box1= new Box(700,320,30,30);
  box2= new Box(920,320,30,30);
  box3= new Box(810,350,30,30);
  box4= new Box(810, 260, 30, 30 );
  box5= new Box(700,240,30,30);
  box6= new Box(920,240,30,30);
  box7= new Box(810, 220, 30, 30);
  box8= new Box(810, 180, 30, 30 );
  box9= new Box(810,160,30,30);
  box10= new Box(760, 120, 30, 30 );
  box11= new Box(870, 120, 30, 30 );
  box12= new Box(700, 100,30,30)
  box13= new Box(920,240,30,30)
  //Level1
  ground2 = new Ground(400,600,300,20)
  box14 = new Box(350,550,30,30)
  box15 = new Box(450,200,30,30)
  box16 = new Box(400,375,30,30)
  box17 = new Box(400,375,30,30)
  box18 = new Box(400,375,30,30)
  box19 = new Box(400,375,30,30)
  box20 = new Box(400,375,30,30)
  box21 = new Box(500,100,30,30)
  box22 = new Box(500,100,30,30)
  box23 = new Box(500,100,30,30)
  box24 = new Box(300,500,30,30)
  box25 = new Box(300,280,30,30)
  box26 = new Box(300,280,30,30)
  slingshot = new SlingShot(ball.body,{x:200, y:50});

}

function draw() {
  background(0);  
  Engine.update(engine); 
  ball.display()
  fill("orange")
  box1.display();
  fill("yellow")
  box2.display();
  fill("blue")
  box3.display();
  fill("red")
  box4.display();
  fill("teal")
  box5.display()
  fill("yellow")
  box6.display()
  fill("blue")
  box7.display()
  fill("red")
  box8.display()
  fill("pink")
  box9.display()
  fill("orange")
  box10.display()
  fill("green")
  box11.display()
  fill("blue")
  box12.display()
  fill("green")
  box13.display()
  fill("blue")
  ground1.display();
  fill("yellow")
  ground2.display()
  fill("red")
  box14.display()
  fill("pink")
  box15.display()
  fill("orange")
  box17.display()
  fill("blue")
  box19.display()
  fill("pink")
  box20.display()
  fill("red")
  box16.display()
  fill("yellow")
  box17.display()
  fill("blue")
  box18.display()
  fill("red")
  box21.display()
  fill("teal")
  box22.display()
  fill("red")
  box23.display()
  fill("blue")
  box24.display()
  fill("pink")
 box25.display()
 fill("teal")
  box26.display()
  slingshot.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}