const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var ground;
var box1;
var box2;
var box3;
function setup() {
  createCanvas(800,400);
myEngine = Engine.create();
myWorld =myEngine.world

ground = new Ground(400,380,800,20);
World.add(myWorld,ground)
box1=new Box(200,300,50,50);
//box2=new Box(240,100,50,100);
box3= new Box(230,100,60,80)


}

function draw() {
  background(0); 
  Engine.update(myEngine);

ground.display();
 box1.display();
// box2.display();
 box3.display();
}