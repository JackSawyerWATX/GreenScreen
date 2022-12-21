var fgImage = null;
var bgImage = null;
var fgcan;
var bgcan;

function loadForegraoundImage() {
  var imgFile = document.getElementById("fgfile");
  fgImage = new SimpleImage(fgfile);
  var canvas = document.getElementById("fgcan")
  fgImage.drawTo(canvas1);
}

function loadBackgraoundImage() {
  var imgFile = document.getElementById("bgfile");
  bgImage = new SimpleImage(bgfile);
  var canvas = document.getElementById("bgcan")
  bgImage.drawTo(canvas2);
}

function createComp() {
  if (fgImage == null || !fgImage.complete()) {
    fgImage = new SimpleImage(fgfile);
    alert("Foreground Image Not Loaded.");
    return;
  }
  if (bgImage == null || !bgImage.complete()) {
    alert("Background Image Not Loaded.");
  }
  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  var greenThreshold=245;
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
  if (pixel.getGreen() > greenThreshold) {
    var bgPixel=bgImage.getPixel(x,y);
    output.setPixel(x,y,bgPixel);
    }
    else {
      output.setPixel(x,y,pixel);
    }
  }
  output.drawTo(canvas3)
  doClear();
  // [...]
}
   
function doClear(canvas){
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

function clearComp(){
  doClear(canvas1);
  doClear(canvas2);
  doClear(canvas3);
  
}
