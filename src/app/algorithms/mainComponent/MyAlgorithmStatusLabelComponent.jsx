import React from "react";

import {
  ContinueProgessButton,
  UnderReviewLabel,
  ApprovedLabel,
  RejectedLabel
} from "../UI";

const StatusLabel = props => {
  const labelOptions = {
    "Continue Progress": {
      component: ContinueProgessButton,
      onClick: props.onClick
    },
    "Under Review": { component: UnderReviewLabel, onClick: null },
    "Updates Under Review": { component: UnderReviewLabel, onClick: null },
    Approved: { component: ApprovedLabel, onClick: null },
    Rejected: { component: RejectedLabel, onClick: null }
  };
  const { label } = props;
  const Label = labelOptions[label] ? (
    labelOptions[label].component
  ) : (
    <div>Cannot find label component</div>
  );

  return (
    <Label {...props} onClick={labelOptions[label].onClick}>
      {label}
    </Label>
  );
};

export default StatusLabel;
