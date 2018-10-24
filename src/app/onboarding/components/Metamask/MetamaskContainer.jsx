import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import accountActions from '../../../account/duck/actions';
import MetamaskComponent from './MetamaskComponent';

const mapStateToProps = (state) => {
  return (
    {
      account : state.web3connect.account,
      web3    : state.web3connect.web3,
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return (
    {
      updateUser: (walletAddress, next) => {
        dispatch(accountActions.updateUser({
          user: {
            wallet_address: walletAddress,
          },
          next,
        }));
      },
    }
  );
};

const MetamaskContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MetamaskComponent),
);

export default MetamaskContainer;
