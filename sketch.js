const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particle;
var plinkos = [];
var divisions = [];


var divisionHeight=200;
var score = 0;
var ground;
var count = 0;

var shooter;
var sling;



var gameState="ready";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  particle1 = new Particle(300,50,20);
  particle2 = new Particle(340,50,20);

  shooter = new Shooter(400,200,45);
  sling = new Sling(shooter.body,{x:400,y:200});
  

      for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
   

    

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
  text("500", 13, 634);
  text("500", 98, 634);
  text("500", 176,634);
  text("500", 257,634);
  text("100", 337,634);
  text("100", 415,634);
  text("100", 495,634);
  text("200", 573,634);
  text("200", 653,634);
  text("200", 732,634);

  particle1.display();
  particle2.display();

  shooter.display();

  sling.display();




  
 
  
 

 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   ground.display();





   
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
    gameState = "ready";
}
