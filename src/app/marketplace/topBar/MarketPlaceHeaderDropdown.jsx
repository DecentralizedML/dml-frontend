import React from "react";
// import PropTypes from 'prop-types';
import { Row, Column } from "@kyokan/kyokan-ui";

import {
  Dropdown,
  DropdownContainer,
  DropdownWrapper,
  Option,
  Description
} from "./UI/index";

const DropdownComponent = props => {
  return (
    <DropdownContainer icon="/icons/Icon-Arrow-Tip-Down-Grey.svg">
      <DropdownWrapper>
        <Description>Sort By: </Description>
        <Dropdown name="mydropdown" id="gender" placeholder="Gender">
          <Option value="">Price</Option>
          <Option value="Downloads">Downloads</Option>
          <Option value="Rating">Rating</Option>
        </Dropdown>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

DropdownComponent.propTypes = {};

export default DropdownComponent;
