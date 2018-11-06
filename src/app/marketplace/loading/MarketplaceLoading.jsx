import React from "react";

import { LoadingContainer, LoadingText } from "./UI/index";

// TODO: Add Search Functionality

const Loading = props => {
  return (
    <LoadingContainer>
      <LoadingText>Loading Algorithms</LoadingText>
    </LoadingContainer>
  );
};

Loading.propTypes = {};

export default Loading;
