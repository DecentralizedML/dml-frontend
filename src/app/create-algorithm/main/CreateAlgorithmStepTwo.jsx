import React, { Component } from "react";
// import PropTypes from 'prop-types';
import ReactDropzone from "react-dropzone";
import request from "superagent";

import {
  Main,
  Headline,
  SubHeadline,
  DescriptionText,
  Divider,
  UploadAlgorithmWrapper,
  NavigationFooter,
  UploadIcon,
  DescriptionLink,
  UploadTypeDescription
} from "./UI";
import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

class CreateAlgorithmStepTwo extends Component {
  state = {
    uploading: false,
    fileName: null
  };
  onDrop = files => {
    this.setState({ uploading: true, fileName: files[0].name });
    // POST to a test endpoint for demo purposes
    const req = request.post("https://httpbin.org/post");
    files.forEach(file => {
      req.attach(file.name, file);
    });
    req.end();
  };

  dropzoneStyles = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: "center",
    width: "756px",
    height: "220px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    border: "dashed 1px rgba(110, 141, 189, 0.2)",
    marginTop: "18px",
    "&:hover": {
      cursor: "pointer"
    }
  };

  renderUpload() {
    return (
      <UploadAlgorithmWrapper>
        <SubHeadline>Running Algorithm</SubHeadline>
        <Headline>{this.state.fileName}</Headline>
        <DescriptionText>This may take several minutes</DescriptionText>
      </UploadAlgorithmWrapper>
    );
  }

  renderUploader() {
    return (
      <ReactDropzone onDrop={this.onDrop} style={this.dropzoneStyles}>
        <UploadIcon />
        <Headline style={{ fontSize: "22px", margin: "18px 0 6px 0" }}>
          Drag and drop your algorithm here
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
      </ReactDropzone>
    );
  }

  render() {
    return (
      <Main>
        <Headline>Upload machine learning algorithm</Headline>
        <DescriptionText>
          We will run your algorithm using the data you pre-processed in the
          previous step.
        </DescriptionText>
        {this.state.uploading ? this.renderUpload() : this.renderUploader()}
        <Divider />
        <NavigationFooter>
          <CreateAlgorithmNavigationButton type="back" />
          <CreateAlgorithmNavigationButton type="next" />
        </NavigationFooter>
      </Main>
    );
  }
}

CreateAlgorithmStepTwo.propTypes = {};

export default CreateAlgorithmStepTwo;
