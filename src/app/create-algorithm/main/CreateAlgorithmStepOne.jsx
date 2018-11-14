import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';

import {
  Main,
  Headline,
  SubHeadline,
  Divider,
  InputField,
  DescriptionText,
  DropdownSectionRow,
  DropdownSectionColumn,
  DMLContainer,
  DMLLogo,
  DMLText,
  NavigationButton,
  NavigationButtonText,
  RightArrow
} from "./UI";
import CreateAlgorithmDropdown from "./components/CreateAlgorithmDropdown";
import CreateAlgorithmCheckboxDropdown from "./components/CreateAlgorithmCheckboxDropdown";

class CreateAlgorithmStepOne extends Component {
  state = {
    title: null,
    description: null,
    category: null,
    preProcessing: null,
    dataRequired: [],
    price: null,
    currentStep: this.props.currentStep
  };

  redirectToNextStep() {
    // Process the data and verify it
    // Save it to redux
    const output = {
      ...this.state,
      currentStep: Number(this.state.currentStep) + 1
    };
    this.props.saveData(output);
  }

  renderPreprocessingDropdown() {
    if (this.state.category === "Text Analysis") {
      return (
        <CreateAlgorithmDropdown
          placeholder={"Select a pre processing option"}
          options={["200 words", "500 words", "1000 words"]}
          onChange={(e =>
            this.setState({ preProcessing: e.target.value })).bind(this)}
        />
      );
    } else if (this.state.category === "Image Recognition") {
      return (
        <CreateAlgorithmDropdown
          placeholder={"Select a pre processing option"}
          options={[
            "300 x 300 pixels",
            "500 x 500 pixels",
            "1000 x 1000 pixels"
          ]}
          onChange={(e =>
            this.setState({ preProcessing: e.target.value })).bind(this)}
        />
      );
    } else
      return (
        <CreateAlgorithmDropdown
          placeholder={"Select a category first"}
          options={[]}
          disabled={true}
        />
      );
  }

  render() {
    return (
      <Main>
        <Headline>Algorithm information</Headline>
        <SubHeadline>Title</SubHeadline>
        <InputField
          placeholder="Add a short title"
          type="text"
          onChange={e => this.setState({ title: e.target.value })}
        />
        <SubHeadline>Description</SubHeadline>
        <InputField
          placeholder="Add a short, one sentence description"
          type="text"
          onChange={e => this.setState({ description: e.target.value })}
        />
        <DropdownSectionRow>
          <DropdownSectionColumn>
            <SubHeadline>Category</SubHeadline>
            <CreateAlgorithmDropdown
              placeholder={"Select a category"}
              options={["Image Recognition", "Text Analysis"]}
              onChange={(e => this.setState({ category: e.target.value })).bind(
                this
              )}
            />
          </DropdownSectionColumn>
          <DropdownSectionColumn>
            <SubHeadline>Pre Processing</SubHeadline>
            {this.renderPreprocessingDropdown()}
          </DropdownSectionColumn>
        </DropdownSectionRow>
        <SubHeadline>Data Required</SubHeadline>
        <CreateAlgorithmCheckboxDropdown
          selection={this.state.dataRequired}
          onChange={(data => this.setState({ dataRequired: data })).bind(this)}
        />
        <Divider />
        <Headline>Set a Price</Headline>
        <DescriptionText>
          This is the value you get each time your algorithm runs on a device.
        </DescriptionText>
        <SubHeadline>Per Device fee</SubHeadline>
        <div style={{ position: "relative", width: "366px" }}>
          <InputField
            placeholder="e.g. 1"
            type="text"
            style={{ height: "48px" }}
            onChange={e => this.setState({ price: Number(e.target.value) })}
          />
          <DMLContainer>
            <DMLLogo />
            <DMLText>DML</DMLText>
          </DMLContainer>
        </div>
        <Divider />
        <NavigationButton onClick={this.redirectToNextStep.bind(this)}>
          <NavigationButtonText>Next Step</NavigationButtonText>
          <RightArrow />
        </NavigationButton>
      </Main>
    );
  }
}

CreateAlgorithmStepOne.propTypes = {};

export default withRouter(CreateAlgorithmStepOne);
