import React from "react";
// import PropTypes from 'prop-types';

import { Column, Grid, Row } from "@kyokan/kyokan-ui";

import DMLSiteHeader from "../dml-site-header";
import JobCard from "./jobCard/MarketplaceJobCardComponent";
import Sidebar from "./sidebar/MarketplaceSidebarComponent";
import Topbar from "./topBar/MarketPlaceHeaderComponent";
import Loading from "./loading/MarketplaceLoading";

const Marketplace = props => {
  let algorithms = [];

  if (props.allAlgorithmsOrder.length > 0) {
    algorithms = props.allAlgorithmsOrder.map(algorithm => {
      return props.allAlgorithmsMap[algorithm];
    });
  }

  const selectCategory = category => {
    if (category === props.selectedCategory) {
      props.deselectCategory(category);
    } else {
      props.selectCategory(category);
    }
  };

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
          <Sidebar
            selectCategory={selectCategory.bind(this)}
            category={props.selectedCategory}
          />
        </Column>
        <Column xl={7}>
          <Topbar algorithmCount={algorithms.length} />
          {algorithms.length === 0 ? (
            <Loading />
          ) : (
            <Row>
              {algorithms.map(algorithm => {
                const fullName = `${
                  algorithm.user.first_name
                    ? algorithm.user.first_name
                    : "Anonymous"
                } ${
                  algorithm.user.last_name
                    ? algorithm.user.last_name
                    : "Anonymous"
                }`;
                return (
                  <JobCard
                    key={algorithm.id}
                    title={algorithm.title}
                    text={algorithm.description}
                    authorName={fullName}
                    authorImg="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350"
                    downloads="41249"
                    averageRating="4.5"
                    totalRatings="62"
                    rewardValue="2"
                  />
                );
              })}
            </Row>
          )}
        </Column>
      </Row>
    </Grid>
  );
};

Marketplace.propTypes = {};

export default Marketplace;
