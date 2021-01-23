var  dog, happyDog, database, foodS, foodStock;
var  lastFed, foodObj;

function preload()
{
  dog=loadImage("dog1.png");
  happyDog=loadImage("dog2.png");
}

function setup() {
  database=firebase.database();

  createCanvas(1000, 800);
  dogSprite=createSprite(500,400)
  dogSprite.scale=0.2;
  dogSprite.addImage(dog)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

  feed = createButton("Feed the Food");
  feed.position(850,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(750,95);
  addFood.mousePressed(addFoodS);

  foodObj = new Food();
}

function draw() {  
  background(46, 139, 87)



  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed = data.val()
  });
  foodObj.display();
  drawSprites();

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + " PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed : "+ lastFed + "AM",350,30);
}
}

function readStock(data){
foodS=data.val()
foodObj.updateFoodStock(foodS);
}



function feedDog(){
  dogSprite.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoodS(){
  foodS++;
  database.ref('/').update({
  Food:foodS
  })
}