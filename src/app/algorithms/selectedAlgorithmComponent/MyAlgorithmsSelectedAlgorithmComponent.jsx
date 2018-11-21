import React from "react";
import { connect } from "react-redux";

import {
  Background,
  ModalCard,
  CloseIconContainer,
  CloseIcon,
  Row
} from "../UI";
import {
  Headline,
  SubHeadline,
  InputField
} from "../../create-algorithm/main/UI";

import StepsWrapper from "../../create-algorithm/StepsWrapperComponent";
import EditAlgorithmStepOne from ".EditAlgorithmStepOne";
import EditAlgorithmStepTwo from "./EditAlgorithmStepTwo";
import EditAlgorithmStepThree from "./EditAlgorithmStepThree";
import EditAlgorithmStepFour from "./EditAlgorithmStepFour";

const steps = [
  { component: EditAlgorithmStepOne },
  { component: EditAlgorithmStepTwo },
  { component: EditAlgorithmStepThree },
  { component: EditAlgorithmStepFour }
];

const SelectedAlgorithm = props => {
  return (
    <Background>
      <ModalCard>
        <CloseIconContainer onClick={props.handleClose}>
          <CloseIcon />
        </CloseIconContainer>
        <Headline>Edit Algorithm</Headline>
        <Row style={{ margin: "20px 0 10px 0" }}> Options </Row>
        <StepsWrapper
          steps={steps}
          saveData={props.saveNewAlgorithmData}
          navigateNext={props.navigateNext}
          navigateBack={props.navigateBack}
          {...props}
        />
      </ModalCard>
    </Background>
  );
};

SelectedAlgorithm.propTypes = {};

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
    mlModelFileName,
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
    mlModelFileName,
    postProcessingCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // saveNewAlgorithmData: data => {
    //   dispatch(createAlgorithmActions.saveNewAlgorithmData(data));
    // }
  };
};

const SelectedAlgorithmContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedAlgorithm);

export default SelectedAlgorithmContainer;
