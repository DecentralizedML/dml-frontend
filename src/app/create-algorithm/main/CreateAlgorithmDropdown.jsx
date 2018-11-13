import React from "react";
// import PropTypes from 'prop-types';

import { DropdownContainer, DropdownWrapper, Dropdown } from "./UI";

const CreateAlgorithmDropdown = props => {
  return (
    <DropdownContainer icon="/icons/Icon-Arrow-Tip-Down-Grey.svg">
      <DropdownWrapper>
        <Dropdown name="categoryDropdown" id="category" required>
          <option value="" hidden>
            Select a category
          </option>
          <option value="Image Recognition">Image Recognition</option>
          <option value="Text Analysis">Text Analysis</option>
        </Dropdown>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

CreateAlgorithmDropdown.propTypes = {};

export default CreateAlgorithmDropdown;
