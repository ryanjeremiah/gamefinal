class Rocks{
  constructor(){
    this.r = 80;
    this.x = random(w);
    this.y = 0 - this.r;
   
  }
  display(){
    fill(44, 125, 4);
    rect(this.x/100, this.y, this.r, this.r);
    
    fill (245, 29, 0);
    ellipse(this.x/100, this.y, this.r, this.r);
    
    noStroke();
    fill(20, 19, 18);
    square(this.x/100, this.y, this.r, this.r);
  
  }
  move(){
    this.y++;
   
  }
}