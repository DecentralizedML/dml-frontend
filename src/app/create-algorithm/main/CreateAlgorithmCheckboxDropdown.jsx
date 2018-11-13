import React, { Component } from "react";
// import PropTypes from 'prop-types';

import {
  DropdownContainer,
  DropdownWrapper,
  Dropdown,
  OptionsWrapper,
  DropdownSectionRow,
  Checkbox,
  DataLabel
} from "./UI";

class CreateAlgorithmCheckboxDropdown extends Component {
  state = {
    display: false,
    dataOptions: ["GPS Location", "Photos", "SMS"],
    selection: []
  };

  showCheckboxes = () => {
    this.setState({ display: !this.state.display });
  };

  showOptions = () => {
    return (
      <OptionsWrapper>
        {this.state.dataOptions.map((option, index) => {
          return this.renderRow(option, index);
        })}
      </OptionsWrapper>
    );
  };

  renderRow = (option, index) => {
    return (
      <DropdownSectionRow key={index}>
        <DataLabel>
          <Checkbox
            type="checkbox"
            id={option}
            checked={this.state.selection.includes(option)}
            onClick={e => this.handleCheckboxSelection(e)}
          />
          {option}
        </DataLabel>
      </DropdownSectionRow>
    );
  };

  handleCheckboxSelection = e => {
    let selection = this.state.selection;
    if (e.target.checked) {
      selection = [...selection, e.target.id];
    } else {
      const index = selection.indexOf(e.target.id);
      selection.splice(index, 1);
    }
    this.setState({ selection: selection });
  };

  renderSelection = () => {
    return this.state.selection.join(", ");
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <DropdownContainer icon="/icons/Icon-Arrow-Tip-Down-Grey.svg">
          <DropdownWrapper>
            <Dropdown
              name="dataDropdown"
              id="data"
              onClick={this.showCheckboxes}
              required={this.state.selection.length < 1 && "false"}
            >
              <option value="" hidden>
                {this.state.selection.length < 1
                  ? "Select required data"
                  : this.renderSelection()}
              </option>
            </Dropdown>
          </DropdownWrapper>
        </DropdownContainer>
        {this.state.display && this.showOptions()}
      </div>
    );
  }
}

CreateAlgorithmCheckboxDropdown.propTypes = {};

export default CreateAlgorithmCheckboxDropdown;
