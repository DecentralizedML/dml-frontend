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
        active="true"
        stepTitle="Information"
      />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow stepNumber="2" stepTitle="Pre-Processing" />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow stepNumber="3" stepTitle="Algorithm Upload" />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow stepNumber="4" stepTitle="Post-Processing" />
      <CreateAlgorithmDividerRow />
      <CreateAlgorithmStepRow stepNumber="5" stepTitle="Submit" />
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
