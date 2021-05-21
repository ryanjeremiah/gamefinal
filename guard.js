class Guard{
  constructor(){
    this.r = 100;
    this.x = random(w);
    this.y = 1 - this.r;
    this.speed = 1;
   
  }
  display(){
    
    image(guardImg, this.x, this.y, this.r, this.r);
    
 
  }
  move(){
    this.y += this.speed;
   
  }
}
