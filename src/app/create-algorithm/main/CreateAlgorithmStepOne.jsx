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
  SectionRow,
  SectionColumn,
  DMLContainer,
  DMLLogo,
  DMLText
} from "./UI";
import CreateAlgorithmDropdown from "./components/CreateAlgorithmDropdown";
import CreateAlgorithmCheckboxDropdown from "./components/CreateAlgorithmCheckboxDropdown";
import CreateAlgorithmNavigationButton from "./components/CreateAlgorithmNavigationButton";

class CreateAlgorithmStepOne extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    category: this.props.category,
    preProcessing: this.props.preProcessing,
    dataRequired: this.props.dataRequired,
    price: this.props.price,
    currentStep: this.props.currentStep
  };

  redirectToNextStep() {
    // TODO: ERROR HANDLINE
    // Process the data and verify it
    // Save potential Error Messages to Redux
    if (this.validateInput()) {
      this.props.saveData(this.state);
      this.props.navigateNext();
    }
  }

  validateInput() {
    return (
      this.state.title &&
      this.state.description &&
      this.state.category &&
      this.state.preProcessing &&
      this.state.price
    );
  }

  renderPreprocessingDropdown() {
    if (this.state.category === "Text Analysis") {
      return (
        <CreateAlgorithmDropdown
          placeholder={"Select a pre processing option"}
          options={["200 words", "500 words", "1000 words"]}
          onChange={e => this.setState({ preProcessing: e.target.value })}
          selected={this.state.preProcessing}
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
          onChange={e => this.setState({ preProcessing: e.target.value })}
          selected={this.state.preProcessing}
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
          value={this.state.title}
        />
        <SubHeadline>Description</SubHeadline>
        <InputField
          placeholder="Add a short, one sentence description"
          type="text"
          onChange={e => this.setState({ description: e.target.value })}
          value={this.state.description}
        />
        <SectionRow>
          <SectionColumn>
            <SubHeadline>Category</SubHeadline>
            <CreateAlgorithmDropdown
              selected={this.state.category}
              placeholder={"Select a category"}
              options={["Image Recognition", "Text Analysis"]}
              onChange={e => this.setState({ category: e.target.value })}
            />
          </SectionColumn>
          <SectionColumn>
            <SubHeadline>Pre Processing</SubHeadline>
            {this.renderPreprocessingDropdown()}
          </SectionColumn>
        </SectionRow>
        <SubHeadline>Data Required</SubHeadline>
        <CreateAlgorithmCheckboxDropdown
          selection={this.state.dataRequired}
          onChange={data => this.setState({ dataRequired: data })}
          selection={this.state.dataRequired}
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
            onChange={e => {
              const input = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1");

              this.setState({ price: input });
            }}
            value={this.state.price}
          />
          <DMLContainer>
            <DMLLogo />
            <DMLText>DML</DMLText>
          </DMLContainer>
        </div>
        <Divider />
        <CreateAlgorithmNavigationButton
          type="next"
          onClick={this.redirectToNextStep.bind(this)}
          disabled={!this.validateInput()}
        />
      </Main>
    );
  }
}

CreateAlgorithmStepOne.propTypes = {};

export default withRouter(CreateAlgorithmStepOne);
