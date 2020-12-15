var road, roadImg;

function preload(){
    roadImg.loadImage("road.png");
}

function setup(){
    var canvas = createCanvas(1200, 1200);
     
    road = createSprite(600, 600);
    road.setImage('roadIMG', roadImg);
    
}

function draw(){
    road.display();
}
