import React from "react";
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
import CreateAlgorithmDropdown from "./CreateAlgorithmDropdown";
import CreateAlgorithmCheckboxDropdown from "./CreateAlgorithmCheckboxDropdown";

const CreateAlgorithmMain = props => {
  return (
    <Main>
      <Headline>Algorithm information</Headline>
      <SubHeadline>Title</SubHeadline>
      <InputField placeholder="Add a short title" type="text" />
      <SubHeadline>Description</SubHeadline>
      <InputField
        placeholder="Add a short, one sentence description"
        type="text"
      />
      <DropdownSectionRow>
        <DropdownSectionColumn>
          <SubHeadline>Category</SubHeadline>
          <CreateAlgorithmDropdown />
        </DropdownSectionColumn>
        <DropdownSectionColumn>
          <SubHeadline>Data Required</SubHeadline>
          <CreateAlgorithmCheckboxDropdown />
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
        />
        <DMLContainer>
          <DMLLogo />
          <DMLText>DML</DMLText>
        </DMLContainer>
      </div>
      <Divider />
      <NextButton>
        <NextButtonText>Next Step</NextButtonText>
        <RightArrow />
      </NextButton>
    </Main>
  );
};

CreateAlgorithmMain.propTypes = {};

export default CreateAlgorithmMain;
