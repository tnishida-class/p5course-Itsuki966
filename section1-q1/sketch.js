// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(50 + 22, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  fill(blue);
  noStroke();
  ellipse(300,92,120,120);

  fill(green);
  strokeWeight(4);
  stroke(255);
  ellipse(293,88,108,108);

  fill(255);
  noStroke();
  ellipse(290,94,98,98);

  fill(gray);
  textSize(23);
  textFont('Georgia')
  strokeWeight(0.95);
  stroke(gray);
  text('KOBE',258,80);

  fill(gray);
  textSize(10);
  textFont();
  text('UNIVERSITY',272,97);

  noFill();
  stroke(red);
  strokeWeight(10);
  strokeCap(ROUND);
  bezier(265, 93, 235, 95, 255, 110, 225, 120);
  bezier(228, 93, 265, 100, 228, 110, 265, 120);
}
