//'use strict', need xand y on line 16;


let state ='title';
let cnv;
let points = 0;
let w = 900;
let h = 900;
let character;
let rocks = [];
let guard = [];
let characterImg;
let rocksImg;
let guardImg;

function preload(){
  characterImg = loadImage('Jak.png');
  rocksImg = loadImage('precursor.jpg');
  guardImg = loadImage('guard.png');
 
  
}

function setup(){
  cnv = createCanvas( w, h);
  text('Move Controlls');
   textFont ('𝐓𝐡𝐞 𝐛𝐨𝐥𝐝 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐬𝐞𝐫𝐢𝐟𝐟𝐞𝐝');
  character = new Character();
  //rocks [i] = new Rocks();
  
  rocks.push(new Rocks());
  guard.push(new Guard());
  

}

function draw(){
  if (state === 'title'){
    title();
    cnv.mouseClicked(function(){
        console.log('titleMouseClicked');
        state = 'level 1';
});
  } else if (state === 'level 1') {
      level1();
    cnv.mouseClicked(function(){
        console.log('level1MousedClicked');
        state = 'level 1';
  });
  } else if( state === 'youWon') {
    youWon();
    cnv.mouseClicked('youWonMouseClicked');
    state = 'You Won';
  } else if( state === 'gameOverMouseClicked') {
    gameOver();
    cnv.mouseClicked('gameOver');
    state = 'game over';
}
}

function keyPressed(){
 background('yellow');
  text(`${key} ${keyCode}`, 10, 40);
  print(key, 'A', keyCode);
  print(key, 'D', keyCode);

 if(keyCode == LEFT_ARROW || key == 'a' ){
   character.direction = 'left'
 }else if (keyCode == RIGHT_ARROW || key == 'd' ){
  character.direction = 'right'
 }else if (key = ' '){
   character.direction = 'still';
}

}

function canvasClicked(){
  console.mouseClicked('canvas is clicked');
}

function mousedPressed(){
  state = 'level 1';

}

function title(){
  function title(){
  background(618, 235, 229); 
  
  
  textSize(20);
  text('MOVE CONTROLS: A and D or left or right right arrows to move', 150, 600);
  
  fill(87, 41, 194);
  textSize(100);
  text('Jak Precursor Orbs', 90, 250);
  
  textSize(25);
  text('To stop the chacater then press SPACEBAR', 200, 550);
  
  textSize(25);
  text('Reach 2000 Points "You Win" BUT Reach -1000 Points "You Lose"', 100, 500);
  
  textSize(40);
  text('Click anywhere to Start', 250,  350);
}

function level1(){
  background(66, 135, 245);
  fill(208, 212, 21);
     if (random(1) <=0.03){
        rocks.push(new Rocks());   
     }  
   if (random(1) <=0.01){
        guard.push(new Guard());
     }  
  textSize(45);
  text('START COLLECTING POINTS', 150,100);
  character.display();
  character.move();
  for (let i= 0; i < rocks.length ; i++){
    rocks[i].display();
    rocks[i].move();
}
   for (let i= 0; i < guard.length ; i++){
    guard[i].display();
    guard[i].move();
    
}
  for (let i = rocks.length - 1; i >=0; i--){
    if (dist(character.x,character.y, rocks[i].x, rocks[i].y) <= (character.r + rocks[i].r)/2){
        points++;
      } else if(rocks[i].y > h){
        console.log('points');
         rocks.splice(i, 1);
      }
     for (let i = guard.length - 1; i >=0; i--){
    if (dist(character.x,character.y, guard[i].x, guard[i].y) <= (character.r + guard[i].r)/2){
        points--;
      } else if(guard[i].y > h){
        console.log('points');
         guard.splice(i, 1);
      }
      textSize(40);
     text('points ' + points, w/5,h - 35);
    }
  if (points >= 2000){
    state = 'you won';
  } else if (points <= -1000)
    state ='game over'
}  
}

function level1MouseClicked(){
  points ++;
  console.log('canvas is clicked on level 1');
  console.log('points ' + points);

  if (points <= 20){
    state = 'YOU WON'
  }

}
  
function youWon(){
  background(252, 186, 3);
  textSize(50);
  text('You Won', w / 10, h/ 10);
  stroke(255);
  textSize(90);
  text('Start Over: Click AnyWhere', 40, 40);
  
}
  
function youWonMouseClicked(){
  state = 'level 1';
  points = 0;
}
function gameOver(){
  background(252, 186, 3);
  textSize(50);
  text('game over', 10,100);
  stroke(255);
  textSize(90);
  text('Start Over: Click AnyWhere', 40, 40);
  
}
  
function gameOverMouseClicked(){
  state = 'title';
  points = 0;
}
