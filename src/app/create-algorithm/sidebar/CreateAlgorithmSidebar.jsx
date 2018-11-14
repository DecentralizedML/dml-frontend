import React from "react";
// import PropTypes from 'prop-types';

import {
  Sidebar,
  Divider,
  SaveProgressText,
  SaveProgressButton,
  SaveProgressButtonText,
  DeleteAlgorithmButton
} from "./UI";
import CreateAlgorithmStepRow from "./CreateAlgorithmStepRow";
import CreateAlgorithmDividerRow from "./CreateAlgorithmDividerRow";

const CreateAlgorithmSidebar = props => {
  return (
    <Sidebar>
      <CreateAlgorithmStepRow
        stepNumber="1"
        stepTitle="Information"
        currentStep={props.currentStep}
      />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow
        stepNumber="2"
        stepTitle="Algorithm Upload"
        currentStep={props.currentStep}
      />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow
        stepNumber="3"
        stepTitle="Post-Processing"
        currentStep={props.currentStep}
      />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow
        stepNumber="4"
        stepTitle="Submit"
        currentStep={props.currentStep}
      />
      <Divider />
      <SaveProgressText>
        Saving your progress allows you to continue at a later date.
      </SaveProgressText>
      <SaveProgressButton>
        <SaveProgressButtonText>Save Progress</SaveProgressButtonText>
      </SaveProgressButton>
      <Divider />
      <DeleteAlgorithmButton>Delete Algorithm</DeleteAlgorithmButton>
    </Sidebar>
  );
};

CreateAlgorithmSidebar.propTypes = {};

export default CreateAlgorithmSidebar;
