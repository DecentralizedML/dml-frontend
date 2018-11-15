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
import StepsWrapper from "../StepsWrapperComponent";
import CreateAlgorithmStepRow from "./CreateAlgorithmStepRow";
import CreateAlgorithmDividerRow from "./CreateAlgorithmDividerRow";

const CreateAlgorithmSidebar = props => {
  const steps = [
    { stepTitle: "Information", component: CreateAlgorithmStepRow },
    { stepTitle: "Algorithm Upload", component: CreateAlgorithmStepRow },
    { stepTitle: "Post-Processing", component: CreateAlgorithmStepRow },
    { stepTitle: "Submit", component: CreateAlgorithmStepRow }
  ];
  return (
    <Sidebar>
      {steps.map(({ stepTitle }, index) => {
        return (
          <div key={index}>
            <StepsWrapper
              steps={steps}
              stepNumber={index + 1}
              stepTitle={stepTitle}
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
