// 小手調べ
function setup(){
  createCanvas(100,100);
  background(255);

  for(let i = 0; i < 10; i++){
    let r1 = 100 - i*10
    if(i <= 4){
      stroke(255,0,0);
      ellipse(50,50,r1);
    }
    else{
      stroke(0,0,255);
      ellipse(50,50,r1);
    }// BLANK[1]
  }
}
