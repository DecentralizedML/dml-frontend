import React from "react";
// import PropTypes from 'prop-types';
import { Row, Column } from "@kyokan/kyokan-ui";

import { SearchResultCount, SearchResultNumber } from "./UI/index";
import DropdownComponent from "./MarketPlaceHeaderDropdown";

const Topbar = props => {
  const { algorithmCount } = props;
  return (
    <Row nogutter>
      <Column xl={8.15}>
        <SearchResultCount>
          <SearchResultNumber>{algorithmCount}</SearchResultNumber>
          {algorithmCount === 1 ? " Algorithm" : " Algorithms"}
        </SearchResultCount>
      </Column>
      {/* <Column xl={3.85}>
        <DropdownComponent />
      </Column> */}
    </Row>
  );
};

Topbar.propTypes = {};

export default Topbar;
