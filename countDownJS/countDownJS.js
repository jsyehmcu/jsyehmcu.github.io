let song;
function setup() {
  createCanvas(windowWidth, windowHeight-36);//displayWidth, displayHeight);
  textSize(width/10);
  fill(255);
  song = loadSound("bell.mp3");  
}
function mousePressed(){
  if ( song.isPlaying() ) {
    song.stop();
    background(255,0,0);
  } else{
    song.play();
    background(255,0,0);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight-36);
  textSize(width/10);
}
var bPlayed=false;
function draw() {
  let destH=17;
  let destM=40;
  let destS=0;
  background(58,114,191);
  let now = hour()*60*60+minute()*60+second();
  let dest = destH*60*60+destM*60+destS;
  let remain = dest-now;
  if(remain<0){ remain=0;}//+= 24*60*60; }
  if(remain==0 && !bPlayed){
    if(!song.isPlaying()){
      song.play();
      bPlayed=true;
      background(255,0,0);
    }else{
      song.stop();
    }
  }
  let h = int(remain/60/60);
  let m = int(remain/60%60);
  let s = remain%60;
  let hh = nf(h, 2);
  let mm = nf(m, 2);
  let ss = nf(s, 2);
  let line1 = "剩下"+hh+":"+mm+":"+ss;
  textAlign(CENTER,CENTER);
  textSize(width/20);
  //text("專研拜師(葉正聖)"+nf(destH,2)+":"+nf(destM,2)+"開始", width/2,height/2-width/20);
  //text("文化207線上"+nf(destH,2)+":"+nf(destM,2)+"開始上課", width/2,height/2-width/20);
  //text("電腦圖學"+nf(destH,2)+":"+nf(destM,2)+"開始上課", width/2,height/2-width/20);
  //text("電腦圖學"+nf(destH,2)+":"+nf(destM,2)+"下課", width/2,height/2-width/20);
  text("程式設計"+nf(destH,2)+":"+nf(destM,2)+"下課", width/2,height/2-width/20);
  //text("程式設計"+nf(destH,2)+":"+nf(destM,2)+"開始上課", width/2,height/2-width/20);
  //text("距離"+nf(destH,2)+":"+nf(destM,2)+"敏真組meeting開始", width/2,height/2-100);
  //text("距離"+nf(destH,2)+":"+nf(destM,2)+":"+nf(destS,2)+"敏真組meeting開始", width/2,height/2-100);
  textSize(width/10);
  text(line1, width/2, height/2+width/20);
}
