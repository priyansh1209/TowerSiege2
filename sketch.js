const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var ground1,groundMain
var stone
var sling
var gameState = play
function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Blocks(300,200)
    block2 = new Blocks(300,220)
    block3 = new Blocks(270,220)
    block4 = new Blocks(330,220)
    block5 = new Blocks(240,220)
    block6 = new Blocks(360,220)
    block7 = new Blocks(270,200)
    block8 = new Blocks(330,200)
    block9 = new Blocks(300,170)
    ground1 = new Ground(300,240,200,10)
    groundMain = new Ground(300,384,600,30)
    stone = new Stone()
    sling = new Sling(stone.body,{x:90, y:150});
}

function draw(){
background(125,80,200)
 fill("cyan")
text("Drag the hexagonal stone and release it, to launch it towards the blocks and press 'r' to reload",50,50)

Engine.update(engine);
    block1.display("blue")
    block2.display("green")
    block3.display("green")
    block4.display("green")
    block5.display("green")
    block6.display("green")
    block7.display("blue")
    block8.display("blue")
    block9.display("purple")
    ground1.display()
    groundMain.display()
    stone.display()
    sling.display()

}



function mouseDragged(){
    if(gameState !== "offSling"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "offSling"
}

function keyPressed(){
if(keyCode === 114 || keyCode === 82){
    sling.reattach(stone.body)
    gameState = "onSlingshot"
    Matter.Body.setPosition(stone.body, {x: 90 , y: 150});

}
}