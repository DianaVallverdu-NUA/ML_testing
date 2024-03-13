// Initialize the Image Classifier method with MobileNet
let mobileNet;

//the image of the alpaca
let alpaca;

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
};

const imageLoaded = () => {
  image(alpaca, 0, 0, width, height);
}

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(0);

  //load alpaca image
  alpaca = createImg('images/alpaca.jpeg', imageLoaded);
  alpaca.hide();

  //load model
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {}
