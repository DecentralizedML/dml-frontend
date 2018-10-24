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

const MarketplaceContainer = connect(
  mapStateToProps,
)(MarketplaceComponent);

export default MarketplaceContainer;
