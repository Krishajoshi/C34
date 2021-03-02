const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope


function setup()
{
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;   
    ground = new Ground(600, 600, 1200, 20);


    box1 = new Box(900, 100, 70, 70);
    box2 = new Box(900, 100, 70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(900, 100, 70, 70);
    box5 = new Box(900, 100, 70, 70);
    box6 = new Box(900, 100, 70, 70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700, 100, 70, 70);
    box14 = new Box(700, 100, 70, 70);
    box15 = new Box(700, 100, 70, 70);
    box16 = new Box(700, 100, 70, 70);
    box17 = new Box(700, 100, 70, 70);
    box18 = new Box(700, 100, 70, 70);
    box19 = new Box(700, 100, 70, 70);
    box20 = new Box(700, 100, 70, 70);

    ball = new Ball(200,200,80,80);

    var point_B={
        x:100,
        y:200,
    }    
    rope = new SlingShot(ball.body,point_B);

}

function draw(){
  background(180);
  Engine.update(engine);
  ground.display(); 
  box1.display("red");
  box2.display("orange");
  box3.display("yellow");
  box4.display("Green")
  box5.display("Blue")
  box6.display("Indigo")
  box7.display("Purple")
  box8.display("Pink")
  box9.display("Brown")
  box10.display("Black")
  box11.display("white")
  box12.display("Salmon")
  box13.display("Coral")
  box14.display("CornflowerBlue")
  box15.display("lightRed")
  box16.display("DarkOrchid")
  box17.display("Crimson")
  box18.display("Turquoise")
  box19.display("lightBlue")
  box20.display("cyan")

  ball.display();
  rope.display();

}   

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }

  