//label and probability paragraph objects
let labelP, probabilityP;

/**
 * Callback for image classifier - logs model is loaded
 */
const modelLoaded = () => {
  console.log("model is loaded");
};

/**
 *
 * @param {*} error
 * @param {*} results
 */
const gotResults = (error, results) => {
  //check no errors
  if (error) {
    console.error(error);
    return;
  }

  //store results
  const label = results[0].label;
  const probability = Number(results[0].confidence).toFixed(2);

  //display results in label and probability paragraph
  if (!labelP && !probabilityP) {
    console.log("labelP and probabilityP are empty");
    labelP = createP(label);
    probabilityP = createP(`probability: ${probability}`);
    return;
  }
  labelP.html(label);
  probabilityP.html(probability);
};
