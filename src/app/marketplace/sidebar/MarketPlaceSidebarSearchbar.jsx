import React from "react";
import { Column } from "@kyokan/kyokan-ui";

import { SearchBox, SearchInput, SearchIcon } from "./UI/index";

// TODO: Add Search Functionality

const Searchbar = props => {
  return (
    <SearchBox>
      <Column xl={9.5}>
        <SearchInput
          type="text"
          name="search"
          placeholder="Search algorithms"
        />
      </Column>
      <Column xl={2.5}>
        <SearchIcon icon="/Icons/Icon-Search-Grey.svg" />
      </Column>
    </SearchBox>
  );
};

Searchbar.propTypes = {};

export default Searchbar;
