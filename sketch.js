
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
function setup() 
{
  createCanvas(400, 400);
  b1 = new Building(10,200,300);
  b2 = new Building(50,220,180);
  b3 = new Building(90,200,300);
  b4 = new Building(130,310,90);
  b5 = new Building(170,280,120);
  b6 = new Building(210,250,150);
  b7 = new Building(250,220,180);
  b8 = new Building(290,150,250);
  b9= new Building(330,200,200);
  b10 = new Building(370,270,130);
}

function draw() 
{
  background(220);
  fill("BLACK");
  b1.display();
  fill("RED");
  b2.display();
  fill("RED");
  b3.display();
  fill("RED");
  b4.display();
  fill("RED");
  b5.display();
  fill("RED");
  b6.display();
  fill("RED");
  b7.display();
  fill("RED");
  b8.display();
  fill("RED");
  b9.display();
  fill("RED");
  b10.display();
}