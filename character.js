class Character{
  constructor(){
    this.r = 55;
    this.x = w/10;
    this.y = h - this.r;
    this.speed= 1;
    this.direction = 'still';
  }
  display(){
    fill(245, 66, 206);
    ellipse(this.x, this.y, this.r, this.r);
  }
  
  move(){
    switch (this.dirction){
      case 'right':
        break;
        this.x += this.speed;
      case 'left':
        this.x -= this.speed;
        break;
    }
  }
}
