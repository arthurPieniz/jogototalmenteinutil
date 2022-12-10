var pessoa, pessoaImg;
var ground;
var bg;

var x = 300;
var y = 400;

function preload(){
    pessoaImg = loadImage('./assets/pessoa.png');
}

function setup(){
    createCanvas(windowWidth - 5, windowHeight - 5);

    bg = createSprite(windowWidth /2,windowHeight/2,windowWidth,windowHeight);
    bg.shapeColor = 'blue'

    ground = createSprite(windowWidth /2, windowHeight , windowWidth, windowHeight /7);
    ground.shapeColor = 'green';
}

function draw(){
    background(51);

    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    pessoa = createSprite(x, y, windowWidth /10, windowHeight /10);
    pessoa.addImage('animacao',pessoaImg);

    drawSprites();
}

function botao1(){
    x += 7;
}  

function botao2(){
    x -= 7;
}  