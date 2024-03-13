// Initialize the Image Classifier method with MobileNet
let mobileNet;

//possible types of predicting
const WEBCAM = 0;
const IMAGE_UPLOAD = 1;
const options = [
  { number: WEBCAM, label: "webcam" },
  { number: IMAGE_UPLOAD, label: "image upload" },
];

//previous option stored to compare with new selection
let previousOption = WEBCAM;

//select list
let select;

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  select = createSelect();
  options.forEach((option) => select.option(option.label, option.number));
  select.selected(options[0]);

  //initial setup to get html right
  setupImageUpload();
  cleanupImageUpload();

  //setup webcam
  setupWebcam();
}

function draw() {
  let selection = Number(select.selected());

  if (selection != previousOption) {
    previousOption = selection;
    if (selection === WEBCAM) setupWebcam();
    if (selection === IMAGE_UPLOAD) setupImageUpload();
    return;
  }

  if (selection === WEBCAM) {
    drawWebcam();
  }
}
