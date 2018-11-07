import React from "react";

import { EmptyStateContainer, EmptyStateText } from "./UI/index";

const EmptyState = props => {
  return (
    <EmptyStateContainer>
      <EmptyStateText>
        {props.loading
          ? "Loading algorithms."
          : "No algorithms found. Please try another search."}
      </EmptyStateText>
    </EmptyStateContainer>
  );
};

EmptyState.propTypes = {};

export default EmptyState;
