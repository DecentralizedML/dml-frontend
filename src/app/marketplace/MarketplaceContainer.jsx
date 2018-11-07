import { connect } from "react-redux";

import MarketplaceComponent from "./MarketplaceComponent";

import marketplaceActions from "./duck/actions";

const mapStateToProps = state => {
  // const { email, firstName, id, lastName, walletAddress } = state.account;
  const {
    selectedCategory,
    deselectCategory,
    filteredAlgorithms,
    loadingAlgorithms
  } = state.marketplace;
  const { allAlgorithmsMap, allAlgorithmsOrder } = state.algorithms;
  return {
    selectedCategory,
    deselectCategory,
    allAlgorithmsMap,
    allAlgorithmsOrder,
    filteredAlgorithms,
    loadingAlgorithms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(marketplaceActions.selectCategory(category));
    },
    deselectCategory: category => {
      dispatch(marketplaceActions.deselectCategory(category));
    },
    filterAlgorithms: algorithms => {
      dispatch(marketplaceActions.filterAlgorithms(algorithms));
    }
  };
};

const MarketplaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketplaceComponent);

export default MarketplaceContainer;
