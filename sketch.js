const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

var boy
var snowman
var sling
var snowball
var ground
var gift
var score

function preload(){
backgroundImg=loadImage("snow1.jpg")

boy=loadImage("boy.png")



}

function setup() {
  createCanvas(1365,625);
  engine = Engine.create();
    world = engine.world;
    
score=0
   
    snowman=new Snowman(1200,10,120,120)
    snowball=new Snowball(400,330,50,50)
    sling=new Sling(snowball.body,{x:400, y:330})
    ground=new Ground(670,620,1400,30)


}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
 
  image(boy ,360,260,200,280);

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
 
 
 
  snowman.display()
  sling.display()
  snowball.display()
  ground.display()
  
 
  
  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX, y:mouseY})
 
  }

  function mouseReleased(){
    sling.fly()
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(snowball.body,{x:400, y:330})
    sling.attach(snowball.body)
    }
  }

  

 

  

 