var canvas,bgImg;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bgImg = loadImage("Imágenes/garden.png");
    tomImg1 = loadAnimation("Imágenes/tomOne.png");
    tomImg2 =loadAnimation("Imágenes/tomTwo.png","Imágenes/tomThree.png");
    tomImg3 = loadImage("Imágenes/tomFour.png");
    jerryImg1 =loadImage("Imágenes/jerryOne.png");
    jerryImg2 = loadAnimation("Imágenes/jerryTwo.png","Imágenes/jerryThree.png");
    jerryImg3 =loadImage("Imágenes/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSentado", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryComiendo", jerryImg1);
    jerry.scale = 0.1;

}

function draw() {

    background(bgImg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX = 0;
        tom.addAnimation("UltimaImagenTom", tomImg3);
        tom.changeAnimation("UltimaImagenTom");
        tom.x = 300;
        tom.scale = 0.23;
        
        jerry.addAnimation("UltimaImagenJerry", jerryImg3);
        jerry.changeAnimation("UltimaImagenJerry");
        jerry.scale = 0.1;
        
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
         
        jerry.addAnimation("jerryMolestando", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryMolestando");

        tom.velocityX = -5; 
        tom.addAnimation("tomCorriendo", tomImg2);
        tom.changeAnimation("tomCorriendo");
        tom.scale = 0.25;
    }
}