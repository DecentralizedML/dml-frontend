import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

import DMLSiteHeader from "../dml-site-header";
import JobCard from "./jobCard/MarketplaceJobCardComponent";
import Sidebar from "./sidebar/MarketplaceSidebarComponent";
import Topbar from "./topBar/MarketPlaceHeaderComponent";
import EmptyState from "./emptyState/MarketplaceEmptyState";
import SelectedAlgorithm from "./selectedAlgorithm/MarketplaceSelectedAlgorithmComponent";

import { Wrapper, Left, Right, CardsWrapper } from "./marketPlaceUI";

const Marketplace = props => {
  // stores all available algorithms
  let allAlgorithms = [];
  // stores algorithms that get shown: (for filtering)
  let displayedAlgorithms = [];
  // stores the selected Algorithm
  const selectedAlgorithm = props.allAlgorithmsMap[props.selectedAlgorithm];

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
    // TODO: Implement filter once categories show up in Algo API response
    if (category === props.selectedCategory) {
      props.deselectCategory(category);
    } else {
      props.selectCategory(category);
    }
  };

  const searchAlgorithms = event => {
    const searchInput = event.target.value.toLowerCase();
    const filteredAlgorithms = allAlgorithms.filter(algorithm => {
      return (
        algorithm.title.toLowerCase().includes(searchInput) ||
        algorithm.description.toLowerCase().includes(searchInput)
      );
    });
    props.filterAlgorithms(filteredAlgorithms);
  };

  const selectAlgorithm = algorithm => {
    props.selectAlgorithm(algorithm);
  };

  const closeModal = () => {
    props.closeSelectedAlgorithm();
  };

  getAllAlgorithms();
  pushAlgorithmsIntoDisplayedAlgorithms();

  return (
    <div>
      <DMLSiteHeader
        marketplaceActive
        bounties
        algorithms
        createAlgorithm
        accountDropdown
      />
      <Wrapper>
        <Left>
          <Sidebar
            selectCategory={selectCategory.bind(this)}
            category={props.selectedCategory}
            searchInputOnChange={searchAlgorithms}
          />
        </Left>
        <Right>
          <Topbar algorithmCount={displayedAlgorithms.length} />
          {displayedAlgorithms.length === 0 ? (
            <EmptyState loading={props.loadingAlgorithms} />
          ) : (
            <CardsWrapper>
              {displayedAlgorithms.map(algorithm => (
                <JobCard
                  key={algorithm.id}
                  title={algorithm.title}
                  text={algorithm.description}
                  authorName={algorithm.user.full_name}
                  authorImg="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350"
                  downloads="41249"
                  averageRating="4.5"
                  totalRatings="62"
                  rewardValue="2"
                  onClick={() => selectAlgorithm(algorithm.id)}
                />
              ))}
            </CardsWrapper>
          )}
          {props.selectedAlgorithm && (
            <SelectedAlgorithm
              category={"Image Recognition"}
              handleClose={closeModal}
              title={selectedAlgorithm.title}
              text={selectedAlgorithm.description}
              img={
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350"
              }
              fullName={selectedAlgorithm.user.full_name}
              priceValue="2"
              uploadedImage={props.uploadedImage}
              uploadImage={props.uploadImage}
            />
          )}
        </Right>
      </Wrapper>
    </div>
  );
};

Marketplace.propTypes = {};

export default Marketplace;
