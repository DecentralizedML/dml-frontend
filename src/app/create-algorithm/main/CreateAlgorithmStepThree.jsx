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
    if (this.validateInput()) {
      this.props.saveData({
        postProcessingCode: this.state.input,
        readyToSubmit: true
      });
      this.props.navigateNext();
    }
  }

  validateInput() {
    return this.state.input.length > 0;
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
        name="code_editor"
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
