import React from "react";
// import PropTypes from 'prop-types';
import CreateAlgorithmStepOne from "./CreateAlgorithmStepOne";
import CreateAlgorithmStepTwo from "./CreateAlgorithmStepTwo";

const CreateAlgorithmMain = props => {
  switch (props.currentStep) {
    case 1:
      return (
        <CreateAlgorithmStepOne
          saveData={props.saveNewAlgorithmData}
          currentStep={props.currentStep}
        />
      );
    case 2:
      return (
        <CreateAlgorithmStepTwo
          saveData={props.saveNewAlgorithmData}
          currentStep={props.currentStep}
        />
      );
    case 3:
      return (
        <CreateAlgorithmStepOne
          saveData={props.saveNewAlgorithmData}
          currentStep={props.currentStep}
        />
      );
    case 4:
      return (
        <CreateAlgorithmStepOne
          saveData={props.saveNewAlgorithmData}
          currentStep={props.currentStep}
        />
      );
    default:
      return (
        <CreateAlgorithmStepOne
          saveData={props.saveNewAlgorithmData}
          currentStep={props.currentStep}
        />
      );
  }
};

CreateAlgorithmMain.propTypes = {};

export default CreateAlgorithmMain;
