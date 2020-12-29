var road, road2, roadImg;
var player, playerImg, playerStatic;
var shopImg, shop, count = 0, rand = 0;
var polyBagImg, polyBag, count2 = 0, rand2 = 0;
var gameState = 0;
var cross, crossImg;
var fishImg, canImg, peelImg, flintImg, fish, can, peel, flint;
var rand5 = 0;
var inventory = [];

var polyBagGP, shopGP, itemGP;

function preload(){
    roadImg = loadImage("Images/Road.png");
    playerImg = loadAnimation("Images/man1.jpg","Images/man2.jpg","Images/man3.jpg","Images/man4.jpg","Images/man5.jpg","Images/man6.jpg");
    shopImg = loadImage("Images/Shop.jpg");
    polyBagImg = loadImage("Images/polyBag.jpg");
    playerStatic = loadImage("Images/man5.jpg");
    crossImg = loadImage("Images/close.jpg");
    fishImg = loadImage("Images/fish.jpg");
    peelImg = loadImage("Images/peel.jpg");
    canImg = loadImage("Images/can.jpg");
    flintImg = loadImage("Images/Flint.png");

}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
     
    road = createSprite(windowWidth/2, windowHeight/2);
    road.addImage('roadIMG', roadImg);
    road.scale = 1.2;
    road.velocityX = -5;

    road2 = createSprite(3*windowWidth/2, windowHeight/2);
    road2.addImage('roadIMG', roadImg);
    road2.scale = 1.2;
    road2.velocityX = -5;
    
    player = createSprite(windowWidth/6,windowHeight/2 - 50);
    player.addAnimation('playerimg', playerImg);
    player.addImage('playerimgg', playerStatic);
    player.scale = 1.1;

    cross = createSprite(windowWidth - 200, windowHeight/4,10,10);
    cross.addImage('itscross',crossImg);
    cross.scale = 0.4;
    cross.visible = false;

    shopGP = new Group();
    polyBagGP = new Group();
    itemGP  = new Group();
}

function draw(){
    background("black");
    if(gameState === 0){

        if(road.x < -windowWidth/2){
            road.x = windowWidth/2;
            road2.x = 3*windowWidth/2;
        }

        shopCreate();
        polyBagCreate();

        if(mousePressedOver(polyBag) && inventory.length < 10){
            gameState = 1;
            for(var i = 50; i < 1010; i = i + 100){
                rand5 = Math.round(random(1,10));
                inventory.push(rand5);

                switch(rand5){
                    case 1 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(2);
                    break ;
                    case 2 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(2);
                    break ;
                    case 3 : can = createSprite(i, windowHeight/2);
                    can.addImage('canimg',canImg);
                    itemGP.add(can);
                    inventory.push(2);
                    break ;
                    case 4 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 5 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 6 : peel = createSprite(i, windowHeight/2);
                    peel.addImage('peelimg',peelImg);
                    itemGP.add(peel);
                    inventory.push(0);
                    break ;
                    case 7 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 8 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 9 : fish = createSprite(i, windowHeight/2);
                    fish.addImage('fishimg',fishImg);
                    itemGP.add(fish);
                    inventory.push(0);
                    break ;
                    case 10 : flint = createSprite(i, windowHeight/2);
                    flint.addImage('flintimg',flintImg);
                    flint.scale = 0.5;
                    itemGP.add(flint);
                    inventory.push(5);
                    break ; 
                }
            } 
        }

        if(mousePressedOver(shop)){
            gameState = 1;
        }
    }

    if(gameState === 1){
        stop();
    }

    console.log(inventory);

    drawSprites();

    if(inventory.length === 10){
        textSize(25);
        fill("black");
        text("Bag is full. Sell items in order to collect more", windowWidth/3, 50);
    }
}

function shopCreate(){
    if(count === 0){
        rand = Math.round(random(300,300));
    } 
    
    if(count < rand){
        count++
    }

    if(count === rand){
        shop = createSprite(windowWidth + 60, windowHeight/2 - 120);
        shop.addImage('shopimg', shopImg);
        shop.scale = 2;
        shop.velocityX = -5;
        count = 0;
        shop.depth = 2;
        shopGP.add(shop);
    }
}

function polyBagCreate(){ 
    if(count2 === 0){
        rand2 = Math.round(random(100,200));
    } 
    
    if(count2 < rand2){
        count2++
    }

    if(count2 === rand2){
        polyBag = createSprite(windowWidth + 60, windowHeight/2 + 35);
        polyBag.addImage('polyBagimg', polyBagImg);
        polyBag.scale = 0.6;
        polyBag.velocityX = -5;
        count2 = 0;
        polyBagGP.add(polyBag);
        polyBag.depth = 4;
    }
}

function stop(){
    if(gameState === 1){
        player.changeAnimation('playerimgg', playerStatic);
        road.velocityX = 0;
        road2 .velocityX = 0;
        polyBagGP.setVelocityXEach(0);
        cross.visible = true;
        shopGP.setVelocityXEach(0);
        polyBagGP.destroyEach();
        
        if(mousePressedOver(cross)){
            gameState = 0;
            itemGP.destroyEach();
            road.velocityX = -5;
            road2.velocityX = -5;
            player.changeAnimation('playerimg', playerImg);
            cross.visible = false;
            shopGP.setVelocityXEach(-5);
        }
    }
}

function shopTouched(){
    
}
