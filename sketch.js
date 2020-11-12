const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
   b1= new box(900,100,70,70)
   b2= new box(900,100,70,70)
   b3= new box(900,100,70,70)
    b4= new box(900,100,70,70)
    b5= new box(900,100,70,70)
    b6= new box(900,100,70,70)

    b7= new box(800,100,70,70)
   b8= new box(800,100,70,70)
   b9= new box(800,100,70,70)
    b10= new box(800,100,70,70)
    b11= new box(800,100,70,70)
    b12= new box(800,100,70,70)

    b13= new box(700,100,70,70)
    b14= new box(700,100,70,70)
    b15= new box(700,100,70,70)
     b16= new box(700,100,70,70)
     b17= new box(700,100,70,70)
     b18= new box(700,100,70,70)
     b19= new box(700,100,70,70)
     b20= new box(700,100,70,70)
     ball1=new ball(100,100,80,80)
     rope1=new rope(ball1.body,{x:550,y:50})
     
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
 ground.display()
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()
 b8.display()
 b9.display()
 b10.display()
 b11.display()
 b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()
  ball1.display()
  rope1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
