//input file
let input;

let imageUpload = new Predictive(IMAGE_UPLOAD);

//on prload, create file input and hide it
imageUpload.preload = function () {
  input = createFileInput(handleImage);
  input.hide();
};

//on setup show input and display demo image
imageUpload.setup = function () {
  //create input image
  input.show();

  //load alpaca image
  this.display = createImg("images/alpaca.jpeg", imageLoaded);
  this.display.hide();

  //load mobile net
  predicting = this.display;
};

imageUpload.cleanup = () => {
  input.hide();
  labelP.html("");
  probabilityP.html("");
};

const handleImage = (file) => {
  if (file.type === "image") {
    imageUpload.display = createImg(file.data, imageLoaded);
    imageUpload.display.hide();
  } else {
    imageUpload.display = null;
  }
};

/**
 * Show image in the canvas
 */
const imageLoaded = () => {
  if(!imageUpload.display) {
    return console.error("trying to display an image that is not loaded");
  }
  background(200);
  //get width and height
  let actualWidth = width;
  let actualHeight = height;
  if (imageUpload.display.width < imageUpload.display.height)
    actualWidth =
      (imageUpload.display.width * height) / imageUpload.display.height;
  else
    actualHeight =
      (imageUpload.display.height * width) / imageUpload.display.width;

  //display
  image(imageUpload.display, 0, 0, actualWidth, actualHeight);

  //load results
  mobileNet.predict(predicting, gotResults);
};
