//input file
let input;

const imageUpload = new Predictive(IMAGE_UPLOAD);

imageUpload.setup = () => {
  console.log('image setup');
  //create input image
  input.show();

  //load alpaca image
  img = createImg("images/alpaca.jpeg", imageLoaded);
  img.hide();

  //load mobile net
  // mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
};

imageUpload.preload = () => {
  console.log('image preload');
  input = createFileInput(handleImage);
  input.hide();
}

imageUpload.cleanup = () => {
  console.log('image cleanup')
  input.hide();
}

//the image object
let img;

const handleImage = (file) => {
  console.log('image handle')
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
  console.log('image loaded')
  background(200);
  //get width and height
  let actualWidth = width;
  let actualHeight = height;
  if (img.width < img.height) actualWidth = (img.width * height) / img.height;
  else actualHeight = (img.height * width) / img.width;

  //display
  image(img, 0, 0, actualWidth, actualHeight);

  //load results
  // mobileNet.predict(img, gotResults);
};
