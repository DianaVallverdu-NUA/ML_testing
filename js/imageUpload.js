//the image object
let img;

//input file
let input;

const setupImageUpload = () => {
  console.log("image setup");
  type = IMAGE;
  //create input image
  if (!input) input = createFileInput(handleImage);
  else input.show();

  //load alpaca image
  img = createImg("images/alpaca.jpeg", imageLoaded);
  img.hide();

  //load mobile net
  mobileNet = ml5.imageClassifier("MobileNet", modelLoaded);
};

const handleImage = (file) => {
  if (file.type === "image") {
    img = createImg(file.data, imageLoaded);
    img.hide();
  } else {
    img = null;
  }
};

//cleanup function
const cleanupImageUpload = () => {
  input.hide();
}

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
  mobileNet.predict(img, gotResults);
};
