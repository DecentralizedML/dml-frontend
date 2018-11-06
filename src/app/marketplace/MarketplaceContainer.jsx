import { connect } from "react-redux";

import MarketplaceComponent from "./MarketplaceComponent";

import marketplaceActions from "./duck/actions";
import algorithmsActions from "../algorithms/duck/actions";
import { listAlgorithms as getAllAlgorithms } from "../algorithms/duck/api";

const mapStateToProps = state => {
  // const { email, firstName, id, lastName, walletAddress } = state.account;
  const { selectedCategory, deselectCategory } = state.marketplace;
  const { allAlgorithmsMap, allAlgorithmsOrder } = state.algorithms;
  return {
    selectedCategory,
    deselectCategory,
    allAlgorithmsMap,
    allAlgorithmsOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(marketplaceActions.selectCategory(category));
    },
    deselectCategory: category => {
      dispatch(marketplaceActions.deselectCategory(category));
    }
  };
};

const MarketplaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketplaceComponent);

export default MarketplaceContainer;
