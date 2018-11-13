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
  DropdownSectionRow,
  DropdownSectionColumn
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
    </Main>
  );
};

CreateAlgorithmMain.propTypes = {};

export default CreateAlgorithmMain;
