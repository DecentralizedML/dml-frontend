import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/python";
import "brace/theme/twilight";
// import PropTypes from 'prop-types';

import {
  Main,
  Headline,
  DescriptionText,
  Divider,
  NavigationFooter,
  CodeEditorHeader,
  CodeEditorHeaderText,
  CodeEditorDivider
} from "./UI";

import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

class CreateAlgorithmStepThree extends Component {
  state = {
    uploading: false,
    fileName: null
  };

  onChange(newValue) {
    console.log("change", newValue);
  }

  render() {
    return (
      <Main>
        <Headline>Write post-processing code</Headline>
        <DescriptionText>
          Write the code that will prepare data to be received by users.
        </DescriptionText>
        <CodeEditorHeader>
          <CodeEditorHeaderText>Code</CodeEditorHeaderText>
          <CodeEditorDivider />
          <CodeEditorHeaderText>Python 3.7.0</CodeEditorHeaderText>
        </CodeEditorHeader>
        <AceEditor
          mode="python"
          theme="twilight"
          style={{ backgroundColor: "#29364a" }}
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width={"100%"}
          height={"216px"}
        />
        <Divider />
        <NavigationFooter>
          <CreateAlgorithmNavigationButton
            type="back"
            onClick={this.props.navigateBack}
          />
          <CreateAlgorithmNavigationButton
            type="next"
            onClick={this.props.navigateNext}
          />
        </NavigationFooter>
      </Main>
    );
  }
}

CreateAlgorithmStepThree.propTypes = {};

export default CreateAlgorithmStepThree;
