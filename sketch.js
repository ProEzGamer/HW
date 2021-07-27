//Create variables here
var dogImg, dogHappyImg;
var database;
var dog, foodStock, foods;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappyImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(385,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.5;
foodStock = database.ref('foodStock');
foodStock.on("value",readStock);



}


function draw() {  
  background("blue")
  if(keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogHappyImg);
  }
  drawSprites();
  //add styles here

}
function readStock(data) {
  foods = data.val()


}

function writeStock(x) {
  if(x<=0) {
    x=0
    }
  else{
    x=x-1
  }
  database.ref('/').update({
    foodStock:x
  })

}



