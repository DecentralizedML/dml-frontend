import React from "react";

import {
  ContinueProgessButton,
  UnderReviewLabel,
  ApprovedLabel,
  RejectedLabel
} from "../UI";

const StatusLabel = props => {
  const labelOptions = {
    "Continue Progress": ContinueProgessButton,
    "Under Review": UnderReviewLabel,
    "Updates Under Review": UnderReviewLabel,
    Approved: ApprovedLabel,
    Rejected: RejectedLabel
  };
  const { label } = props;
  const Label = labelOptions[label];

  return Label ? (
    <Label {...props}>{label}</Label>
  ) : (
    <div>Cannot find label component</div>
  );
};

export default StatusLabel;
