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
  const steps = [
    { stepTitle: "Information" },
    { stepTitle: "Algorithm Upload" },
    { stepTitle: "Post-Processing" },
    { stepTitle: "Submit" }
  ];
  return (
    <Sidebar>
      {steps.map(({ stepTitle }, index) => {
        return (
          <div>
            <CreateAlgorithmStepRow
              stepNumber={index + 1}
              stepTitle={stepTitle}
              currentStep={props.currentStep}
            />
            {index < steps.length - 1 && <CreateAlgorithmDividerRow />}
          </div>
        );
      })}
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
