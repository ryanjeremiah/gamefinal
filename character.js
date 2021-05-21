class Character{
  constructor(x, y, r){
    this.r = 150;
    this.x = w/5;
    this.y = h - this.r;
    this.speed= 5;
    this.direction = 'still';
   
  }
  display(){
     image(characterImg, this.x, this.y, this.r, this.r);
  }
  
  move(){
    switch (this.direction){
      case 'still':
        break; 
      case 'right':
    if (this.x < w -this.r /5){ 
        this.x += this.speed;
    }
        break;
      case 'left':
    if (this.x < w - this.r /5 > 0){ 
        this.x -= this.speed;
    }
        break;
      default:
        break;
        
    }
  }
}
