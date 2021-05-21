class Rocks{
  constructor(){
    this.r = 90;
    this.x = random(w);
    this.y = 10 - this.r;
   
  }
  display(){
    
    image(rocksImg, this.x, this.y, this.r, this.r);
    
 
  }
  move(){
    this.y++;
   
  }
}