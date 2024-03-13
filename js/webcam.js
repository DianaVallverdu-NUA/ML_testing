let capture;

const webcam = new Predictive(WEBCAM);

webcam.setup = () => {
  this.capture = createCapture(VIDEO);
  this.capture.hide();

  // mobileNet = ml5.imageClassifier("MobileNet", this.capture, modelLoaded);

  //trigger first prediction
  // mobileNet.predict(gotResults);
};

webcam.draw = () => {
  background(200);
  image(this.capture, 0, 0);
};
