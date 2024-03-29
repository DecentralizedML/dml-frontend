const isSwitchable = (stepNumber, state) => {
  let isSwitchable = false;
  switch (stepNumber) {
    case 0:
      isSwitchable = true;
      break;
    case 1:
      isSwitchable =
        state.title &&
        state.description &&
        state.category &&
        state.preProcessing &&
        state.price;
      break;
    case 2:
      isSwitchable =
        state.title &&
        state.description &&
        state.category &&
        state.preProcessing &&
        state.price &&
        state.mlModel;
      break;
    case 3:
      isSwitchable =
        state.title &&
        state.description &&
        state.category &&
        state.preProcessing &&
        state.price &&
        state.mlModel &&
        state.postProcessingCode;
      break;
  }
  return isSwitchable;
};

const latestStep = state => {
  const steps = 4;
  let highestStep = 0;
  for (let i = 0; i < steps; i++) {
    if (isSwitchable(i, state)) {
      highestStep = i;
    }
  }
  return highestStep;
};

export { isSwitchable, latestStep };
