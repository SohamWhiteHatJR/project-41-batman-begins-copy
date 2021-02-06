const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var thunder, thunderImg1,thunderImg2,thunderImg3,thunderImg4; 
var rand;
var maxDrops = 100;
var arrDrop = [];

function preload(){
    thunderImg1 = loadImage("images/1.png");
    thunderImg2 = loadImage("images/2.png");
    thunderImg3 = loadImage("images/3.png");
    thunderImg4 = loadImage("images/4.png");
}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
    world = engine.world;

   man = new Umbrella(250,290,50);

   for(var i = 0;i<maxDrops;i++){
       arrDrop.push(new Drop(random(0,400),random(0,400),10));
   }
    
}

function draw(){
    background("black");
    Engine.update(engine);
    man.display();

    for(var i = 0; i < maxDrops; i++){
        arrDrop[i].display();
        arrDrop[i].dropUpdate();
      }
       lightning();
}   

function lightning(){
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        //thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
         switch(rand){
            case 1: thunder.addImage(thunderImg1);
               break;
            case 2: thunder.addImage(thunderImg2);
               break; 
            case 3: thunder.addImage(thunderImg3);
               break;
            case 4: thunder.addImage(thunderImg4);
               break;
            default:
               break; 
            }
        thunder.scale = random(0.3,0.6) }

console.log(frameCount)
}
