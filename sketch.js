const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowBG;
var snowMan,snowmanImg;
var snow;
var SNOWMAN,SNOWMAMimg;

var background;
var snow = [];

function preload() {
  snowBG=loadImage("snow-backgroundIMG.jpg");
  snowmanImg=loadAnimation("sc1.png","sc2.png","sc3.png","sc4.png","sc5.png","sc6.png","sc7.png","sc8.png","sc9.png","sc10.png","sc11.png","sc12.png");
  SNOWMAMimg=loadAnimation("snowMan1","snowMan2","snowMan3","snowMan4","snowMan5","snowMan6");
}



function setup() {
  createCanvas(1000,900);

  engine = Engine.create();
  world = engine.world;

  //create snowMan
  snowMan=createSprite(900, 800, 50, 50);
  snowMan.addAnimation("walking",snowmanImg);
  snowMan.scale=0.5;

  SNOWMAN=createSprite(400, 500 , 50 ,50);
  SNOWMAN.addAnimation("standing",SNOWMAMimg);
  
}

function draw() {
  
  Engine.update(engine);

  background = createSprite(500,450,1000,900);
  background.addImage("background",snowBG);
  background.scale=5.5;
  background.x=background.height/2;
  background.x= -10;
 

  snowMan.display();

  //create snow
  if(frameCount%60===0) 
   {
    snow.push(new Snow(random(width/2-10, width/2+10),20,20));
  }
  
  //display the snow
  for(var s = 0; s < snow.lenght; s++){
    snow[s].display();
  }

  drawSprites();
}