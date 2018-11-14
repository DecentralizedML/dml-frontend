import React from "react";
// import PropTypes from 'prop-types';

import {
  Main,
  Headline,
  SubHeadline,
  Divider,
  NextButton,
  NextButtonText,
  RightArrow
} from "./UI";

const CreateAlgorithmStepTwo = props => {
  return (
    <Main>
      <Headline>Algorithm information</Headline>
      <Divider />
      <NextButton>
        <NextButtonText>Next Step</NextButtonText>
        <RightArrow />
      </NextButton>
    </Main>
  );
};

CreateAlgorithmStepTwo.propTypes = {};

export default CreateAlgorithmStepTwo;
