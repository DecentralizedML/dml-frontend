import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

import createAlgorithmActions from "../duck/actions";

import StepsWrapper from "../StepsWrapperComponent";
import CreateAlgorithmStepOne from "./CreateAlgorithmStepOne";
import CreateAlgorithmStepTwo from "./CreateAlgorithmStepTwo";
import CreateAlgorithmStepThree from "./CreateAlgorithmStepThree";
import CreateAlgorithmStepFour from "./CreateAlgorithmStepFour";

const steps = [
  { component: CreateAlgorithmStepOne },
  { component: CreateAlgorithmStepTwo },
  { component: CreateAlgorithmStepThree },
  { component: CreateAlgorithmStepFour }
];

const CreateAlgorithmMain = props => {
  return (
    <StepsWrapper
      steps={steps}
      saveData={props.saveNewAlgorithmData}
      navigateNext={props.navigateNext}
      navigateBack={props.navigateBack}
      {...props}
    />
  );
};

CreateAlgorithmMain.propTypes = {};

const mapStateToProps = state => {
  const {
    currentStep,
    title,
    description,
    category,
    preProcessing,
    dataRequired,
    price,
    mlModel,
    postProcessingCode
  } = state.createAlgorithm;
  return {
    currentStep,
    title,
    description,
    category,
    preProcessing,
    dataRequired,
    price,
    mlModel,
    postProcessingCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveNewAlgorithmData: data => {
      dispatch(createAlgorithmActions.saveNewAlgorithmData(data));
    },
    navigateBack: data => {
      dispatch(createAlgorithmActions.navigateBack(data));
    },
    navigateNext: data => {
      dispatch(createAlgorithmActions.navigateNext(data));
    }
  };
};

const CreateAlgorithmMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlgorithmMain);

export default CreateAlgorithmMainContainer;
