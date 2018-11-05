import { connect } from "react-redux";

import MarketplaceComponent from "./MarketplaceComponent";

import marketplaceActions from "./duck/actions";

const mapStateToProps = state => {
  // const { email, firstName, id, lastName, walletAddress } = state.account;
  const { category, tag } = state.marketplace;
  return { category, tag };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(marketplaceActions.selectCategory(category));
    },
    selectTag: tag => {
      dispatch(marketplaceActions.selectTag(tag));
    }
  };
};

const MarketplaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketplaceComponent);

export default MarketplaceContainer;
