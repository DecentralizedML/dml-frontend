import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import accountActions from '../../../account/duck/actions';
import MetamaskComponent from './MetamaskComponent';

// const mapStateToProps = (state) => {
//   const { email, firstName, id, lastName, walletAddress } = state.account;

//   return {
//     email,
//     firstName,
//     id,
//     lastName,
//     walletAddress,
//   };
// };

// const mapDispatchToProps = (dispatch) => {};

// const MetamaskContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(MetamaskComponent);

const MetamaskContainer = withRouter(
  connect(
    (state) => {
      return (
        {
          account : state.web3connect.account,
          web3    : state.web3connect.web3,
        }
      );
    },
    (dispatch) => {
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
    },
  )(MetamaskComponent),
);

export default MetamaskContainer;
