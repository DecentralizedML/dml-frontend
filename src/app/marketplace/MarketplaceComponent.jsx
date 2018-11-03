import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

import { Column, Grid, Row } from "@kyokan/kyokan-ui";

import DMLSiteHeader from "../dml-site-header";
import JobCard from "./jobCard/MarketplaceJobCardComponent";
import Sidebar from "./sidebar/MarketplaceSidebarComponent";
import Topbar from "./topBar/MarketPlaceHeaderComponent";

const data = [1, 2, 3, 4, 5, 6, 7];

const Marketplace = props => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <DMLSiteHeader
        marketplaceActive
        bounties
        algorithms
        createAlgorithm
        accountDropdown
      />
      <Row nogutter style={{ paddingTop: 32 }}>
        <Column xl={3} offset={{ xl: 1 }}>
          <Sidebar />
        </Column>
        <Column xl={7}>
          <Topbar algorithmCount={data.length} />
          <Row>
            {data.map((job, index) => (
              <JobCard
                key={index}
                title="Fashion Items Scanner"
                text="Quickly classify clothing and fashion items in images"
                authorName="Jimmy Barnes"
                authorImg="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350"
                downloads="41249"
                averageRating="4.5"
                totalRatings="62"
                rewardValue="2"
              />
            ))}
          </Row>
        </Column>
      </Row>
      <Row nogutter />
    </Grid>
  );
};

Marketplace.propTypes = {};

export default Marketplace;
