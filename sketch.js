// Initialize the Image Classifier method with MobileNet
let mobileNet;
let classifier;
let video;
let label = "";
let trainButton;
let input;
let buttons = [];
let newInputButton;
let defaultDiv;
let newButtonsDiv;

const videoLoaded = () => {
  console.log("video ready");
};

const whileTraining = (loss) => {
  if (!loss) {
    console.log("training complete");
    classifier.classify(gotResults);
    return;
  } else console.log(loss);
};

function setup() {
  //create canvas
  createCanvas(640, 480);
  background(200);

  video = createCapture(VIDEO);
  video.hide();

  mobileNet = ml5.featureExtractor("MobileNet", modelLoaded);
  classifier = mobileNet.classification(video, videoLoaded);

  trainButton = createButton("train");
  trainButton.mousePressed(() => {
    classifier.train(whileTraining);
  });

  input = createInput();
  newInputButton = createButton("add label");
  newInputButton.mousePressed(() => {
    const newLabel = input.value();
    const newButton = createButton(newLabel);
    newButton.mousePressed(() => {
      classifier.addImage(newLabel);
    });
    buttons.push(newButton);
  });
}

function draw() {
  background(200);
  image(video, 0, 0, 640, 480);
}
