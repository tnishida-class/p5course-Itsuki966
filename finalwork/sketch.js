// 最終課題を制作しよう
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let x, y, vx, vy, x1, y1, a;
const g = 1; // 重力加速度
const vyMax = 30;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  a = 0;
  x1 = windowWidth / 10;
  y1 = windowHeight / 8;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160,192,255);

  noStroke();
  fill(107,142,35);
  arc(windowWidth / 3, windowHeight - 20,4 * windowWidth / 7,3 * windowHeight / 5, PI,2 *  PI);
  arc(windowWidth - 40, windowHeight - 50,2 * windowWidth / 3,8 * windowHeight / 9, PI, 2 * PI);

  noStroke();
  fill(160,82,45);
  rect(0,windowHeight - 40,windowWidth,40);

  fill(34,139,34);
  rect(0,windowHeight - 55,windowWidth,20,);


  fill(255);
  Cloud(x1,y1);
  Cloud(x1 + 200,y1 + 30);
  Cloud(x1 + 400,y1 + 5);
  Cloud(x1 + 600,y1 + 50);
  Cloud(x1 + 800,y1 + 30);
  Cloud(x1 + 1000,y1 + 10);

  x1 -= 1;
  if(x1 > width + 1100){ x1 = 0; }
  else if(x1 < - 1100){ x1 = width; }

  Body(x,y);
  if(y >= height - 80 && keyIsDown(UP_ARROW)){vy -= 25}
  if(keyIsDown(LEFT_ARROW)){x = x - 5 - a}
  if(keyIsDown(RIGHT_ARROW)){x = x + 5 + a}
  if(keyIsDown(SHIFT)){a = 4}
  else{a = 0}

  y += vy;

  vy = constrain(vy + g, -vyMax, vyMax);

  if(y > height - 80){ vy = 0;}
  x = constrain(x, 0,width);
  y = constrain(y, 0,height - 80);

}

function Mountain(cx,cy){
  push();
  arc(windowWidth / 3, windowHeight,windowWidth / 2, windowHeight / 3);
  pop();
}

function Cloud(cx,cy){
  push();
  stroke(255);
  arc(cx,cy,50,50,0,2*PI);
  arc(cx + 30,cy,50,60,0,PI);
  arc(cx + 30,cy,60,70,PI,2*PI);
  arc(cx + 60,cy,50,50,0,2*PI);
  pop();
}

function Body(cx,cy){
  push();
  stroke(0);
  fill(80,35,10);
  rect(cx,cy + 15,10,10);
  rect(cx + 20,cy + 15,10,10);
  fill(35,59,108);
  rect(cx,cy - 15,30,30);
  fill(244,164,96);
  rect(cx,cy - 35,30,20);
  fill(255,0,0);
  rect(cx,cy - 40,35,8);
  pop();
}
