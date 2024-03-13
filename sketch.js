// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
};

function setup() {
  createCanvas(650, 600);
  background(0);
}

function draw() {}
