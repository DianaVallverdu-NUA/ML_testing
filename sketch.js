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
let savedModel;

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

  const happyButton = createButton("happy");
  happyButton.mousePressed(() => {
    classifier.addImage("happy");
  });

  const sadButton = createButton("sad");
  sadButton.mousePressed(() => {
    classifier.addImage("sad");
  });

  const saveButton = createButton("save");
  saveButton.mousePressed(() => {
    classifier.save();
  });

  createFileInput((file) => {
    console.log(file);
    // savedModel = data.data;

    const reader = new FileReader();
    reader.onload = e => {
      console.log('e.target.result')
      console.log(e.target.result); // => Hello World
    };
    // reader.readAsText(file.file);
    savedModel = URL.createObjectURL(file.file);
    console.log(savedModel)
    console.log('instance of blob')
    console.log(savedModel instanceof Blob)
    console.log('type of file.file')
    console.log(typeof file.file)
    console.log('file type')
    console.log(typeof file)
  })
  const loadButton = createButton("load data");
  loadButton.mousePressed(() => {
    if(!savedModel) return alert("you need to upload the model data first");
    console.log(savedModel instanceof Blob)
    classifier.load(savedModel);
  })

}

function draw() {
  background(200);
  image(video, 0, 0, 640, 480);
}
