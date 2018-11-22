import React from "react";
// import PropTypes from 'prop-types';

import { DropdownContainer, DropdownWrapper, Dropdown } from "../UI";

const CreateAlgorithmDropdown = props => {
  const options = [...props.options];
  const disabled = props.disabled;
  const selected = props.selected;
  return (
    <DropdownContainer
      icon="/icons/Icon-Arrow-Tip-Down-Grey.svg"
      disabled={disabled}
    >
      <DropdownWrapper>
        <Dropdown
          name="categoryDropdown"
          id="category"
          required
          onChange={e => props.onChange(e)}
          disabled={disabled}
          value={selected}
        >
          <option value="" hidden>
            {props.placeholder}
          </option>
          {options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </Dropdown>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

CreateAlgorithmDropdown.propTypes = {};

export default CreateAlgorithmDropdown;
