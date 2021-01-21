var canvas;
var music;
var surface1,surface2,surface3,surface4
box
var invisiblegrnd1,invisiblegrnd2,invisiblegrnd3,invisiblegrnd4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(90,550,180,50)
surface1.shapeColor = "red"
surface2 = createSprite(290,550,180,50)
surface2.shapeColor = "blue"
surface3 = createSprite(490,550,180,50)
surface3.shapeColor = "green"
surface4 = createSprite(690,550,180,50)
surface4.shapeColor = "pink"
    //create box sprite and give velocity
box = createSprite(random(10,790),70,50,50)
box.velocityY = -2
box.velocityX = 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(box.y>580 || box.y<20){
       box.velocityY = box.velocityY *(-1)
      }
      if(box.x<20 || box.x>780){
          box.velocityX= box.velocityX * (-1)
     }
    
   
    //add condition to check if box touching surface and make it box
   if(istouching(box, surface1) ) {
       box.shapeColor = "red"
       music.play();
       bounceoff(box,surface1)
   }
   if(istouching(box, surface2 ) ) {
    box.shapeColor = "blue"
    music.play();
    bounceoff(box,surface2)
   }
   if(istouching(box, surface3) ){
    box.shapeColor = "green"
    music.play();
    bounceoff(box,surface1)
}
if(istouching(box,surface4)){
    box.shapeColor = "pink"
    box.velocityX = 0
    box.velocityY =  0
    music.stop()
}

    drawSprites()
}