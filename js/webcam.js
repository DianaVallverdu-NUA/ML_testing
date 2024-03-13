let capture;

const webcam = new Predictive(WEBCAM);


webcam.setup = () => {
  this.capture = createCapture(VIDEO);
  this.capture.hide();
  predicting = this.capture;
};

webcam.draw = () => {
  background(200);
  image(this.capture, 0, 0);
};

webcam.cleanup = () => {
  this.capture.remove();
  labelP.html("");
  probabilityP.html("");
}