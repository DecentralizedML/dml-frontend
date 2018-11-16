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
  UploadTypeDescription,
  Row,
  Column,
  IconBox,
  FailureIcon,
  ErrorBox,
  ErrorMessage
} from "./UI";
import { StepDoneTick } from "../sidebar/UI";

import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

const dropzoneStyles = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: " center",
  justifyContent: "center",
  width: "100%",
  height: "220px",
  borderRadius: "3px",
  backgroundColor: "#ffffff",
  border: "dashed 1px rgba(110, 141, 189, 0.2)",
  marginTop: "18px",
  "&:hover": {
    cursor: "pointer"
  }
};

class CreateAlgorithmStepTwo extends Component {
  state = {
    uploaded: false,
    acceptedFileType: false,
    fileName: null,
    file: null
  };

  onClickNext() {
    // Error Handling - if any
    this.props.saveData({ mlModel: this.state.file });
    this.props.navigateNext();
  }

  checkExtension(fileName, exts) {
    return new RegExp(
      "(" + exts.join("|").replace(/\./g, "\\.") + ")$",
      "i"
    ).test(fileName);
  }

  onDrop(files) {
    const file = files[0];
    const isValid = this.checkExtension(file.name, ["bin", "h5"]);
    // const req = request.post("/upload");
    // req.attach(file.name, file);
    if (isValid) {
      // Dispatch to Redux
      this.setState({
        uploaded: true,
        acceptedFileType: isValid,
        fileName: file.name,
        file: file
      });
    } else {
      this.setState({
        uploaded: true,
        acceptedFileType: isValid
      });
    }
    // req.end(callback);
  }

  renderUploader() {
    return (
      <ReactDropzone
        onDrop={files => this.onDrop(files)}
        style={dropzoneStyles}
      >
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

  renderUpload() {
    return (
      <UploadAlgorithmWrapper>
        <SubHeadline>Running Algorithm</SubHeadline>
        <Headline>{this.state.fileName}</Headline>
        <DescriptionText>This may take several minutes</DescriptionText>
      </UploadAlgorithmWrapper>
    );
  }

  renderUploadSuccess() {
    return (
      <UploadAlgorithmWrapper>
        <Row>
          <Column />
          <IconBox>
            <StepDoneTick
              style={{
                width: "24px",
                height: "18px"
              }}
            />
          </IconBox>
          <Column>
            <Headline>Algorithm processed successfully!</Headline>
            <DescriptionText style={{ fontSize: "15px" }}>
              You can proceed to the next step.
            </DescriptionText>
          </Column>
        </Row>
      </UploadAlgorithmWrapper>
    );
  }

  renderUploadFailure() {
    return (
      <ReactDropzone
        onDrop={files => this.onDrop(files)}
        style={{
          ...this.dropzoneStyles,
          border: "solid 1px rgba(110, 141, 189, 0.2)"
        }}
      >
        <Row style={{ margin: "50px 0" }}>
          <Column />
          <IconBox>
            <FailureIcon />
          </IconBox>
          <Column>
            <Headline>An error occurred processing your algorithm</Headline>
            <DescriptionText style={{ fontSize: "15px" }}>
              Please review your algorithm and
              <DescriptionLink>upload again</DescriptionLink>
            </DescriptionText>
          </Column>
        </Row>
        <ErrorBox>
          <SubHeadline style={{ margin: "0" }}>Error Details</SubHeadline>
          {/* Loop through the errors once you receive them */}
          <ErrorMessage>
            ERROR: Incorrect file type. Valid types: .bin, .h5
          </ErrorMessage>
        </ErrorBox>
      </ReactDropzone>
    );
  }

  renderResult() {
    return this.state.acceptedFileType
      ? this.renderUploadSuccess()
      : this.renderUploadFailure();
  }

  render() {
    return (
      <Main>
        <Headline>Upload machine learning algorithm</Headline>
        <DescriptionText>
          We will run your algorithm using the data you pre-processed in the
          previous step.
        </DescriptionText>
        {this.state.uploaded ? this.renderResult() : this.renderUploader()}
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

CreateAlgorithmStepTwo.propTypes = {};

export default CreateAlgorithmStepTwo;
