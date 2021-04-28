'use strict';



let state ='title';

function setup() {
  createCanvas(600, 600);  
  
}

function draw() {
  
  if (state === 'title');{
    title();
  } else if (state === 'level 1'){
    level1();
  }
}

function title(){  
background(252, 23, 3);
  textSize(100);
  stroke(200);
  text('JAK 4', 150, 150);
}

function level1(){
  background(252, 244, 3);
}
