const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var umbrella;
var drops = [];
var drop;
var engine, world;
var thunder;
var thunder1Image, thunder2Image, thunder3Image, thunder4Image;
var maxDrops = 100;
function preload(){
 thunder1Image = loadImage("1.png");
 thunder2Image = loadImage("2.png");
 thunder3Image = loadImage("3.png");
 thunder4Image = loadImage("4.png");
}

function setup(){
createCanvas(800,800);  
umbrella = new Umbrella(400,250);
//drop = new Drops(200,600);
thunder = createSprite(200,300);
engine = Engine.create();
world = engine.world;
}

function draw(){
background("black");
Engine.update(engine);
for(var i = 0; i<maxDrops; i++){
    drops.push(new Drops(random(0,800), random (0,200)));
}
createThunder();
umbrella.display();
for(var i = 0; i<drops.length; i ++){
    drops[i].display();
    drops[i].update();
}
drawSprites();
}  
function createThunder(){
    if(frameCount % 10 === 0){
    var choose = Math.round(random(1,4));
    switch(choose){
        case 1: thunder.addImage(thunder1Image);
        break;
        case 2: thunder.addImage(thunder2Image);
        break;
        case 3: thunder.addImage(thunder3Image);
        break;
        case 4: thunder.addImage(thunder4Image);
        break;
    }
}
} 

