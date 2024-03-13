// Initialize the Image Classifier method with MobileNet
let mobileNet;

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  // setupImageUpload();
  setupWebcam();
}

function draw() {

  drawWebcam();
}
