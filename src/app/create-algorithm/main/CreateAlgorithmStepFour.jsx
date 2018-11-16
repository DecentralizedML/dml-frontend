import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/python";
import "brace/theme/twilight";

import {
  Row,
  Column,
  Main,
  Headline,
  SubHeadline,
  TitleText,
  Divider,
  DescriptionText,
  SectionRow,
  SectionColumn,
  NavigationFooter,
  IconBox,
  DMLContainer,
  DMLLogo,
  DMLText,
  CodeEditorHeader,
  CodeEditorDivider,
  CodeEditorHeaderText
} from "./UI";

import { StepDoneTick } from "../sidebar/UI";

import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

class CreateAlgorithmStepFour extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    category: this.props.category,
    preProcessing: this.props.preProcessing,
    dataRequired: this.props.dataRequired,
    price: this.props.price,
    currentStep: this.props.currentStep,
    mlModel: this.props.mlModel,
    postProcessingCode: this.props.postProcessingCode
  };

  renderEditor() {
    return (
      <AceEditor
        mode="python"
        theme="twilight"
        style={{
          backgroundColor: "#29364a",
          boxShadow: " 0 1px 4px 0 rgba(23, 34, 51, 0.4)"
        }}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={this.props.postProcessingCode}
        width={"100%"}
        height={"216px"}
        readOnly={true}
      />
    );
  }

  saveFinalStep() {
    // TODO: ERROR HANDLINE
    // Process the data and verify it
    // Save potential Error Messages to Redux
    this.props.saveData(this.state);
    // send it off to API?
  }

  render() {
    return (
      <Main>
        <Row style={{ justifyContent: "flex-start" }}>
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
            <Headline>Everything is set!</Headline>
            <DescriptionText style={{ fontSize: "15px" }}>
              You can doublecheck that all is in order and submit your algorithm
              for review.
            </DescriptionText>
          </Column>
        </Row>
        <Divider />
        <Headline>Algorithm overview</Headline>
        <SectionRow>
          <SectionColumn>
            <SubHeadline>Title</SubHeadline>
            <TitleText>{this.props.title}</TitleText>
          </SectionColumn>
          <SectionColumn>
            <SubHeadline>Category</SubHeadline>
            <TitleText>{this.props.category}</TitleText>
          </SectionColumn>
        </SectionRow>
        <SectionRow>
          <SectionColumn>
            <SubHeadline>Description</SubHeadline>
            <TitleText>{this.props.description}</TitleText>
          </SectionColumn>
          <SectionColumn>
            <SubHeadline>Data Required</SubHeadline>
            <TitleText>
              {this.props.dataRequired.length > 0
                ? this.props.dataRequired.join(", ")
                : "Not specified"}
            </TitleText>
          </SectionColumn>
        </SectionRow>
        <SectionRow>
          <SectionColumn>
            <SubHeadline>Per Device fee</SubHeadline>
            <Row style={{ justifyContent: "flex-start" }}>
              <TitleText style={{ fontSize: "18px" }}>
                {this.props.price}
              </TitleText>
              <DMLContainer style={{ position: "static", margin: "0 12px" }}>
                <DMLLogo />
                <DMLText>DML</DMLText>
              </DMLContainer>
            </Row>
          </SectionColumn>
          <SectionColumn>
            <SubHeadline>Pre Processing Setting</SubHeadline>
            <TitleText>{this.props.preProcessing}</TitleText>
          </SectionColumn>
        </SectionRow>
        <Divider />
        <Headline>Post Processing Code</Headline>
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
            type="submit"
            onClick={() => this.saveFinalStep()}
          />
        </NavigationFooter>
      </Main>
    );
  }
}

CreateAlgorithmStepFour.propTypes = {};

export default withRouter(CreateAlgorithmStepFour);
