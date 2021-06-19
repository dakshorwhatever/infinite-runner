var pballoon, bballoon, rballoon;
var bow, arrow, backGround;
var backgroundI, bowImage, arrowImage;
var bballoonImage, pballoonImage, rballoonImage;
var score;

function preload(){
  
  backgroundI = loadImage("background0.png"); 
  bballoonImage = loadImage("blue_balloon0.png");
  pballoonImage = loadImage("pink_balloon0.png");
  rballoonImage = loadImage("red_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage= loadImage("arrow0.png");

}

function setup() {
  createCanvas(500,500);
  
  //assigning memories and giving images
backGround = createSprite(0,0,500,500);
backGround.addImage(backgroundI);
backGround.scale = 3;
//backGround.velocityX = -6;
//backGround.x = backGround.width/2;

bow = createSprite(450,250,20,21);
bow.addImage(bowImage)

score = 0
  
  rbGroup = new Group();
  bbGroup = new Group();
  pbGroup = new Group();
  
  arrowGroup = new Group();
}

function draw() {
  
  //running background
//if (backGround.x<0){
  //  backGround.x = backGround.width/2;
  //} 
  
  //random positions for balloon
var selectballoon = Math.round(random(1,3));
  
  if (frameCount%70 === 0){
    if (selectballoon === 1){
      redballoon();
    }
  if (selectballoon === 2){
    blueballoon();
  }
    if (selectballoon === 3)
      pinkballoon();
  }
  
  
  bow.y = World.mouseY;
  camera.position.x = width/2;
  camera.position.y = bow.y;

  
//shoot arrows when space is pressed
  if (mouseIsPressed){
    createArrow();
    
   // var temparrow = createArrow();
    //temparrow.addImage(arrowImage);
    //temparrow.y = bow.y;
  }
  if(arrowGroup.isTouching(bbGroup)||arrowGroup.isTouching(pbGroup)||arrowGroup.isTouching(rbGroup)){
    score = score+1;
    bbGroup.destroyEach();
    pbGroup.destroyEach();
    rbGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if ( bbGroup<0||rbGroup<0||pbGroup<0){
    score = score-1
  }
drawSprites();
  text ("Score:"+ score, 390,camera.position.y-50,40,40)
 
}
//creating arrows
function createArrow(){

  arrow = createSprite(360,100,5,50);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.lifetime = 150;
  arrowGroup.add(arrow)
  
  
  
}
//creating red balloons and assigning lifetime
function redballoon(){
  
  rballoon = createSprite(50,Math.round(random(100,400)),10,10);
  rballoon.velocityX = 3;
  rballoon.addImage(rballoonImage);
  rballoon.scale = 0.15;
  rballoon.lifetime = 150;
  rbGroup.add(rballoon);
}
//creating blue balloons and assigning lifetime
function blueballoon(){
  
  bballoon = createSprite(50,Math.round(random(100,400)),10,10);
  bballoon.velocityX = 3;
  bballoon.addImage(bballoonImage);
  bballoon.scale = 0.15;
  bballoon.lifetime = 150;
  bbGroup.add(bballoon)
}
//creating pink balloons and assigning lifetime
function pinkballoon(){
  
  pballoon = createSprite(50,Math.round(random(100,400)),10,10);
  pballoon.velocityX = 3;
  pballoon.addImage(pballoonImage);
  pballoon.scale = 2;
  pballoon.lifetime = 150;
  pbGroup.add(pballoon)
}
function camera(){
  camera.position.x = bow.x
  camera.position.y = bow.y
}