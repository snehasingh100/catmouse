var tom,jerry,back;
var tomI,tom1,tom2,tom3,jerryI,jerry1,jerry2,jerry3,backI;
var jerryGroup,tomGroup;

function preload() {
    //load the images here
    backI = loadImage("images/garden.png");

    tomI = loadAnimation("images/cat1.png");
    tom1 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
   
    jerryI = loadAnimation("images/mouse1.png");
    jerry1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    tom=createSprite(730,600);
    tom.addAnimation("tomSleeping",tomI);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryI);
    jerry.scale=0.11;


}

function draw() {
    background(backI);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX=0;
      tom.addAnimation("tomLastImage",tom3);
      tom.x=300;
      tom.scale=0.1;
      tom.changeAnimation("tomLastImage")
    
      jerry.addAnimation("jerryLastImage",jerry3);
      jerry.scale=0.11;
      jerry.changeAnimation("jerryLastImage");
    }

    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW ){
    tom.velocityX=-4;
    tom.addAnimation("tomRunning",tom1);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasy",jerry1);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryTeasy");
  }
}

