import { connect } from 'react-redux';

import MarketplaceComponent from './MarketplaceComponent';

const mapStateToProps = (state) => {
  const { email, firstName, id, lastName, walletAddress } = state.account;

  return {
    email,
    firstName,
    id,
    lastName,
    walletAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const MarketplaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketplaceComponent);

export default MarketplaceContainer;
