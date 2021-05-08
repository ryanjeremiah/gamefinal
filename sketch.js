'use strict'



let state ='title';
let cnv;
let points = 5;

function setup(){
  cnv = createCanvas(600,600);  
   textFont ('Times New Roman');
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
        console.log('level1');
        state = 'level 1';
      });
  } else {
    youWon();
    cnv.mouseClicked('canvas You Won')
    state = 'You Won';
  }
}                
function canvasClicked(){
  console.log('canvas is clicked');
}
function mousedPressed(){
  state = 'level 1';
  
}
function title(){
  background(659, 37, 133);
  textSize(50);
  text('Ryans Game', 10,100);
  stroke(255);
  
  textSize(20);
  text('click me anywhere to play', 200,500);
}
function level1(){
  background(195, 245, 157);
  textSize(20);
  text('shoot for points', 250, height - 60);
  textSize(50);
  text('LETS GO:Shoot', 150,100);
}
function level1MouseClicked(){
  points ++; 
  
  console.log('canvas is clicked on level 1');
  console.log(' =' + points);
  
  if (points >= 5){
    state = 'YOU WON'
  }
 
}
function youWon(){
   background(252, 186, 3);
  textSize(50);
  text('You Won', 10,100);
  stroke(255);
  
  textSize(90);
  text('Start Over: Click AnyWhere', 40, 40);
}

function youWonMouseClicked(){
  state = 'level 1';
  points = 0;
}
