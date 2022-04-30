var pinksky, pinkskyImg;
var redpin, redpinImg, redpinGroup;
var hotairballoon, hotairballoonImg;
var gameState = "play"


function preload(){
    hotairballoonImg = loadImage("hotairballoon.png");
    pinkskyImg = loadImage("pinksky.jpeg");
    redpinImg = loadImage("redpin.png");
    
  }
  
  function setup() {
    createCanvas(900, 900);
    pinksky = createSprite(500,750)
    pinksky.addImage(pinkskyImg);
    pinksky.velocityY = 0.5;
    
    hotairballoon = createSprite(300,750);
    hotairballoon.scale = 0.4;
    hotairballoon.addImage(hotairballoonImg);


    redpinGroup = new Group();
  }
  
  function draw() {
    if(gameState==="play"){

    if(pinksky.y > 900){
        pinksky.y = 700
      }
      if  (keyDown("right_arrow")){
        hotairballoon.x = hotairballoon.x + 4
      }
      if  (keyDown("left_arrow")){
        hotairballoon.x = hotairballoon.x - 4
      }

      if(redpinGroup.isTouching(hotairballoon)){
        hotairballoon.destroy();
        gameState = "end";
      }
    
     spawnPins();
      drawSprites();
     
      if(gameState==="end"){
        fill ("black");
      textSize(50);
      text("GAME OVER",300,450);
      
      }
    }
}

function spawnPins(){
  if (frameCount%250===0){

    redpin = createSprite(700, 650);
    redpin.scale = 0.3;
    redpin.addImage(redpinImg);
redpin.x = Math.round(random(200,100));
redpin.lifetime = 200;
redpinGroup.add(redpin)
  
}
}
