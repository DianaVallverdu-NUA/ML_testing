// Initialize the Image Classifier method with MobileNet
let mobileNet;

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  setupImageUpload();

  //load model
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {}
