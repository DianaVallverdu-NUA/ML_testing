let capture;

const setupWebcam = () => {
  type = VIDEO;
  capture = createCapture(VIDEO);
  capture.hide();


  mobileNet = ml5.imageClassifier("MobileNet", capture, modelLoaded);

  //trigger first prediction
  mobileNet.predict(gotResults)
}

const drawWebcam = () => {
  image(capture, 0, 0);
}