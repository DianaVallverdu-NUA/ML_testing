// Initialize the Image Classifier method with MobileNet
let mobileNet;

//the image of the alpaca
let alpaca;

/**
 * 
 * @param {*} error
 * @param {*} results 
 */
const gotResults = (error, results) => {
  //check no errors
  if(error) {
    console.error(error);
    return;
  }

  //log results
  const label = results[0].label;
  fill(0);
  textSize(64);
  text(label, 10, height - 100);
}

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
  mobileNet.predict(alpaca, gotResults);
};

/**
 * Show image in the canvas
 */
const imageLoaded = () => {
  //get width and height
  let actualWidth = width;
  let actualHeight = height;
  if (alpaca.width < alpaca.height)
    actualWidth = (alpaca.width * height) / alpaca.height;
  else actualHeight = (alpaca.height * width) / alpaca.width;

  //display
  image(alpaca, 0, 0, actualWidth, actualHeight);
};

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  //load alpaca image
  alpaca = createImg("images/alpaca.jpeg", imageLoaded);
  alpaca.hide();

  //load model
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {}
