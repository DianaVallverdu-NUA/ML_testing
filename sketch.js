// Initialize the Image Classifier method with MobileNet
let mobileNet;
let classifier;
let video;
let label = "";
let duckButton;
let pikachuButton;
let trainButton;

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

  // mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
  mobileNet = ml5.featureExtractor("MobileNet", modelLoaded);
  classifier = mobileNet.classification(video, videoLoaded);

  duckButton = createButton("rubber duck");
  duckButton.mousePressed(() => {
    classifier.addImage("rubber duck");
  });

  pikachuButton = createButton("pikachu");
  pikachuButton.mousePressed(() => {
    classifier.addImage("pikachu");
  });

  trainButton = createButton("train");
  trainButton.mousePressed(() => {
    classifier.train(whileTraining);
  });
}

function draw() {
  background(200);
  image(video, 0, 0, 640, 480);
  // mobileNet.predict(video, gotResults);

  //need to manually trigger prediction here because it doesn't like it when done from within class (CORS)
  // mobileNet.predict(display, gotResults);
}
