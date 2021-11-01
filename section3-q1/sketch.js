// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 300);
  count = 85;
  cycle = 30;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle
  // BLANK[1]
  let size = count;
  if(keyIsDown(UP_ARROW)){ cycle = 10;}
  if(keyIsDown(DOWN_ARROW)){ cycle = 61;}
  fill(255,105,180);
  noStroke();
  arc(width / 3 + 7,height / 3, size + 48,size + 48,PI,2 * PI,OPEN);
  arc(2 * width / 3 - 8,height / 3, size + 48,size + 48,PI,2 * PI,OPEN);
  arc(width / 2,height / 3, size + 100,size + 200,0,PI,OPEN);

}
