function setup(){
  createCanvas(400,200);
}
function draw(){
  let s = second();
  if( s%2==0 ){
    background(255,0,0);
  }else{
    background(51,109,200);
  }
}
