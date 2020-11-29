const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var chain,ball1,polygon_img;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(3000,1600);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(500,200,20);
  fill("black");
  World.add(world,ball);

  slingshot = new Slingshot (ball,{x:150,y:50});

  ground1 = new Ground(1000+500,1000,500,20);
  ground2 = new Ground(1500+500,600,500,20);

  box1 = new Box ( 820+500+100 , 960 , 70 , 70 );
  box2 = new Box ( 902+500+100 , 960 , 70 , 70 );
  fill(0,0,255);
  box3 = new Box ( 987+500+100 , 960 , 70 , 70 );
  fill(0,0,255);
  box4 = new Box ( 1071+500+100 , 960 , 70 , 70 );
  fill(0,0,255);

  box5 = new Box ( 855+500+100 , 900 , 70 , 70 );
  fill(255,105,180);
  box6 = new Box ( 936+500+100 , 900 , 70 , 70 );
  fill(255,105,180);
  box7 = new Box ( 1006+10+500+100 , 900 , 70 , 70 );
  fill(255,105,180);

  box8 = new Box ( 900+500+100 , 840 , 70 , 70);
  fill(0,255,255);
  box9 = new Box ( 980+500+100 , 840 , 70 , 70 );
  fill(0,255,255);

  box10 = new Box( 935+500+100 , 770 , 70 , 70 );
  fill(0,0,0);

  box11 = new Box( 1365+500 , 560 , 70 , 70 );
  fill(0,0,255);
  box12 = new Box( 1450+500 , 560 , 70 ,70 );
  fill(0,0,255); 
  box13 = new Box( 1450+80+500 , 560 , 70 ,70 );
  fill(0,0,255);

  box14 = new Box( 1397+500 , 490 , 70 , 70 );
  fill(255,105,180);
  box15 = new Box( 1480+500 , 490 , 70 , 70 ); 
  fill(255,105,180);

  box16 = new Box( 1435+500 , 420 , 70 , 70 );
  fill(0,255,255);
  
  Engine.update(engine);
} 

function draw() { 
  background(0,255,0);  
  
  ground1.display();
  ground2.display();

  fill(0,0,255);
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();

  box10.display();

  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();

  box16.display();

  slingshot.display();

  imageMode(CENTER);
  image(polygon_img , ball.position.x , ball.position.y ,40 ,40);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
  slingshot.fly();
}     