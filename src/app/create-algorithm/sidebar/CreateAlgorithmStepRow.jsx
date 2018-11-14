import React from "react";
// import PropTypes from 'prop-types';

import {
  StepRow,
  StepNumberWrapperActive,
  StepNumberWrapperInactive,
  StepNumberWrapperDone,
  StepNumber,
  StepTitle,
  StepDoneTick
} from "./UI";

const CreateAlgorithmStepRow = props => {
  console.log(props);
  if (Number(props.currentStep) === Number(props.stepNumber)) {
    return (
      <StepRow>
        <StepNumberWrapperActive>
          <StepNumber active={true}>{props.stepNumber}</StepNumber>
        </StepNumberWrapperActive>
        <StepTitle active={props.active}>{props.stepTitle}</StepTitle>
      </StepRow>
    );
  } else if (Number(props.currentStep) > Number(props.stepNumber)) {
    return (
      <StepRow>
        <StepNumberWrapperDone>
          <StepDoneTick />
        </StepNumberWrapperDone>
        <StepTitle active={props.active}>{props.stepTitle}</StepTitle>
      </StepRow>
    );
  } else {
    return (
      <StepRow>
        <StepNumberWrapperInactive>
          <StepNumber>{props.stepNumber}</StepNumber>
        </StepNumberWrapperInactive>
        <StepTitle active={props.active}>{props.stepTitle}</StepTitle>
      </StepRow>
    );
  }
};

CreateAlgorithmStepRow.propTypes = {};

export default CreateAlgorithmStepRow;
