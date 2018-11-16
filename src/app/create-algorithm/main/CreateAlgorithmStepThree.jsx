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
    input: this.props.postProcessingCode
  };

  onChange(newValue) {
    this.setState({ input: newValue });
  }

  onClickNext() {
    // Error Handling - if any
    this.props.saveData({ postProcessingCode: this.state.input });
    this.props.navigateNext();
  }

  renderEditor() {
    return (
      <AceEditor
        mode="python"
        theme="twilight"
        style={{
          backgroundColor: "#29364a",
          boxShadow: " 0 1px 4px 0 rgba(23, 34, 51, 0.4)"
        }}
        onChange={e => this.onChange(e)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={this.state.input}
        width={"100%"}
        height={"216px"}
      />
    );
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
        {this.renderEditor()}
        <Divider />
        <NavigationFooter>
          <CreateAlgorithmNavigationButton
            type="back"
            onClick={this.props.navigateBack}
          />
          <CreateAlgorithmNavigationButton
            type="next"
            onClick={() => this.onClickNext()}
          />
        </NavigationFooter>
      </Main>
    );
  }
}

CreateAlgorithmStepThree.propTypes = {};

export default CreateAlgorithmStepThree;
