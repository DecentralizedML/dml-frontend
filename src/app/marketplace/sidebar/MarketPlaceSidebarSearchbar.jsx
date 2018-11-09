import React from "react";
import styled from "styled-components";
import { Column } from "@kyokan/kyokan-ui";

import { SearchBox, SearchInput, SearchIcon } from "./UI/index";

// TODO: Add Search Functionality

const Searchbar = props => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        name="search"
        placeholder="Search algorithms"
        onChange={props.onChange}
      />
      <SearchIcon icon="/Icons/Icon-Search-Grey.svg" />
    </SearchBox>
  );
};

Searchbar.propTypes = {};

export default Searchbar;
