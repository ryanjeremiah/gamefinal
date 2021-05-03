'use strict';


let state ='title';
let cnv;
let points;
let w = 1000
let h;


function setup() {
   cnv = createCanvas(w,h); 
  textFont ('Reavans Medium');
}

function draw() {
  
  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
      case 'level1':
       title();
      cnv.mouseClicked(level1MouseClicked);
      break;
      case 'you won':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      default:
      break;
      
      
  }

}
function level1MousedClicked(){
  consle.log('canvas is clicked on title page'); 
      state = 'level 1'

}
function title(){  
background(3);
  textSize(100);
  stroke(200);
  text('JAK 4',w/3, h/4);
   textSize(20)
  text('click anywhere to start', 100,300);
}
 function level1MouseClicked (){
      consle.log('canvas is clicked on title page'); 
      state = 'level 1'
 }
function level1(){
  background(50, 150, 200);
  text('click for points', w/4, height - 90 );
}

function levelMouseClicked(){
  points++;
  console.log('points = ' + points);
  
  if (points >= 450){
    state = 'you win'
  }
}

function youWin(){
  background(50, 168, 82);
  textSize(100);
  stroke(200);
  text('YOU WON',150, 150);
   textSize(20)
  text('click anywhere to restart', w/1,h/3);
}
function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
  
}


 }
