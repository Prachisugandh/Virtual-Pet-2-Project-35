class Food{
    constructor(){
       this.foodStock = 0, this.lastFed;
        this.milkImage = loadImage("milk.png");
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){
        if(foodStock>0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFedTime(lastFed){
        this.lastFed = lastfed;
    }

  display(){
    var x=80,y=100;
    imageMode(CENTER);
    image(this.milkImage,720,220,4,8);
    console.log(this.foodStock);
      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.milkImage,x,y,50,50);
            x=x+30;
          }
       }
   }   
}   