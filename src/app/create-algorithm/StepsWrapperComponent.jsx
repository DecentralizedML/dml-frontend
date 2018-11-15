import React from "react";
import { connect } from "react-redux";

const StepsWrapper = props => {
  const { steps, currentStep } = props;
  const Step = steps[currentStep].component;

  return Step ? <Step {...props} /> : <div>Cannot find step component</div>;
};

const mapStateToProps = state => {
  const { currentStep } = state.createAlgorithm;
  return {
    currentStep
  };
};

const StepsWrapperComponent = connect(mapStateToProps)(StepsWrapper);

export default StepsWrapperComponent;
