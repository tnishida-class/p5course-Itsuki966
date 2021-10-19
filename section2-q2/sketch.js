// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke()
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let n = i + j;
      if(n % 2 == 0){
        fill(255);
      }
      else{
        fill(169,169,167);
      }// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      rect(size * i,size * j,size,size);
      let x = (size * i) + (size / 2);
      let y = (size * j) + (size / 2);
      if(n % 2 == 1 && j <= 2){
        fill(255,0,0);
      }
      else if(n % 2 == 1 && j >= 5 &&j <=7){
        fill(0);
      }
      else{

      }
      circle(x,y,size);
    }
  }
}
