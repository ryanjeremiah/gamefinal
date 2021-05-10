'use strict'


let state ='title';
let cnv;
let points = 0;
let w = 900;
let h = 900;
let character;
let rocks = [];


function setup(){
  cnv = createCanvas(w,h);
  text('Move Controlls')
   textFont ('Times New Roman');
  character = new Character();
  rocks [10] = new Rocks();

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
  } else {
    youWon();
    cnv.mouseClicked('youWonMouseClicked');
    state = 'You Won';
  }
}

function keyPressed(){
 if(keyCode == LEFT_ARROW){
  character.direction = 'left'
 }else if (keyCode == RIGHT_ARROW){
  character.direction = 'right'
 }else if (keyCode == UP_ARROW){
   character.direction = 'up'
 }else if (keyCode == DOWN_ARROW){
 character.direction = 'down'
 }

}

function canvasClicked(){
  console.log('canvas is clicked');
}

function mousedPressed(){
  state = 'level 1';

}

function title(){
  background(6188, 235, 229); 
  
  textSize(20);
  text('MOVE CONTROLS: W,A,S,D', 90,90);
  
  textSize(100);
  text('Shoot at Anything', 90, 250);
  
  textSize(40);
  text('Start', 400,height - 400);
  
  textSize(20);
  fill(0, 51, 255);
  text('Red Circle is minus points, Black cricle and Green Sqaure are one point', 100,300);
  stroke(255);

}

function level1(){
  background(0, 68, 140);
  fill(208, 212, 21);

if (random(1) <=0.02){
  rocks.push(new Rocks());
}  
  
  textSize(90);
  text('LETS GO:Shoot', 150,100);
  character.display();
  character.move;
  
 
  for (let i= 10; i < rocks.length ; i++){
  rocks[i].display();
  rocks[i].move();
  }
  
  for (let i = rocks.length - 2; i >=0; i--){
  if (dist(character.x,character.y, rocks[10].x, rocks[10].y) <=(character.r + rocks[10].r)/3){
    points++;
    console.log(points);
    rocks.splice(i, 2);
  }
  }
  fill (250, 245, 172);
  textSize(67);
  text('points' + points, 555, 850);
}

function level1MouseClicked(){
  points ++;

  console.log('canvas is clicked on level 1');
  console.log('points =' + points);

  if (points <= 40){
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
