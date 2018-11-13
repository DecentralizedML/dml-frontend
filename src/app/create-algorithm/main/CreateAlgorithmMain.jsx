import React from "react";
// import PropTypes from 'prop-types';

import {
  Main,
  Headline,
  SubHeadline,
  Divider,
  InputField,
  DropdownContainer,
  DropdownWrapper,
  Dropdown,
  Option
} from "./UI";

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
      <SubHeadline>Category</SubHeadline>
      <DropdownContainer icon="/icons/Icon-Arrow-Tip-Down-Grey.svg">
        <DropdownWrapper>
          <Dropdown name="categoryDropdown" id="category">
            <Option value="" placeholder="true" disabled selected>
              Select a category
            </Option>
            <Option value="Image Recognition">Image Recognition</Option>
            <Option value="Text Analysis">Text Analysis</Option>
          </Dropdown>
        </DropdownWrapper>
      </DropdownContainer>
      <Divider />
    </Main>
  );
};

CreateAlgorithmMain.propTypes = {};

export default CreateAlgorithmMain;
