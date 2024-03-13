//input file
let input;

const imageUpload = new Predictive(IMAGE_UPLOAD);

imageUpload.setup = () => {
  //create input image
  input.show();

  //load alpaca image
  img = createImg("images/alpaca.jpeg", imageLoaded);
  img.hide();

  //load mobile net
  predicting = img;
};

imageUpload.preload = () => {
  input = createFileInput(handleImage);
  input.hide();
}

imageUpload.cleanup = () => {
  input.hide();
  labelP.html("");
  probabilityP.html("");
}

//the image object
let img;

const handleImage = (file) => {
  if (file.type === "image") {
    img = createImg(file.data, imageLoaded);
    img.hide();
  } else {
    img = null;
  }
};

/**
 * Show image in the canvas
 */
const imageLoaded = () => {
  background(200);
  //get width and height
  let actualWidth = width;
  let actualHeight = height;
  if (img.width < img.height) actualWidth = (img.width * height) / img.height;
  else actualHeight = (img.height * width) / img.width;

  //display
  image(img, 0, 0, actualWidth, actualHeight);

  //load results
  mobileNet.predict(predicting, gotResults);
};
