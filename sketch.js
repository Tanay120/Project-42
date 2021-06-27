var iss, issImg;
var spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3,spacecraftImg4;
var backgroundImg;
var hasDocked = false;

function preload(){
issImg=loadImage("iss.png");
spacecraftImg=loadImage("spacecraft1.png");
spacecraftImg2=loadImage("spacecraft2.png");
spacecraftImg3=loadImage("spacecraft3.png");
spacecraftImg4=loadImage("spacecraft4.png");
backgroundImg=loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(400,200,20,40);
  iss.addImage(issImg);
  iss.scale=0.7;

  spacecraft=createSprite(200,350,20,40);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;



}

function draw() {
  background(backgroundImg);
  
  if(!hasDocked){
    //spacecraft.x=random(1,800);
    if(keyCode === 37){
      spacecraft.x = spacecraft.x - 2;
      spacecraft.addImage(spacecraftImg4);
    }

    if(keyCode === 39){
      spacecraft.x = spacecraft.x + 2;
      spacecraft.addImage(spacecraftImg3);
    }

    if(keyCode === 38){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(spacecraftImg2);
    }

    if(keyCode === 40){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage(spacecraftImg);
    }
  }

  if(spacecraft.y === 250, spacecraft.x === 350){
    hasDocked = true;
    spacecraft.x = spacecraft.x;
    spacecraft.y = spacecraft.y;
    spacecraft.addImage(spacecraftImg);
    textSize(30);
    text("Spacecraft has docked", 400, 50);
  }
  
  drawSprites();
}