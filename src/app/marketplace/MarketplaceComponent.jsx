import React from "react";
// import PropTypes from 'prop-types';

import { Column, Grid, Row } from "@kyokan/kyokan-ui";

import DMLSiteHeader from "../dml-site-header";
import JobCard from "./jobCard/MarketplaceJobCardComponent";
import Sidebar from "./sidebar/MarketplaceSidebarComponent";
import Topbar from "./topBar/MarketPlaceHeaderComponent";
import EmptyState from "./emptyState/MarketplaceEmptyState";

const Marketplace = props => {
  // stores all available algorithms
  let allAlgorithms = [];
  // decides whhich algorithms get shown:
  let displayedAlgorithms = [];

  const getAllAlgorithms = () => {
    allAlgorithms = props.allAlgorithmsOrder.map(algorithm => {
      return props.allAlgorithmsMap[algorithm];
    });
  };

  const pushAlgorithmsIntoDisplayedAlgorithms = () => {
    if (props.allAlgorithmsOrder.length > 0 && !props.filteredAlgorithms) {
      displayedAlgorithms = allAlgorithms;
    } else if (props.filteredAlgorithms) {
      displayedAlgorithms = props.filteredAlgorithms;
    }
  };

  const selectCategory = category => {
    if (category === props.selectedCategory) {
      props.deselectCategory(category);
    } else {
      props.selectCategory(category);
    }
  };

  const searchAlgorithms = event => {
    console.log(props.loadingAlgorithms);
    const searchInput = event.target.value.toLowerCase();
    const filteredAlgorithms = allAlgorithms.filter(algorithm => {
      return (
        algorithm.title.toLowerCase().includes(searchInput) ||
        algorithm.description.toLowerCase().includes(searchInput)
      );
    });
    props.filterAlgorithms(filteredAlgorithms);
  };

  getAllAlgorithms();
  pushAlgorithmsIntoDisplayedAlgorithms();

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
            searchInputOnChange={searchAlgorithms}
          />
        </Column>
        <Column xl={7}>
          <Topbar algorithmCount={displayedAlgorithms.length} />
          {displayedAlgorithms.length === 0 ? (
            <EmptyState loading={props.loadingAlgorithms} />
          ) : (
            <Row>
              {displayedAlgorithms.map(algorithm => {
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
