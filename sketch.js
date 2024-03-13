// Initialize the Image Classifier method with MobileNet
let mobileNet;

//the image object
let img;

//label and probability paragraph objects
let labelP, probabilityP;

/**
 *
 * @param {*} error
 * @param {*} results
 */
const gotResults = (error, results) => {
  //check no errors
  if (error) {
    console.error(error);
    return;
  }

  //log results
  const label = results[0].label;
  const probability = results[0].confidence;
  // fill(0);
  if (!labelP && !probabilityP) {
    console.log('labelP and probabilityP are empty');
    labelP = createP(label);
    probabilityP = createP(`probability: ${probability}`);
    return;
  }
  labelP.html(label);
  probabilityP.html(probability);
};

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
};

/**
 * Show image in the canvas
 */
const imageLoaded = () => {
  background(200);
  //get width and height
  let actualWidth = width;
  let actualHeight = height;
  if (img.width < img.height) actualWidth = (img.width * height) / img.height;
  else actualHeight = (img.height * width) / img.width;

  //display
  image(img, 0, 0, actualWidth, actualHeight);

  //load results
  mobileNet.predict(img, gotResults);
};

const handleImage = (file) => {
  if (file.type === "image") {
    img = createImg(file.data, imageLoaded);
    img.hide();
  } else {
    img = null;
  }
};

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  //create input image
  input = createFileInput(handleImage);

  //load alpaca image
  img = createImg("images/alpaca.jpeg", imageLoaded);
  img.hide();

  //load model
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {}
