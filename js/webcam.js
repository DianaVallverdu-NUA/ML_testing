const webcam = new Predictive(WEBCAM);


webcam.setup = function () {
  this.display = createCapture(VIDEO, videoLoaded);
  this.display.hide();
  // predicting = this.display;
};

webcam.draw = function () {
  background(200);
  image(this.display, 0, 0);
};

webcam.cleanup = function () {
  this.display.remove();
  labelP.html("");
  probabilityP.html("");
}

const videoLoaded = () => {
  console.log(webcam.display)
  // mobileNet.predict(webcam.display, gotResults);
}