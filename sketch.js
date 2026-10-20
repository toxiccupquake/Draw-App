

let currentKey = '1';
let bgc;
let hueValue = 0;
let nightHue = 240;
let bBrushS = 1.3;




function setup() {
  createCanvas(800,800);
  colorMode(HSB,360,100,100,100)
  background(360);
  smooth();
  bgc = color(255);
}



function draw() {

 // triggering the clear_print function
 if( keyIsPressed) {
   clear_print();
 }
 // triggering the newkeychoice
 if(mouseIsPressed) {
  drawChoice();
 }

 if(mouseIsPressed) {
  thFlare();
 }

 if(mouseIsPressed) {
  thNight();
 }
//creates





} //------------------------end of draw


function drawChoice() {
  let currentKey = key;
  switch(currentKey) {



//----------------------brush 1 begins
  case '1':
  console.log("1");  // black line
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break; //----------------------brush 1 ends


//--------------------brush 2 begins
  case '2': //rainbow brush
        console.log("2");
        thRainbow(random(20,50), mouseX,mouseY,pmouseX,pmouseY);
  break; //---------------------brush 2 ends


//--------------------brush 3 begins
  case '3': //rainbow brush
        console.log("3");
        thSmRainbow(random(20,20), mouseX,mouseY,pmouseX,pmouseY);
  break; //---------------------brush 3 ends


//--------------------brush 4 begins
  case '4': //pink flare brush
    console.log("4");
    thFlare(random(20,200), mouseX, mouseY);
  break; //---------------------brush 4 ends

//---------------------brush 5 begins
    case '5': //blue to purple brush
        console.log("5");
        thNight(random(20,30), mouseX,mouseY,pmouseX,pmouseY);
    break;//-----------------------brush 5 ends


//------------------------eraser brush begins
  case '7':
    console.log("7");
    drawThickLine(bgc, mouseX, mouseY, pmouseX, pmouseY);
  break; //------------------eraser brush ends











  //---------------------default begins
      default:             // Default executes if the case labels
        console.log("None");   // don't match the switch parameter
      break;
  //-----------------------deafault ends




}


}//--------------------------drawChoice function ends


//----------------------------brush 1 function begins
function drawline( k,  lx, ly,  px, py) {
  strokeWeight(bBrushS);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
} //--------------------brush 1 function ends


//------------------------brush 2 function begins
function thRainbow(r,lx,ly,px,py) {
  strokeWeight(50);
  stroke(hueValue,100,100,80); //rainbow
  line(lx, ly, px, py);

  hueValue += 2; //when color goes to next
  if (hueValue > 360) {
    hueValue = 0;
  }
} //-----------------------brush 2 function ends


//------------------------brush 3 function begins
function thSmRainbow(r,lx,ly,px,py) {
  strokeWeight(20);
  stroke(hueValue,100,100,80); //rainbow
  line(lx, ly, px, py);

  hueValue += 2; //when color goes to next
  if (hueValue > 360) {
    hueValue = 0;
  }
} //-----------------------brush 3 function ends


//-------------------------brush 4 function begins
function thFlare(r,lx,ly) {
  noStroke();
  fill(330,r,100,40); //pink
  ellipse(lx, ly, r/2,r/2);
} //---------------------------brush 4 function ends

//--------------------------brush 5 function begins
function thNight(r,lx,ly,px,py) {
  strokeWeight(30);
  stroke(nightHue, 100,100,80);
  line(lx,ly,px,py);

  nightHue += 2;
  if (nightHue > 300) {
    nightHue = 240;
  }
} //-------------------------brush 5 function ends




//----------------------------eraser function begins
function drawThickLine(k, lx, ly, px, py) {
  strokeWeight(35);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX + "," + pmouseX);
} //----------------------------eraser function ends














function keyPressed() {
  if (key === '=' || key === '+') { //larger
    bBrushS += 2;
  } else if (key === '-') //smaller
    bBrushS -= 2;
      if (bBrushS < 1) bBrushS = 1.3 //minimum size
}





//------------------------clear print function begins
function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }
}
//-------------------------clear print function ends