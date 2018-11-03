import React from "react";
// import PropTypes from 'prop-types';
import { Row, Column } from "@kyokan/kyokan-ui";

import { Dropdown, DropdownInner } from "./UI/index";

const DropdownComponent = props => {
  return (
    <Dropdown icon="/icons/Icon-Arrow-Tip-Down-Grey.svg">
      <DropdownInner name="mydropdown" id="gender" placeholder="Gender">
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </DropdownInner>
    </Dropdown>
  );
};

DropdownComponent.propTypes = {};

export default DropdownComponent;
