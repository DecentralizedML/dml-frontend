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
  NextButton,
  NextButtonText,
  RightArrow
} from "./UI";
import CreateAlgorithmDropdown from "./components/CreateAlgorithmDropdown";
import CreateAlgorithmCheckboxDropdown from "./components/CreateAlgorithmCheckboxDropdown";

class CreateAlgorithmStepOne extends Component {
  state = {
    title: null,
    description: null,
    category: null,
    dataRequired: [],
    price: null
  };

  redirectToStep2() {
    // Process the data and verify it
    // Save it to redux
    this.props.saveData(this.state);
    this.props.history.push(`/create-algorithm/${2}`);
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
              onChange={(e => this.setState({ category: e.target.value })).bind(
                this
              )}
            />
          </DropdownSectionColumn>
          <DropdownSectionColumn>
            <SubHeadline>Data Required</SubHeadline>
            <CreateAlgorithmCheckboxDropdown
              selection={this.state.dataRequired}
              onChange={(data => this.setState({ dataRequired: data })).bind(
                this
              )}
            />
          </DropdownSectionColumn>
        </DropdownSectionRow>
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
        <NextButton onClick={this.redirectToStep2.bind(this)}>
          <NextButtonText>Next Step</NextButtonText>
          <RightArrow />
        </NextButton>
      </Main>
    );
  }
}

CreateAlgorithmStepOne.propTypes = {};

export default withRouter(CreateAlgorithmStepOne);
