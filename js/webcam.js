let capture;

const setupWebcam = () => {
  console.log('webcam setup');
  type = VIDEO;
  capture = createCapture(VIDEO);
  capture.hide();


  mobileNet = ml5.imageClassifier("MobileNet", capture, modelLoaded);

  //trigger first prediction
  mobileNet.predict(gotResults)
}

const drawWebcam = () => {
  background(200);
  image(capture, 0, 0);
}