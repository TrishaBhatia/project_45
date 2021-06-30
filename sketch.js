var bg1,bg2;
var logo,hunt;
var stone;
var man,player;
var pp,paper,p1;
var mon,bricks,life,lives;
gameState=0;
function preload()
{
	bg2=loadImage("bg2.jpg");
	bg1=loadImage("bg1.jpg");
	logo=loadImage("logo.png");
  man=loadImage("player.png");
  pp=loadImage("paper.png");
  p1=loadImage("power1.png");
  mon=loadImage("ob1.png");
  life=loadImage("life.png");
}

function setup() {
   createCanvas(1020,650);
   hunt=createSprite(179,270);
   hunt.addImage(logo);
   
   hunt.visibility=false;
   
 paper=createSprite(370,390);
   paper.addImage(pp);
   paper.scale=1.2;
   player=createSprite(760,415,1,1);
   
}
function draw() 
{


	if (gameState===0)
	{
     
      background(bg1);
    hunt.scale=0.6;
	  hunt.visibility=true;
    paper.x=640;
    paper.y=303;
    
	}
  if(keyDown("space") && gameState===0)
  {
	gameState=1;
  
  }
  if (gameState===1)
  {
    background(255);
background(bg2);
    paper.x=105;
    paper.y=361;
    paper.scale=0.00000000000000001;
	hunt.x=120;
	hunt.y=120;
  hunt.scale=0.4;
 
  player.addImage(man);
  player.scale=0.0999;
 
if(keyIsDown(RIGHT_ARROW))
  {
    player.velocityX=4;
    player.velocityY=0;
  }
  
  if (keyIsDown(LEFT_ARROW))
  {
    player.velocityX=-4;
    player.velocityY=0;
  }
  
  if (keyIsDown(UP_ARROW))
  {
    player.velocityX=0;
    player.velocityY=-4;
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    player.velocityX=0;
    player.velocityY=4;
  }
  fill("white");
  textSize(30);
    text(mouseX + "," + mouseY, 200, 50);

 var brick=createSprite(550,450,480,10);
 brick.shapeColor=("brown");
 
 var brick1=createSprite(305,255,10,400);
 brick1.shapeColor=("brown");

 var brick2=createSprite(540,420,390,10);
 brick2.shapeColor=("brown");
 
 var brick3=createSprite(350,274,10,300);
 brick3.shapeColor=("brown");

 var brick3=createSprite(755,240,10,280);
 brick3.shapeColor=("brown");

 var brick4=createSprite(570,100,380,10);
 brick4.shapeColor=("brown");

 var brick5=createSprite(600,400,10,50);
 brick5.shapeColor=("brown");

 var brick6=createSprite(500,390,10,50);
 brick6.shapeColor=("brown");

 var brick7=createSprite(600,370,95,10);
 brick7.shapeColor=("brown");

 var brick8=createSprite(735,370,35,10);
 brick8.shapeColor=("brown");

 var brick9=createSprite(557,349,10,45);
 brick9.shapeColor=("brown");

 var brick10=createSprite(643,349,10,40);
 brick10.shapeColor=("brown");

 var brick11=createSprite(643,325,85,10);
 brick11.shapeColor=("brown");

 var brick12=createSprite(605,310,10,20);
 brick12.shapeColor=("brown");

 var brick13=createSprite(681,250,10,150);
 brick13.shapeColor=("brown");

 var brick14=createSprite(640,248,150,10);
 brick14.shapeColor=("brown");

 var brick15=createSprite(745,287,10,10);
 brick15.shapeColor=("brown");

 var brick16=createSprite(660,170,120,10);
 brick16.shapeColor=("brown");
 
 var brick17=createSprite(693,110,20,20);
 brick17.shapeColor=("brown");

 var brick18=createSprite(605,187,10,40);
 brick18.shapeColor=("brown");

 var brick19=createSprite(569,119,10,40);
 brick19.shapeColor=("brown");

 var brick20=createSprite(564,238,10,30);
 brick20.shapeColor=("brown");

 var brick21=createSprite(550,228,35,10);
 brick21.shapeColor=("brown");

var brick23=createSprite(530,225,10,85);
brick23.shapeColor=("brown");

 var brick24=createSprite(642,246,10,60);
 brick24.shapeColor=("brown");
 
 var brick25=createSprite(517,202,35,10);
 brick25.shapeColor=("brown");

 var brick26=createSprite(448,140,10,90);
 brick26.shapeColor=("brown");

 var brick27=createSprite(504,110,25,25);
 brick27.shapeColor=("brown");

 var brick28=createSprite(365,300,40,10);
 brick28.shapeColor=("brown");

 var brick29=createSprite(435,186,65,10);
 brick29.shapeColor=("brown");

 var brick30=createSprite(464,212,10,60);
 brick30.shapeColor=("brown");

 var brick31=createSprite(467,362,80,10);
 brick31.shapeColor=("brown");

 var brick32=createSprite(385,398,35,35);
 brick32.shapeColor=("brown");

 var brick33=createSprite(455,310,35,40);
 brick33.shapeColor=("brown");

 var brick34=createSprite(360,142,20,20);
 brick34.shapeColor=("brown");

 var brick35=createSprite(365,241,20,10);
 brick35.shapeColor=("brown");

 var brick36=createSprite(519,290,20,20);
 brick36.shapeColor=("brown");

 var brick37=createSprite(539,396,20,20);
 brick37.shapeColor=("brown");

 var brick38=createSprite(323,209,44,10);
 brick38.shapeColor=("brown");

 var brick39=createSprite(416,268,30,10);
 brick39.shapeColor=("brown");

 var brick40=createSprite(785,375,10,160);
 brick40.shapeColor=("brown");

 var brick40=createSprite(767,340,30,10);
 brick40.shapeColor=("brown");
 BRICKS=[brick1,brick,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,brick31,brick32,brick33,brick34,brick35,brick36,brick37,brick39,brick38];
var power1=createSprite(330,425);
power1.addImage(p1);
power1.scale=0.1;

var monster1=createSprite(523,331);
monster1.addImage(mon);
monster1.scale=0.18;

var monster2=createSprite(567,198);
monster2.addImage(mon);
monster2.scale=0.18;

var monster3=createSprite(373,273);
monster3.addImage(mon);
monster3.scale=0.18;

var monster4=createSprite(728,228);
monster4.addImage(mon);
monster4.scale=0.18;
var monsters=[monster1,monster2,monster3,monster4];
if(player.isTouching(BRICKS))
{
  player.x=760;
  player.y=415;
   

}
 lives=createSprite(920,28);
 lives.addImage(life);
 lives.scale=0.2;
 var score=5;
 text(":"+score,945,35);
 if(player.isTouching(monsters))
 {
   score=score-1;
 }
}

  drawSprites();
 
  }



