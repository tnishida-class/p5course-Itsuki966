// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon1(255,215,0,"I love keyakizaka46",10,40,22,94,131);
  balloon2(255,215,0,"That's nice!",100,100,22,94,131);
}

function balloon1(tc1,tc2,tc3,t,cx, cy,bc1,bc2,bc3){
  let w = textWidth(t);
  let h = cy + textAscent(t) * 1.2;//textAscent() + textDescent();
  let p = cx + 10;
  let rh = textDescent(t) + textAscent(t);
  noStroke();
  fill(bc1,bc2,bc3);
  rect(cx, cy, w + 20, rh,10); //+ p * 2, h + p * 2);
  beginShape();
  vertex(p, rh + cy);
  vertex(cx + 5, rh + cy + 7);
  vertex(p + 10, rh + cy);
  endShape(CLOSE);
  fill(tc1,tc2,tc3);
  text(t, p, h);
}

function balloon2(tc1,tc2,tc3,t,cx, cy,bc1,bc2,bc3){
  push();
  let w = textWidth(t);
  let h = cy + textAscent(t) * 1.2;//textAscent() + textDescent();
  let p = cx + 10;
  let rh = textDescent(t) + textAscent(t);
  noStroke();
  fill(bc1,bc2,bc3);
  rect(cx, cy, w + 20, rh,10); //+ p * 2, h + p * 2);
  beginShape();
  vertex(cx + w + 10, rh + cy);
  vertex(cx + w + 15, rh + cy + 7);
  vertex(cx + w, rh + cy);
  endShape(CLOSE);
  fill(tc1,tc2,tc3);
  text(t, p, h);
  pop();
}
