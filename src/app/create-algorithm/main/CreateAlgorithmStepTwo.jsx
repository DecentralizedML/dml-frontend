import React from "react";
// import PropTypes from 'prop-types';

import {
  Main,
  Headline,
  DescriptionText,
  Divider,
  UploadAlgorithmWrapper,
  NavigationFooter,
  UploadIcon,
  DescriptionLink,
  UploadTypeDescription
} from "./UI";
import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

const CreateAlgorithmStepTwo = props => {
  return (
    <Main>
      <Headline>Upload machine learning algorithm</Headline>
      <DescriptionText>
        We will run your algorithm using the data you pre-processed in the
        previous step.
      </DescriptionText>
      <UploadAlgorithmWrapper>
        <UploadIcon />
        <Headline style={{ fontSize: "22px", margin: "18px 0 6px 0" }}>
          Drag & drop your algorithm here
        </Headline>
        <DescriptionText style={{ fontSize: "15px" }}>
          or you can also
          <DescriptionLink>browse your files</DescriptionLink>
        </DescriptionText>
        <DescriptionText
          style={{
            fontSize: "12px",
            textAlign: "right",
            width: "100%",
            margin: "32px 16px 0 0"
          }}
        >
          supported file types:
          <UploadTypeDescription> .bin .h5</UploadTypeDescription>
        </DescriptionText>
      </UploadAlgorithmWrapper>
      <Divider />
      <NavigationFooter>
        <CreateAlgorithmNavigationButton type="back" />
        <CreateAlgorithmNavigationButton type="next" />
      </NavigationFooter>
    </Main>
  );
};

CreateAlgorithmStepTwo.propTypes = {};

export default CreateAlgorithmStepTwo;
