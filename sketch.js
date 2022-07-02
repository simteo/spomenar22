let img;

let saveButton, clearButton;

function preload() {
    img= loadImage("img/str.jpg");
}

function setup() {
    createCanvas(1300, 997);
    background(img);
    
    

  saveButton = createButton('sačuvaj');
  saveButton.mousePressed(saveFile);
    

  clearButton = createButton('očisti');
  clearButton.mousePressed(clearScreen);    
    

  fullscreenButton = createButton('full screen');
  fullscreenButton.mousePressed(screenFull);
}



function saveFile() {
  save('spomenar.jpg');
}

    
function clearScreen() {
  background(img);
}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs); 
}


function draw() {

  stroke(0);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
     }
    
}