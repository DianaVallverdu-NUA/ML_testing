// Initialize the Image Classifier method with MobileNet
let mobileNet;

//previous option stored to compare with new selection
let previousOption = IMAGE_UPLOAD;

//possible types of predicting
const options = [
  { number: WEBCAM, label: "webcam" },
  { number: IMAGE_UPLOAD, label: "image upload" },
];

//load predictive type
const predictives = [webcam, imageUpload];
let currentPredictive = predictives[previousOption];

//select list
let select;

function setup() {
  //create canvas
  createCanvas(650, 600);
  background(200);

  select = createSelect();
  options.forEach((option) => select.option(option.label, option.number));
  select.selected(previousOption);

  //preload predictives
  for (const predictive of predictives) predictive.preload();

  currentPredictive.setup();
  console.log('current predictive')
  console.log(currentPredictive.display)

  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw() {
  let selection = Number(select.selected());

  //if selection has changed, load new predictive
  if (selection != previousOption) {
    //cleanup current predictive
    currentPredictive.cleanup();

    //update and setup new predictive
    currentPredictive = predictives[selection];
    currentPredictive.setup();

    //update previous option
    previousOption = selection;

    console.log('current predictive')
    console.log(currentPredictive.display)
  }

  // console.log(imageUpload.display);

  //draw current predictive
  currentPredictive.draw();

  //need to manually trigger prediction here because it doesn't like it when done from within class (CORS)
  if (selection === WEBCAM) mobileNet.predict(currentPredictive.display, gotResults);
}
