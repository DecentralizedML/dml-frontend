import React from "react";
// import PropTypes from 'prop-types';
import CreateAlgorithmStepOne from "./CreateAlgorithmStepOne";
import CreateAlgorithmStepTwo from "./CreateAlgorithmStepTwo";

const CreateAlgorithmMain = props => {
  console.log(props);
  switch (props.step) {
    case "1":
      return <CreateAlgorithmStepOne saveData={props.saveNewAlgorithmData} />;
    case "2":
      return <CreateAlgorithmStepTwo />;
    case "3":
      return <CreateAlgorithmStepOne />;
    case "4":
      return <CreateAlgorithmStepOne />;
    case "5":
      return <CreateAlgorithmStepOne />;
    default:
      return <CreateAlgorithmStepOne saveData={props.saveNewAlgorithmData} />;
  }
};

CreateAlgorithmMain.propTypes = {};

export default CreateAlgorithmMain;
