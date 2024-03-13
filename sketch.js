// Initialize the Image Classifier method with MobileNet
let mobileNet;

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
};

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(0);

  //load model
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {}
