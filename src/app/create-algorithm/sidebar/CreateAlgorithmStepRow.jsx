import React from "react";
// import PropTypes from 'prop-types';

import {
  StepRow,
  StepNumberWrapperActive,
  StepNumberWrapperInactive,
  StepNumber,
  StepTitle
} from "./UI";

const CreateAlgorithmStepRow = props => {
  return (
    <StepRow>
      {props.active ? (
        <StepNumberWrapperActive>
          <StepNumber active={props.active}>{props.stepNumber}</StepNumber>
        </StepNumberWrapperActive>
      ) : (
        <StepNumberWrapperInactive>
          <StepNumber>{props.stepNumber}</StepNumber>
        </StepNumberWrapperInactive>
      )}
      <StepTitle active={props.active}>{props.stepTitle}</StepTitle>
    </StepRow>
  );
};

CreateAlgorithmStepRow.propTypes = {};

export default CreateAlgorithmStepRow;
