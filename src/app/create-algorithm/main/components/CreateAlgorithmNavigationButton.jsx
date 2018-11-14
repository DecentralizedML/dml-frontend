import React from "react";

import {
  NavigationButton,
  NavigationButtonText,
  RightArrow,
  LeftArrow
} from "../UI";

import { SaveProgressButton } from "../../sidebar/UI";

const CreateAlgorithmNavigationButton = props => {
  const { type } = props;
  if (type === "back") {
    return (
      <SaveProgressButton style={{ width: "174px", margin: 0 }}>
        <LeftArrow />
        <NavigationButtonText type={"back"}>Previous Step</NavigationButtonText>
      </SaveProgressButton>
    );
  } else {
    return (
      <NavigationButton>
        <NavigationButtonText>Next Step</NavigationButtonText>
        <RightArrow />
      </NavigationButton>
    );
  }
};

CreateAlgorithmNavigationButton.propTypes = {};

export default CreateAlgorithmNavigationButton;
